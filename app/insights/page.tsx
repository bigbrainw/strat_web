import styles from '../page.module.css'
import Link from 'next/link'

export default function InsightsPage() {
  const articles = [
    {
      category: '合約',
      title: '合約審閱時該注意哪些重點？',
      excerpt: '簽約前如何快速檢視合約條款，避免後續爭議。',
      date: '2026.01.20'
    },
    {
      category: '爭議',
      title: '對方違約時，你可以主張哪些權利？',
      excerpt: '當合約一方不履行義務時，法律上可以採取的救濟途徑。',
      date: '2026.01.15'
    },
    {
      category: '勞資',
      title: '資遣費如何計算？常見問題解析',
      excerpt: '勞基法規定的資遣費計算方式與實務上常見問題。',
      date: '2026.01.10'
    },
    {
      category: '家事',
      title: '離婚協議書該注意什麼？',
      excerpt: '協議離婚時，如何確保協議內容完整且可執行。',
      date: '2025.12.28'
    },
    {
      category: '智財',
      title: '商標侵權的判斷標準',
      excerpt: '如何判斷是否構成商標侵權，以及如何保護自己的商標權。',
      date: '2025.12.20'
    },
    {
      category: '公司治理',
      title: '公司設立時該注意的法律問題',
      excerpt: '新設公司時常見的法律風險與如何避免。',
      date: '2025.12.15'
    }
  ]

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
            <li><Link href="/#contact">聯絡我們</Link></li>
          </ul>
        </div>
      </nav>

      <section className={styles.pageSection} style={{ paddingTop: '120px' }}>
        <div className={styles.sectionContent}>
          <h1 className={styles.pageTitle}>實務觀點</h1>
          <div className={styles.articlesList}>
            {articles.map((article, index) => (
              <article key={index} className={styles.articleListItem}>
                <div className={styles.articleListMeta}>
                  <span className={styles.articleListCategory}>{article.category}</span>
                  <span className={styles.articleListDate}>{article.date}</span>
                </div>
                <h2 className={styles.articleListTitle}>{article.title}</h2>
                <p className={styles.articleListExcerpt}>{article.excerpt}</p>
              </article>
            ))}
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
