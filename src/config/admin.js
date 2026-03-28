export const ADMIN_EMAILS = [
  'aebonlee@gmail.com',
  'aebon@kakao.com',
  'admin@dreamitbiz.com',
];

export function isAdmin(email) {
  return ADMIN_EMAILS.includes(email?.toLowerCase());
}
