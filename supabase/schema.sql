-- ============================================
-- OpenClaw - Supabase Database Schema
-- 재실행 가능 (idempotent) 스크립트
-- Teaching AI와 동일 Supabase 프로젝트 공유
-- ============================================

-- ============================================
-- 1. 공통 테이블 (Teaching AI와 공유)
-- ============================================

-- User Profiles (extends auth.users)
CREATE TABLE IF NOT EXISTS user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name TEXT,
  avatar_url TEXT,
  role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin')),
  api_keys JSONB DEFAULT '{}',
  signup_domain TEXT,
  visited_sites JSONB DEFAULT '[]',
  last_sign_in_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- 2. 게시판 테이블 (Teaching AI와 공유)
-- ============================================

-- Board Posts
CREATE TABLE IF NOT EXISTS teaching_board_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  author_name TEXT,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT DEFAULT 'free' CHECK (category IN ('notice', 'resource', 'question', 'free')),
  views INTEGER DEFAULT 0,
  comment_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Board Comments
CREATE TABLE IF NOT EXISTS teaching_board_comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID NOT NULL REFERENCES teaching_board_posts(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  author_name TEXT,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- 3. 누락된 컬럼 안전 추가
-- ============================================

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'user_profiles' AND column_name = 'signup_domain') THEN
    ALTER TABLE user_profiles ADD COLUMN signup_domain TEXT;
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'user_profiles' AND column_name = 'visited_sites') THEN
    ALTER TABLE user_profiles ADD COLUMN visited_sites JSONB DEFAULT '[]';
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'user_profiles' AND column_name = 'last_sign_in_at') THEN
    ALTER TABLE user_profiles ADD COLUMN last_sign_in_at TIMESTAMPTZ;
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'teaching_board_posts' AND column_name = 'category') THEN
    ALTER TABLE teaching_board_posts ADD COLUMN category TEXT DEFAULT 'free' CHECK (category IN ('notice', 'resource', 'question', 'free'));
  END IF;
END $$;

-- ============================================
-- 4. RLS 활성화
-- ============================================

ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE teaching_board_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE teaching_board_comments ENABLE ROW LEVEL SECURITY;

-- ============================================
-- 5. RLS 정책
-- ============================================

-- User Profiles
DROP POLICY IF EXISTS "Users can view own profile" ON user_profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON user_profiles;
DROP POLICY IF EXISTS "Users can insert own profile" ON user_profiles;

CREATE POLICY "Users can view own profile" ON user_profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON user_profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON user_profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- Board Posts
DROP POLICY IF EXISTS "Anyone can view posts" ON teaching_board_posts;
DROP POLICY IF EXISTS "Auth users can create posts" ON teaching_board_posts;
DROP POLICY IF EXISTS "Users can update own posts" ON teaching_board_posts;
DROP POLICY IF EXISTS "Users can delete own posts" ON teaching_board_posts;

CREATE POLICY "Anyone can view posts" ON teaching_board_posts FOR SELECT USING (true);
CREATE POLICY "Auth users can create posts" ON teaching_board_posts FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own posts" ON teaching_board_posts FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own posts" ON teaching_board_posts FOR DELETE USING (auth.uid() = user_id);

-- Board Comments
DROP POLICY IF EXISTS "Anyone can view comments" ON teaching_board_comments;
DROP POLICY IF EXISTS "Auth users can create comments" ON teaching_board_comments;
DROP POLICY IF EXISTS "Users can delete own comments" ON teaching_board_comments;

CREATE POLICY "Anyone can view comments" ON teaching_board_comments FOR SELECT USING (true);
CREATE POLICY "Auth users can create comments" ON teaching_board_comments FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can delete own comments" ON teaching_board_comments FOR DELETE USING (auth.uid() = user_id);

-- ============================================
-- 6. 인덱스
-- ============================================

CREATE INDEX IF NOT EXISTS idx_posts_created ON teaching_board_posts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_posts_category ON teaching_board_posts(category);
CREATE INDEX IF NOT EXISTS idx_comments_post ON teaching_board_comments(post_id);

-- ============================================
-- 7. 트리거: 댓글 수 자동 업데이트
-- ============================================

CREATE OR REPLACE FUNCTION update_comment_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE teaching_board_posts SET comment_count = comment_count + 1 WHERE id = NEW.post_id;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE teaching_board_posts SET comment_count = comment_count - 1 WHERE id = OLD.post_id;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_comment_count ON teaching_board_comments;
CREATE TRIGGER trg_comment_count
AFTER INSERT OR DELETE ON teaching_board_comments
FOR EACH ROW EXECUTE FUNCTION update_comment_count();

-- ============================================
-- 8. 트리거: user_profiles 자동 생성 (신규 가입 시)
-- ============================================

CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO user_profiles (id, display_name, avatar_url, role)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', split_part(NEW.email, '@', 1)),
    COALESCE(NEW.raw_user_meta_data->>'avatar_url', NEW.raw_user_meta_data->>'picture', ''),
    'user'
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- ============================================
-- 9. 트리거: updated_at 자동 업데이트
-- ============================================

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_profiles_updated ON user_profiles;
CREATE TRIGGER trg_profiles_updated
BEFORE UPDATE ON user_profiles
FOR EACH ROW EXECUTE FUNCTION update_updated_at();

DROP TRIGGER IF EXISTS trg_posts_updated ON teaching_board_posts;
CREATE TRIGGER trg_posts_updated
BEFORE UPDATE ON teaching_board_posts
FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================
-- 10. check_user_status RPC (계정 상태 확인)
-- ============================================

CREATE OR REPLACE FUNCTION check_user_status(target_user_id UUID, current_domain TEXT)
RETURNS JSON AS $$
DECLARE
  profile_data RECORD;
BEGIN
  SELECT * INTO profile_data FROM user_profiles WHERE id = target_user_id;

  IF NOT FOUND THEN
    RETURN json_build_object('status', 'active');
  END IF;

  IF profile_data.role = 'blocked' THEN
    RETURN json_build_object(
      'status', 'blocked',
      'reason', 'Account has been blocked by administrator'
    );
  END IF;

  RETURN json_build_object('status', 'active');
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
