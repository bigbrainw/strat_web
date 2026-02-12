'use client'

import { useState, useEffect, useRef } from 'react'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [transitionDuration, setTransitionDuration] = useState(0.15)
  const lastScrollY = useRef(0)
  const lastScrollTime = useRef(Date.now())

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop
      const currentTime = Date.now()
      const timeDelta = currentTime - lastScrollTime.current
      const scrollDelta = Math.abs(currentScrollY - lastScrollY.current)
      
      // Calculate scroll speed (pixels per millisecond)
      const speed = timeDelta > 0 ? scrollDelta / timeDelta : 0
      
      // Map scroll speed to transition duration
      // Faster scroll = faster transition (lower duration)
      // Slower scroll = slower transition (higher duration)
      // Speed range: 0-10 pixels/ms, duration range: 0.05s - 0.2s
      const minDuration = 0.05
      const maxDuration = 0.2
      const maxSpeed = 10 // pixels per millisecond
      const normalizedSpeed = Math.min(speed, maxSpeed) / maxSpeed
      const dynamicDuration = maxDuration - (normalizedSpeed * (maxDuration - minDuration))
      
      setTransitionDuration(dynamicDuration)
      setIsScrolled(currentScrollY > 50)
      
      lastScrollY.current = currentScrollY
      lastScrollTime.current = currentTime
    }

    // Check initial scroll position
    handleScroll()

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={styles.container}>
      <nav 
        className={`${styles.nav} ${isScrolled ? styles.navScrolled : ''}`}
        style={{ 
          '--transition-duration': `${transitionDuration}s`
        } as React.CSSProperties}
      >
        <div className={styles.navContent}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoChinese}>韜略法律事務所</span>
            <span className={styles.logoEnglish}>Strategy Law Firm</span>
          </Link>
          <ul className={styles.navLinks}>
            <li><a href="#about">關於本所</a></li>
            <li><a href="#victories">勝訴案例</a></li>
            <li><a href="#innocence">無罪推定</a></li>
            <li><a href="#services">服務項目</a></li>
            <li><a href="#lawyer">律師介紹</a></li>
            <li><a href="#contact">聯絡我們</a></li>
          </ul>
        </div>
      </nav>

      <div 
        className={`${styles.scrollingBanner} ${isScrolled ? styles.scrollingBannerScrolled : ''}`}
        style={{ 
          '--transition-duration': `${transitionDuration}s`
        } as React.CSSProperties}
      >
        <div className={styles.scrollingBannerContent}>
          <div className={styles.scrollingBannerText}>
            <span>If you take drugs, just go fuck yourself. We don&apos;t take your cases.</span>
            <span>If you take drugs, just go fuck yourself. We don&apos;t take your cases.</span>
            <span>If you take drugs, just go fuck yourself. We don&apos;t take your cases.</span>
            <span>If you take drugs, just go fuck yourself. We don&apos;t take your cases.</span>
            <span>If you take drugs, just go fuck yourself. We don&apos;t take your cases.</span>
          </div>
        </div>
      </div>

      <section id="home" className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <div className={styles.heroMeta}>
              <span className={styles.heroCategory}>專業法律服務</span>
              <span className={styles.heroDate}>24小時內回覆</span>
            </div>
            <h1 className={styles.heroTitle}>
              I&apos;ll Make Them Pay.<br/>
              Whoever Is Responsible,<br/>
              I&apos;ll Make Sure They Fucking Pay.
            </h1>
            <p className={styles.heroSummary}>
              Even if you did it, doesn&apos;t mean you are guilty.
            </p>
            <div className={styles.heroActions}>
              <a href="#contact" className={styles.buttonPrimary}>立即諮詢</a>
              <a href="#services" className={styles.buttonSecondary}>服務項目</a>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.imagePlaceholder}></div>
          </div>
        </div>
      </section>

      <section id="victories" className={styles.victories}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>I&apos;ve Made Them Pay</h2>
          <div className={styles.victoriesGrid}>
            <div className={styles.victoryCard}>
              <div className={styles.victoryAmount}>$2.5M</div>
              <h3 className={styles.victoryTitle}>Contract Breach Settlement</h3>
              <p className={styles.victoryDesc}>
                Client was wrongfully terminated from a major contract. We didn&apos;t just negotiate—we made them pay every cent they owed, plus damages.
              </p>
            </div>
            <div className={styles.victoryCard}>
              <div className={styles.victoryAmount}>$1.8M</div>
              <h3 className={styles.victoryTitle}>Employment Discrimination</h3>
              <p className={styles.victoryDesc}>
                They thought they could get away with it. They were wrong. Full compensation plus punitive damages.
              </p>
            </div>
            <div className={styles.victoryCard}>
              <div className={styles.victoryAmount}>$950K</div>
              <h3 className={styles.victoryTitle}>Real Estate Fraud</h3>
              <p className={styles.victoryDesc}>
                Seller tried to hide defects. We exposed everything and made them pay for every repair, every inconvenience, every lie.
              </p>
            </div>
            <div className={styles.victoryCard}>
              <div className={styles.victoryAmount}>$3.2M</div>
              <h3 className={styles.victoryTitle}>Corporate Litigation</h3>
              <p className={styles.victoryDesc}>
                Big corporation thought they could bully a small business. We turned the tables and made them pay triple damages.
              </p>
            </div>
            <div className={styles.victoryCard}>
              <div className={styles.victoryAmount}>$1.5M</div>
              <h3 className={styles.victoryTitle}>Intellectual Property</h3>
              <p className={styles.victoryDesc}>
                They stole our client&apos;s work. We didn&apos;t just stop them—we made them pay for every dollar they made off it.
              </p>
            </div>
            <div className={styles.victoryCard}>
              <div className={styles.victoryAmount}>$2.1M</div>
              <h3 className={styles.victoryTitle}>Personal Injury</h3>
              <p className={styles.victoryDesc}>
                Insurance company tried to lowball. We fought back and secured full compensation for medical bills, lost wages, and pain.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="innocence" className={styles.innocence}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Did They Do It? We Don&apos;t Know. But They Are Not Guilty.</h2>
          <div className={styles.innocenceCases}>
            <div className={styles.innocenceCard}>
              <h3 className={styles.innocenceCaseTitle}>Criminal Defense - Not Guilty</h3>
              <p className={styles.innocenceCaseDesc}>
                Client was accused of fraud. Prosecution couldn&apos;t prove intent beyond reasonable doubt. 
                We exposed the gaps in their evidence. Verdict: Not guilty.
              </p>
            </div>
            <div className={styles.innocenceCard}>
              <h3 className={styles.innocenceCaseTitle}>Assault Charges - Dismissed</h3>
              <p className={styles.innocenceCaseDesc}>
                They said our client attacked them. We proved self-defense. The evidence showed they started it. 
                Charges dismissed.
              </p>
            </div>
            <div className={styles.innocenceCard}>
              <h3 className={styles.innocenceCaseTitle}>White Collar Crime - Acquitted</h3>
              <p className={styles.innocenceCaseDesc}>
                Complex financial case. Prosecution had circumstantial evidence, but no smoking gun. 
                We showed reasonable doubt. Jury acquitted.
              </p>
            </div>
            <div className={styles.innocenceCard}>
              <h3 className={styles.innocenceCaseTitle}>Drug Charges - Not Guilty</h3>
              <p className={styles.innocenceCaseDesc}>
                Client was in the wrong place at the wrong time. We proved they had no knowledge, no control, 
                no intent. Not guilty on all counts.
              </p>
            </div>
            <div className={styles.innocenceCard}>
              <h3 className={styles.innocenceCaseTitle}>Theft Case - Charges Dropped</h3>
              <p className={styles.innocenceCaseDesc}>
                They claimed our client stole. We showed the evidence was tainted, the witness unreliable. 
                Prosecution dropped charges before trial.
              </p>
            </div>
            <div className={styles.innocenceCard}>
              <h3 className={styles.innocenceCaseTitle}>DUI Defense - Reduced to Reckless</h3>
              <p className={styles.innocenceCaseDesc}>
                Breathalyzer was faulty. Procedure wasn&apos;t followed. We challenged every piece of evidence. 
                Reduced from DUI to reckless driving.
              </p>
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
