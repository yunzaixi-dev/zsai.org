import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      {/* 左侧小装饰 */}
      <div className={styles.sideDecor} style={{left: '30px', position: 'absolute', top: '50%'}}>
        <span>&lt;</span>
        <span>/</span>
        <span>&gt;</span>
      </div>
      
      {/* 右侧小装饰 */}
      <div className={styles.sideDecor} style={{right: '30px', position: 'absolute', top: '50%'}}>
        <span>{'{}'}</span>
        <span>()</span>
        <span>[]</span>
      </div>
      
      <div className="container">
        {/* 抽象图形设计 - 象征平等、开放和共享 */}
        <div className={styles.logoContainer}>
          <div className={styles.logoTag} style={{marginRight: "15px"}}>&lt;/</div>
          <div className={styles.medalFrame}>
            <div className={styles.abstractLogo}>
              <div className={styles.abstractCircle}></div>
              <div className={styles.abstractElement1}></div>
              <div className={styles.abstractElement2}></div>
              <div className={styles.abstractElement3}>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div className={styles.logoTag} style={{marginLeft: "15px"}}>/&gt;</div>
        </div>
        
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        
        {/* pub.dev 风格的搜索框 */}
        <div className={styles.searchContainer}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="搜索文档、教程和资源..."
            aria-label="搜索"
          />
        </div>
        
        <div className={styles.buttons}>
          <Link
            className={clsx('button', styles.buttonDiscord)}
            to="https://discord.gg/DaePbQXhnH"
            target="_blank"
            rel="noopener noreferrer">
            加入Discord
          </Link>
          <Link
            className={clsx('button', styles.buttonSecondary)}
            to="/docs/intro">
            开始探索
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="智识ΑIEΣΣΥΔΟ - 简单，纯粹的开源社区">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
