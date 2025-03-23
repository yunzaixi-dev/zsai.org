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
      <div className="container">
        {/* 中心渐变色圆球 */}
        <div className={styles.logoContainer}>
          <div className={styles.logoTag} style={{marginRight: "15px"}}>&lt;/</div>
          <div className={styles.simpleGradientBall}></div>
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
