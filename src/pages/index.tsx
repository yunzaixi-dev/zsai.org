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
        {/* 添加Logo到标题上方 */}
        <div className={styles.logoContainer}>
          <img 
            src="/img/logo.png" 
            alt="智识ΑIEΣΣΥΔΟ Logo" 
            className={styles.logo}
          />
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
            className={clsx('button', styles.buttonPrimary)}
            to="/docs/intro">
            开始探索
          </Link>
          <Link
            className={clsx('button', styles.buttonSecondary)}
            to="/blog">
            了解更多
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
