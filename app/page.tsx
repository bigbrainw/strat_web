import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoChinese}>韜略法律事務所</span>
            <span className={styles.logoEnglish}>Strategy Law Firm</span>
          </Link>
          <ul className={styles.navLinks}>
            <li><a href="#about">關於本所</a></li>
            <li><a href="#services">服務項目</a></li>
            <li><a href="#lawyer">律師介紹</a></li>
            <li><a href="#insights">實務觀點</a></li>
            <li><a href="#contact">聯絡我們</a></li>
          </ul>
        </div>
      </nav>

      <section id="home" className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <div className={styles.heroMeta}>
              <span className={styles.heroCategory}>法律觀點</span>
              <span className={styles.heroDate}>2026年2月</span>
            </div>
            <h1 className={styles.heroTitle}>
              合約與爭議處理：理解風險與選項，讓決策可執行
            </h1>
            <p className={styles.heroSummary}>
              許多商業糾紛來自於當事人不清楚自己的風險與選項。我們協助你理解法律風險、
              評估各種策略的可行性，用證據與策略把不確定性降到最低。
            </p>
            <div className={styles.heroActions}>
              <a href="#contact" className={styles.buttonPrimary}>聯絡我們</a>
              <a href="#services" className={styles.buttonSecondary}>查看服務</a>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.imagePlaceholder}></div>
          </div>
        </div>
      </section>

      <section id="insights" className={styles.spotlight}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>常見情境</h2>
          <div className={styles.spotlightGrid}>
            <div className={styles.spotlightCard}>
              <h3 className={styles.spotlightTitle}>租賃與買賣糾紛</h3>
              <p className={styles.spotlightDesc}>
                協助理解你的權利與風險，評估協商、調解、訴訟等策略選項。
              </p>
              <a href="#contact" className={styles.spotlightLink}>了解詳情</a>
            </div>
            <div className={styles.spotlightCard}>
              <h3 className={styles.spotlightTitle}>勞資爭議處理</h3>
              <p className={styles.spotlightDesc}>
                釐清法律風險與選項，用策略與證據降低不確定性，讓決策可執行。
              </p>
              <a href="#contact" className={styles.spotlightLink}>了解詳情</a>
            </div>
            <div className={styles.spotlightCard}>
              <h3 className={styles.spotlightTitle}>公司合約審閱</h3>
              <p className={styles.spotlightDesc}>
                在簽約前理解風險與選項，確保合約條款清楚、可執行、可預期。
              </p>
              <a href="#contact" className={styles.spotlightLink}>了解詳情</a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className={styles.services}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>服務項目</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCategory}>
              <h3 className={styles.categoryTitle}>訴訟事件</h3>
              <ul className={styles.serviceList}>
                <li>民事訴訟</li>
                <li>刑事訴訟</li>
                <li>行政訴訟</li>
                <li>家事訴訟</li>
                <li>智財訴訟</li>
                <li>仲裁</li>
              </ul>
            </div>
            <div className={styles.serviceCategory}>
              <h3 className={styles.categoryTitle}>非訟事件</h3>
              <ul className={styles.serviceList}>
                <li>常年法律顧問</li>
                <li>法律諮詢</li>
                <li>撰擬法律意見書</li>
                <li>契約撰擬與審閱</li>
                <li>律師函</li>
                <li>存證信函</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="lawyer" className={styles.lawyer}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>律師</h2>
          <div className={styles.lawyerContent}>
            <div className={styles.lawyerInfo}>
              <h3 className={styles.lawyerName}>陳志偉</h3>
              <p className={styles.lawyerTitle}>主持律師</p>
              <div className={styles.lawyerDetails}>
                <div className={styles.detailSection}>
                  <h4 className={styles.detailTitle}>現職</h4>
                  <p>韜略法律事務所 主持律師</p>
                  <p>金帝投資顧問股份有限公司 監察人</p>
                </div>
                <div className={styles.detailSection}>
                  <h4 className={styles.detailTitle}>著作</h4>
                  <p>勞退新制 Easy Go！（合著）</p>
                  <p>買屋租屋不受騙之 Q&A 大全</p>
                </div>
                <div className={styles.detailSection}>
                  <h4 className={styles.detailTitle}>工作方式</h4>
                  <p>回覆時效：收到詢問後 24 小時內回覆</p>
                  <p>費用可預期：清楚說明費用結構與計費方式</p>
                  <p>流程透明：讓當事人了解風險、選項與進度</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className={styles.contactStrip}>
        <div className={styles.sectionContent}>
          <div className={styles.contactStripGrid}>
            <div className={styles.contactItem}>
              <strong>電話</strong>
              <p>02-2381-2255</p>
            </div>
            <div className={styles.contactItem}>
              <strong>手機</strong>
              <p>0932-008942</p>
            </div>
            <div className={styles.contactItem}>
              <strong>Email</strong>
              <p>lawyerchen4928@gmail.com</p>
            </div>
            <div className={styles.contactItem}>
              <strong>地址</strong>
              <p>臺北市中正區寧陽路3號2樓</p>
            </div>
            <div className={styles.contactItem}>
              <strong>營業時間</strong>
              <p>平日 09:00-18:00</p>
            </div>
            <div className={styles.contactItem}>
              <strong>LINE</strong>
              <p><a href="line://ti/p/0932008942" className={styles.lineLink}>加 LINE 好友</a></p>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerMain}>
            <p className={styles.footerFirm}>韜略法律事務所 Strategy Law Firm</p>
            <p className={styles.footerAddress}>臺北市中正區寧陽路3號2樓</p>
          </div>
          <div className={styles.footerLegal}>
            <Link href="/privacy" className={styles.footerLink}>隱私權政策</Link>
            <span className={styles.footerSeparator}>|</span>
            <Link href="/disclaimer" className={styles.footerLink}>免責聲明</Link>
            <p className={styles.footerDisclaimer}>
              本網站內容僅供參考，不構成法律意見。聯絡或填寫表單不代表已成立委任關係，案件細節請以正式諮詢為準。
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
