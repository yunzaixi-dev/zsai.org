import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import React, {useRef, useState} from 'react';
import { useHistory } from '@docusaurus/router';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState('');
  
  // 处理搜索提交
  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const query = searchQuery.trim();
    if (!query) return;
    
    // 跳转到搜索结果页
    history.push(`/search?q=${encodeURIComponent(query)}`);
  };
  
  // 处理输入更改
  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  
  // 处理按键事件
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSearchSubmit(event);
    }
  };
  
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
        
        {/* 搜索输入框 */}
        <div className={styles.searchContainer}>
          <form onSubmit={handleSearchSubmit}>
            <div className={styles.searchInputWrapper}>
              <button 
                type="submit" 
                className={styles.searchButton}
                aria-label="搜索"
              >
                <svg 
                  className={styles.searchIcon} 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24"
                >
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                </svg>
              </button>
              <input
                type="text"
                className={styles.enlargedSearchInput}
                placeholder="搜索文档、教程和资源..."
                aria-label="搜索"
                ref={searchInputRef}
                value={searchQuery}
                onChange={handleSearchInputChange}
                onKeyDown={handleKeyDown}
              />
            </div>
          </form>
        </div>
        
        {/* 社区介绍 */}
        <p className={styles.communityDescription} style={{marginTop: '1rem'}}>
          智识ΑIEΣΣΥΔΟ社区的官方教程仓库，
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
