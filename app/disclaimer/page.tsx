import styles from '../page.module.css'
import Link from 'next/link'

export default function DisclaimerPage() {
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
        <div className={styles.sectionContent} style={{ maxWidth: '800px' }}>
          <h1 className={styles.pageTitle}>免責聲明</h1>
          <p style={{ color: '#666', marginBottom: '3rem', fontSize: '0.95rem' }}>
            最後更新日期：{new Date().toLocaleDateString('zh-TW')}
          </p>

          <div style={{ lineHeight: '1.9', color: '#333' }}>
            <h2 style={{ fontFamily: "'Noto Serif TC', serif", fontSize: '1.25rem', marginTop: '3rem', marginBottom: '1rem', color: '#1a1a1a', fontWeight: '600' }}>
              一、網站內容不構成法律意見
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              本網站所提供之資訊、內容、文章、範本等，僅供一般參考用途，<strong>不構成任何形式的法律意見、建議或推薦</strong>。
              網站內容不應被視為建立律師與當事人間之委任關係，亦不應被視為對任何特定法律問題的專業建議。
            </p>

            <h2 style={{ fontFamily: "'Noto Serif TC', serif", fontSize: '1.25rem', marginTop: '3rem', marginBottom: '1rem', color: '#1a1a1a', fontWeight: '600' }}>
              二、個案諮詢之必要性
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              每個法律案件的情況不同，適用的法律條文、判決先例、以及處理方式可能有所差異。
              本網站所提供的一般性資訊，<strong>無法取代針對您具體情況的專業法律諮詢</strong>。
            </p>
            <p style={{ marginBottom: '1rem' }}>
              如果您有具體的法律問題，建議您：
            </p>
            <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
              <li>直接與本所律師預約諮詢</li>
              <li>提供完整的案件事實與相關文件</li>
              <li>獲得針對您個案情況的專業法律意見</li>
            </ul>

            <h2 style={{ fontFamily: "'Noto Serif TC', serif", fontSize: '1.25rem', marginTop: '3rem', marginBottom: '1rem', color: '#1a1a1a', fontWeight: '600' }}>
              三、資訊之正確性與時效性
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              本網站力求資訊的正確性與時效性，但法律條文可能隨時修正，司法實務見解也可能變更。
              本網站不保證所提供資訊的完整性、正確性、或最新狀態。
              使用者應自行查證相關法律條文與最新實務見解。
            </p>

            <h2 style={{ fontFamily: "'Noto Serif TC', serif", fontSize: '1.25rem', marginTop: '3rem', marginBottom: '1rem', color: '#1a1a1a', fontWeight: '600' }}>
              四、不保證特定結果
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              本網站所提及的案例、結果、或成功經驗，僅供參考，<strong>不保證任何特定案件會獲得相同或類似的結果</strong>。
              每個案件的結果取決於具體事實、證據、適用法條、以及法院或相關機關的判斷。
            </p>

            <h2 style={{ fontFamily: "'Noto Serif TC', serif", fontSize: '1.25rem', marginTop: '3rem', marginBottom: '1rem', color: '#1a1a1a', fontWeight: '600' }}>
              五、外部連結
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              本網站可能包含連結至其他網站的外部連結。本網站不對這些外部網站的內容、隱私權政策、或實務負責。
              使用者應自行評估外部連結網站的安全性與可靠性。
            </p>

            <h2 style={{ fontFamily: "'Noto Serif TC', serif", fontSize: '1.25rem', marginTop: '3rem', marginBottom: '1rem', color: '#1a1a1a', fontWeight: '600' }}>
              六、使用本網站之風險
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              使用者基於本網站資訊所做的任何決定或採取的行動，其風險由使用者自行承擔。
              本網站及其所屬律師事務所，對於因使用或無法使用本網站資訊而產生的任何損害，不負任何責任。
            </p>

            <h2 style={{ fontFamily: "'Noto Serif TC', serif", fontSize: '1.25rem', marginTop: '3rem', marginBottom: '1rem', color: '#1a1a1a', fontWeight: '600' }}>
              七、律師資格與執業範圍
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              本所律師均具備台灣律師資格，並加入相關律師公會。
              本所律師的執業範圍以台灣法律為主，涉及其他國家或地區的法律問題，建議諮詢當地合格律師。
            </p>

            <h2 style={{ fontFamily: "'Noto Serif TC', serif", fontSize: '1.25rem', marginTop: '3rem', marginBottom: '1rem', color: '#1a1a1a', fontWeight: '600' }}>
              八、聯絡我們
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              如果您對本免責聲明有任何疑問，或需要專業法律諮詢，歡迎與我們聯絡：
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Email: lawyerchen4928@gmail.com<br />
              電話：02-2381-2255<br />
              手機：0932-008942<br />
              <Link href="/contact" style={{ color: '#2d5a87' }}>前往聯絡我們頁面</Link>
            </p>
          </div>

          <div style={{ 
            marginTop: '4rem', 
            padding: '2rem 0', 
            borderTop: '1px solid #e0e0e0'
          }}>
            <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.8', color: '#4a4a4a', fontWeight: '300' }}>
              本網站內容僅供參考，不構成法律意見。聯絡或填寫表單不代表已成立委任關係，案件細節請以正式諮詢為準。
            </p>
          </div>

          <div style={{ marginTop: '3rem' }}>
            <Link href="/" className={styles.buttonPrimary}>返回首頁</Link>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLinks}>
            <Link href="/privacy">隱私權政策</Link>
            <span>|</span>
            <Link href="/disclaimer">免責聲明</Link>
            <span>|</span>
            <Link href="/#contact">聯絡我們</Link>
          </div>
          <p>&copy; {new Date().getFullYear()} 韜略法律事務所 Strategy Law Firm. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
