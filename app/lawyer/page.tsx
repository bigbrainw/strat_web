import styles from '../page.module.css'
import Link from 'next/link'

export default function LawyerPage() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoChinese}>韜略法律事務所</span>
            <span className={styles.logoEnglish}>Strategy Law Firm</span>
          </Link>
          <ul className={styles.navLinks}>
            <li><Link href="/#about">關於本所</Link></li>
            <li><Link href="/#services">服務項目</Link></li>
            <li><Link href="/#lawyer">律師介紹</Link></li>
            <li><Link href="/#insights">實務觀點</Link></li>
            <li><Link href="/#contact">聯絡我們</Link></li>
          </ul>
        </div>
      </nav>

      <section className={styles.pageSection} style={{ paddingTop: '120px' }}>
        <div className={styles.sectionContent}>
          <h1 className={styles.pageTitle}>律師介紹</h1>
          <div className={styles.lawyerPageContent}>
            <div className={styles.lawyerPageInfo}>
              <h2 className={styles.lawyerPageName}>陳志偉</h2>
              <p className={styles.lawyerPageTitle}>主持律師</p>
            </div>

            <div className={styles.lawyerPageSection}>
              <h3 className={styles.lawyerPageSectionTitle}>現職</h3>
              <p>韜略法律事務所 主持律師</p>
              <p>金帝投資顧問股份有限公司 監察人</p>
            </div>

            <div className={styles.lawyerPageSection}>
              <h3 className={styles.lawyerPageSectionTitle}>著作</h3>
              <p>勞退新制 Easy Go！（合著）</p>
              <p>買屋租屋不受騙之 Q&A 大全</p>
            </div>

            <div className={styles.lawyerPageSection}>
              <h3 className={styles.lawyerPageSectionTitle}>服務聚焦</h3>
              <p>
                專注於民事訴訟、勞資爭議、不動產法律、公司法律顧問等領域。
                協助當事人理解風險與選項，用策略與證據降低不確定性，讓決策可執行、可預期。
              </p>
            </div>

            <div className={styles.lawyerPageSection}>
              <h3 className={styles.lawyerPageSectionTitle}>工作方式</h3>
              <p><strong>回覆時效：</strong>收到詢問後 24 小時內回覆</p>
              <p><strong>費用可預期：</strong>每個案件都會清楚說明費用結構與計費方式，讓當事人可預期</p>
              <p><strong>流程透明：</strong>讓當事人了解風險、選項與案件進度，心裡有底</p>
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
          </div>
        </div>
      </footer>
    </div>
  )
}
