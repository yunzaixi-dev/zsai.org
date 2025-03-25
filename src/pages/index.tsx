import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import React, {useRef, useState, useEffect} from 'react';
import { useHistory } from '@docusaurus/router';
import SearchSuggestions from '@site/src/components/SearchSuggestions';
import { getSearchSuggestions, SearchResult } from '@site/src/utils/searchApi';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState<SearchResult[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  
  // 处理搜索提交
  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const query = searchQuery.trim();
    if (!query) return;
    
    // 跳转到搜索结果页
    history.push(`/search?q=${encodeURIComponent(query)}`);
    setShowSuggestions(false);
  };
  
  // 处理输入更改
  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchQuery(value);
    
    if (value.trim().length >= 2) {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };
  
  // 处理按键事件
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSearchSubmit(event);
    } else if (event.key === 'Escape') {
      setShowSuggestions(false);
    }
  };
  
  // 处理建议点击
  const handleSuggestionClick = (suggestion: SearchResult) => {
    setSearchQuery(suggestion.title);
    setShowSuggestions(false);
    history.push(suggestion.url);
  };
  
  // 处理点击外部区域关闭建议
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }
    
    // 添加事件监听
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // 清理事件监听
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchContainerRef]);
  
  // 获取搜索建议
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchQuery.trim().length < 2) {
        setSearchSuggestions([]);
        return;
      }
      
      setIsLoading(true);
      try {
        const results = await getSearchSuggestions(searchQuery);
        setSearchSuggestions(results);
      } catch (error) {
        console.error('获取搜索建议失败:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    // 设置防抖，避免每次按键都发请求
    const debounceTimer = setTimeout(() => {
      fetchSuggestions();
    }, 300);
    
    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);
  
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
        <div className={styles.searchContainer} ref={searchContainerRef}>
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
                autoComplete="off"
              />
              {isLoading && (
                <div className={styles.loadingIndicator}>
                  <div className={styles.loadingSpinner}></div>
                </div>
              )}
            </div>
          </form>
          <SearchSuggestions
            suggestions={searchSuggestions}
            isVisible={showSuggestions}
            onSuggestionClick={handleSuggestionClick}
          />
        </div>
        
        {/* 社区介绍 */}
        <p className={styles.communityDescription} style={{marginTop: '1rem'}}>
          智识ΑIEΣΣΥΔΟ社区的官方教程仓库，
          <Link to="/docs/引言" className={styles.exploreLink}>
            开始探索
          </Link>
        </p>
        
        {/* 添加网站标语 */}
        <p className={styles.supportText}>
          <Link to="https://zaixi.dev" className={styles.elegantFont}>powered by yunzaixi-dev</Link>
        </p>
        
        {/* 添加站点描述 */}
        <p className={styles.siteDescription}>
          <em className={styles.goldText}>一个简单，纯粹的开源社区 ---- 2025.2.20</em>
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
