import styles from '../page.module.css'
import Link from 'next/link'

export default function PrivacyPage() {
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
          <h1 className={styles.pageTitle}>隱私權政策</h1>
          <p style={{ color: '#666', marginBottom: '3rem', fontSize: '0.95rem' }}>
            最後更新日期：{new Date().toLocaleDateString('zh-TW')}
          </p>

          <div style={{ lineHeight: '1.9', color: '#333' }}>
            <h2 style={{ fontFamily: "'Noto Serif TC', serif", fontSize: '1.25rem', marginTop: '3rem', marginBottom: '1rem', color: '#1a1a1a', fontWeight: '600' }}>
              一、隱私權保護政策的適用範圍
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              隱私權保護政策內容，包括本網站如何處理在您使用網站服務時收集到的個人識別資料。
              隱私權保護政策不適用於本網站以外的相關連結網站，也不適用於非本網站所委託或參與管理的人員。
            </p>

            <h2 style={{ fontFamily: "'Noto Serif TC', serif", fontSize: '1.25rem', marginTop: '3rem', marginBottom: '1rem', color: '#1a1a1a', fontWeight: '600' }}>
              二、個人資料的蒐集、處理及利用方式
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              當您造訪本網站或使用本網站所提供之功能服務時，我們將視該服務功能性質，請您提供必要的個人資料，
              並在該特定目的範圍內處理及利用您的個人資料；非經您書面同意，本網站不會將個人資料用於其他用途。
            </p>
            <p style={{ marginBottom: '1rem' }}>
              本網站在您使用服務信箱、諮詢表單等互動性功能時，會保留您所提供的姓名、電子郵件地址、聯絡方式及使用時間等。
            </p>

            <h2 style={{ fontFamily: "'Noto Serif TC', serif", fontSize: '1.25rem', marginTop: '3rem', marginBottom: '1rem', color: '#1a1a1a', fontWeight: '600' }}>
              三、資料之保護
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              本網站主機均設有防火牆、防毒系統等相關的各項資訊安全設備及必要的安全防護措施，
              加以保護網站及您的個人資料採用嚴格的保護措施，只由經過授權的人員才能接觸您的個人資料，
              相關處理人員皆簽有保密合約，如有違反保密義務者，將會受到相關的法律處分。
            </p>

            <h2 style={{ fontFamily: "'Noto Serif TC', serif", fontSize: '1.25rem', marginTop: '3rem', marginBottom: '1rem', color: '#1a1a1a', fontWeight: '600' }}>
              四、網站對外的相關連結
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              本網站的網頁提供其他網站的網路連結，您也可經由本網站所提供的連結，點選進入其他網站。
              但該連結網站不適用本網站的隱私權保護政策，您必須參考該連結網站中的隱私權保護政策。
            </p>

            <h2 style={{ fontFamily: "'Noto Serif TC', serif", fontSize: '1.25rem', marginTop: '3rem', marginBottom: '1rem', color: '#1a1a1a', fontWeight: '600' }}>
              五、Cookie之使用
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              為了提供您最佳的服務，本網站會在您的電腦中放置並取用我們的Cookie，
              若您不願接受Cookie的寫入，您可在您使用的瀏覽器功能項中設定隱私權等級為高，
              即可拒絕Cookie的寫入，但可能會導致網站某些功能無法正常執行。
            </p>

            <h2 style={{ fontFamily: "'Noto Serif TC', serif", fontSize: '1.25rem', marginTop: '3rem', marginBottom: '1rem', color: '#1a1a1a', fontWeight: '600' }}>
              六、隱私權保護政策之修正
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              本網站隱私權保護政策將因應需求隨時進行修正，修正後的條款將刊登於網站上。
            </p>

            <h2 style={{ fontFamily: "'Noto Serif TC', serif", fontSize: '1.25rem', marginTop: '3rem', marginBottom: '1rem', color: '#1a1a1a', fontWeight: '600' }}>
              七、聯絡我們
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              如果您對本網站的隱私權政策有任何疑問，歡迎與我們聯絡：
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Email: lawyerchen4928@gmail.com<br />
              電話：02-2381-2255<br />
              手機：0932-008942
            </p>
          </div>

          <div style={{ marginTop: '4rem' }}>
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
