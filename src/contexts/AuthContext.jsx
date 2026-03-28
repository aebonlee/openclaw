import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../utils/supabase';
import { isAdmin } from '../config/admin';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [accountBlock, setAccountBlock] = useState(null);

  const clearAccountBlock = () => setAccountBlock(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) loadProfile(session.user.id);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      const u = session?.user ?? null;
      setUser(u);
      if (u) {
        loadProfile(u.id);
        if (event === 'SIGNED_IN') {
          supabase.from('user_profiles')
            .update({ last_sign_in_at: new Date().toISOString() })
            .eq('id', u.id)
            .then(() => {});
        }
      } else {
        setProfile(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  async function loadProfile(userId) {
    try {
      const { data: profileData } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', userId)
        .single();
      if (profileData) {
        setProfile(profileData);

        const currentDomain = window.location.hostname;
        const updates = {};
        if (!profileData.signup_domain) updates.signup_domain = currentDomain;
        const sites = Array.isArray(profileData.visited_sites) ? profileData.visited_sites : [];
        if (!sites.includes(currentDomain)) {
          updates.visited_sites = [...sites, currentDomain];
        }
        if (Object.keys(updates).length > 0) {
          supabase.from('user_profiles').update(updates).eq('id', userId).then(() => {});
        }

        try {
          const { data: statusData } = await supabase.rpc('check_user_status', {
            target_user_id: userId,
            current_domain: currentDomain,
          });
          if (statusData && statusData.status && statusData.status !== 'active') {
            setAccountBlock({
              status: statusData.status,
              reason: statusData.reason || '',
              suspended_until: statusData.suspended_until || null,
            });
            await supabase.auth.signOut();
            setUser(null);
            setProfile(null);
            return;
          }
        } catch {
          // check_user_status 함수 미존재 시 무시
        }
      } else {
        setProfile(null);
      }
    } catch {
      setProfile(null);
    }
  }

  async function updateProfile(updates) {
    if (!user) return { error: 'Not authenticated' };
    const { data, error } = await supabase
      .from('user_profiles')
      .upsert({ id: user.id, ...updates }, { onConflict: 'id' })
      .select()
      .single();
    if (data) setProfile(data);
    return { data, error };
  }

  async function signOut() {
    await supabase.auth.signOut();
    setUser(null);
    setProfile(null);
  }

  const value = {
    user,
    profile,
    loading,
    accountBlock,
    clearAccountBlock,
    isLoggedIn: !!user,
    isAdmin: isAdmin(user?.email),
    signOut,
    updateProfile,
    refreshProfile: () => user && loadProfile(user.id),
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
