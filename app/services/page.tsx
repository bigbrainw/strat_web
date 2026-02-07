import styles from '../page.module.css'
import Link from 'next/link'

export default function ServicesPage() {
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
          <h1 className={styles.pageTitle}>服務項目</h1>

          <div className={styles.serviceDetailSection}>
            <h2 className={styles.serviceDetailTitle}>訴訟事件</h2>
            <p className={styles.serviceDetailIntro}>
              當爭議無法透過協商解決時，我們協助當事人理解訴訟風險與選項，用策略與證據降低不確定性。
            </p>
            <div className={styles.serviceDetailContent}>
              <h3 className={styles.serviceDetailSubtitle}>適合情況</h3>
              <ul className={styles.serviceDetailList}>
                <li>合約糾紛、債務追討等民事爭議</li>
                <li>刑事案件辯護或告訴代理</li>
                <li>行政處分救濟、行政訴訟</li>
                <li>離婚、監護權、繼承等家事案件</li>
                <li>商標、專利、著作權等智財爭議</li>
                <li>需要透過仲裁解決的商業糾紛</li>
              </ul>
              <h3 className={styles.serviceDetailSubtitle}>服務流程</h3>
              <ul className={styles.serviceDetailList}>
                <li>了解案情與相關文件，釐清當事人的風險與選項</li>
                <li>評估法律風險，用證據與策略降低不確定性</li>
                <li>擬定可執行的訴訟策略</li>
                <li>撰寫書狀與出庭辯護</li>
                <li>判決後執行或上訴評估，說明各種選項的風險與可行性</li>
              </ul>
            </div>
          </div>

          <div className={styles.serviceDetailSection}>
            <h2 className={styles.serviceDetailTitle}>非訟事件</h2>
            <p className={styles.serviceDetailIntro}>
              協助當事人在問題發生前理解風險與選項，透過法律顧問、文件審閱與諮詢，讓決策可執行、可預期。
            </p>
            <div className={styles.serviceDetailContent}>
              <h3 className={styles.serviceDetailSubtitle}>適合情況</h3>
              <ul className={styles.serviceDetailList}>
                <li>企業需要定期法律諮詢與文件審閱</li>
                <li>簽約前需要理解風險與選項</li>
                <li>需要撰擬清楚、可執行的契約與協議</li>
                <li>需要發送律師函或存證信函</li>
                <li>需要法律意見書作為決策參考</li>
              </ul>
              <h3 className={styles.serviceDetailSubtitle}>服務流程</h3>
              <ul className={styles.serviceDetailList}>
                <li>了解當事人需求與背景，釐清風險與選項</li>
                <li>提供清楚的法律建議或文件審閱</li>
                <li>撰擬或修改法律文件，確保條款清楚、可執行</li>
                <li>說明文件重點、風險與注意事項</li>
                <li>後續追蹤與調整，保持流程透明</li>
              </ul>
            </div>
          </div>

          <div className={styles.serviceCTA}>
            <p className={styles.serviceCTAText}>需要了解你的風險與選項？歡迎與我們聯繫</p>
            <div className={styles.serviceCTALinks}>
              <a href="tel:02-2381-2255" className={styles.buttonPrimary}>02-2381-2255</a>
              <a href="mailto:lawyerchen4928@gmail.com" className={styles.buttonSecondary}>lawyerchen4928@gmail.com</a>
              <Link href="/contact" className={styles.buttonSecondary}>填寫諮詢表單</Link>
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
