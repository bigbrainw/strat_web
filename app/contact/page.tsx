import styles from '../page.module.css'
import Link from 'next/link'

export default function ContactPage() {
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
          <h1 className={styles.pageTitle}>聯絡我們</h1>
          <div className={styles.contactPageGrid}>
            <div className={styles.contactPageInfo}>
              <div className={styles.contactPageItem}>
                <strong>地址</strong>
                <p>臺北市中正區寧陽路3號2樓</p>
              </div>
              <div className={styles.contactPageItem}>
                <strong>電話</strong>
                <p>02-2381-2255</p>
              </div>
              <div className={styles.contactPageItem}>
                <strong>手機</strong>
                <p>0932-008942</p>
              </div>
              <div className={styles.contactPageItem}>
                <strong>傳真</strong>
                <p>02-2371-2727</p>
              </div>
              <div className={styles.contactPageItem}>
                <strong>Email</strong>
                <p>lawyerchen4928@gmail.com</p>
              </div>
              <div className={styles.contactPageItem}>
                <strong>營業時間</strong>
                <p>平日 09:00-18:00</p>
              </div>
              <div className={styles.contactPageItem}>
                <strong>LINE</strong>
                <p><a href="line://ti/p/0932008942" className={styles.lineLink}>加 LINE 好友</a></p>
              </div>
              <div className={styles.contactPageMap}>
                {/* Google Map iframe placeholder - replace with actual embed code */}
                <div className={styles.mapPlaceholder}>
                  <p>地圖位置</p>
                </div>
              </div>
            </div>
            <div className={styles.contactPageForm}>
              <form className={styles.contactFormFull}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">姓名</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">聯絡電話</label>
                    <input type="tel" id="phone" name="phone" />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="caseType">案件類型</label>
                  <select id="caseType" name="caseType">
                    <option value="">請選擇</option>
                    <option value="civil">民事</option>
                    <option value="criminal">刑事</option>
                    <option value="administrative">行政</option>
                    <option value="family">家事</option>
                    <option value="ip">智財</option>
                    <option value="corporate">公司</option>
                    <option value="labor">勞資</option>
                    <option value="other">其他</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="situation">簡述情況</label>
                  <textarea id="situation" name="situation" rows={6} required></textarea>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.checkboxLabel}>
                    <input type="checkbox" name="urgent" />
                    <span>急件（需要盡快處理）</span>
                  </label>
                </div>
                <button type="submit" className={styles.buttonPrimary}>送出</button>
                <p className={styles.formDisclaimer}>
                  填寫此表單不構成法律意見。聯絡或填寫表單不代表已成立委任關係，案件細節請以正式諮詢為準。
                </p>
              </form>
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
