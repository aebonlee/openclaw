import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="brand-teaching">Open</span>
              <span className="brand-ai">Claw</span>
            </div>
            <p className="footer-description">{t('footer.description')}</p>
          </div>

          <div className="footer-links">
            <h4>{t('footer.quickLinks')}</h4>
            <ul className="footer-link-list">
              <li><Link to="/intro">{language === 'ko' ? '소개' : 'About'}</Link></li>
              <li><Link to="/resources">{t('nav.resources')}</Link></li>
              <li><Link to="/prompt-practice">{t('nav.promptPractice')}</Link></li>
              <li><Link to="/glossary">{language === 'ko' ? 'AI 용어사전' : 'AI Glossary'}</Link></li>
              <li><Link to="/roadmap">{language === 'ko' ? '학습 로드맵' : 'Roadmap'}</Link></li>
              <li><Link to="/ai-news">{language === 'ko' ? 'AI 트렌드' : 'AI Trends'}</Link></li>
              <li><Link to="/community/board">{t('nav.community')}</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>{language === 'ko' ? '연락처' : 'Contact'}</h4>
            <p className="footer-email">
              <span className="footer-email-icon"><i className="fa-solid fa-envelope" /></span>
              <a href="mailto:aebon@dreamitbiz.com">aebon@dreamitbiz.com</a>
            </p>
            <p>010-3700-0629</p>
            <p>카카오톡: aebon</p>
            <p className="business-hours">평일 09:00 ~ 18:00</p>

            <div className="footer-family">
              <select
                defaultValue=""
                onChange={(e) => {
                  if (e.target.value) window.open(e.target.value, '_blank');
                  e.target.value = '';
                }}
              >
                <option value="" disabled>Family Site</option>
                <option value="https://www.dreamitbiz.com">DreamIT Biz</option>
                <option value="https://teaching.dreamitbiz.com">Teaching AI</option>
                <option value="https://edu-hub.dreamitbiz.com">Edu-Hub</option>
              </select>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 드림아이티비즈(DreamIT Biz). All rights reserved.</p>
          <p className="footer-bottom-info">
            Designed by Ph.D Aebon Lee | 대표이사: 이애본 | 사업자등록번호: 601-45-20154 | 통신판매신고번호: 제2024-수원팔달-0584호 | 출판사 신고번호: 제2026-000026호
          </p>
        </div>
      </div>
    </footer>
  );
}
