import styles from '../page.module.css'
import Link from 'next/link'

export default function AboutPage() {
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
          <h1 className={styles.pageTitle}>關於本所</h1>
          <div className={styles.pageContent}>
            <p>
              韜略法律事務所的使命不是「提供法律服務」，而是：讓當事人能理解自己的風險與選項，
              用策略與證據把不確定性降到最低，讓委任流程與費用可預期、可溝通。
            </p>
            <p>
              我們協助當事人理解法律風險、評估各種策略選項，用證據與策略降低不確定性。
              每個案件都會清楚說明處理流程、預期時程與費用結構，讓當事人在充分了解的情況下做出決定。
            </p>
            <p>
              我們的工作方式：回覆時效明確（24 小時內回覆）、費用可預期（清楚說明費用結構）、
              流程透明（讓當事人了解風險、選項與進度）。初步諮詢可透過電話、Email 或預約面談進行。
            </p>
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
