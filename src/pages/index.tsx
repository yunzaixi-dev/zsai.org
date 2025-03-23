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
        {/* 标题栏和天平图标 */}
        <div className={styles.titleContainer}>
          <img src="/img/logo.png" alt="智识ΑIEΣΣΥΔΟ Logo" className={styles.headerLogo} />
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
        </div>
        
        {/* 加长的圆角搜索框 */}
        <div className={styles.searchContainer}>
          <input
            type="text"
            className={styles.enlargedSearchInput}
            placeholder="搜索文档、教程和资源..."
            aria-label="搜索"
          />
        </div>
        
        {/* 社区介绍 */}
        <p className={styles.communityDescription}>
          智识ΑIEΣΣΥΔΟ社区的开源教程仓库，
          <Link to="/docs/intro" className={styles.exploreLink}>
            开始探索
          </Link>
        </p>
        
        {/* 添加网站标语 */}
        <p className={styles.supportText}>
          <Link to="https://zaixi.dev" className={styles.elegantFont}>powered by yunzaixi-dev</Link>
        </p>
        
        {/* 添加站点描述 */}
        <p className={styles.siteDescription}>
          <em className={styles.goldText}>这个新社区的名字，就叫做智识ΑIEΣΣΥΔΟ吧 ---- 2025.2.20</em>
        </p>
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
