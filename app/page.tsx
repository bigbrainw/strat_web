import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>韜略法律事務所</Link>
      </header>

      <main className={styles.main}>
        <p className={styles.tagline}>專業法律服務 · 24 小時內回覆</p>
        
        <div className={styles.basicInfo}>
          <h2>主持律師</h2>
          <p>陳志偉</p>

          <h2>現職</h2>
          <p>韜略法律事務所 主持律師</p>
          <p>金帝投資顧問股份有限公司 監察人</p>

          <h2>著作</h2>
          <p>勞退新制 Easy Go！（合著）</p>
          <p>買屋租屋不受騙之 Q&A 大全</p>

          <h2>訴訟事件</h2>
          <ul>
            <li>民事訴訟</li>
            <li>刑事訴訟</li>
            <li>行政訴訟</li>
            <li>家事訴訟</li>
            <li>智財訴訟</li>
            <li>仲裁</li>
          </ul>

          <h2>非訟事件</h2>
          <ul>
            <li>常年法律顧問</li>
            <li>法律諮詢</li>
            <li>撰擬法律意見書</li>
            <li>契約撰擬與審閱</li>
            <li>律師函</li>
            <li>存證信函</li>
          </ul>

          <h2 id="contact">聯絡方式</h2>
          <p>電話 02-2381-2255</p>
          <p>手機 0932-008942</p>
          <p><a href="mailto:lawyerchen4928@gmail.com">lawyerchen4928@gmail.com</a></p>
          <p>臺北市中正區寧陽路 3 號 2 樓</p>
          <p>平日 09:00–18:00</p>
          <p><a href="line://ti/p/0932008942" className={styles.lineLink}>加 LINE 好友</a></p>
        </div>
      </main>

      <a
        href="line://ti/p/0932008942"
        className={styles.lineFloat}
        target="_blank"
        rel="noopener noreferrer"
      >
        LINE 我
      </a>

      <footer className={styles.footer}>
        <p>韜略法律事務所</p>
        <p className={styles.footerLinks}>
          <Link href="/privacy">隱私權政策</Link>
          <span>|</span>
          <Link href="/disclaimer">免責聲明</Link>
        </p>
      </footer>
    </div>
  )
}
