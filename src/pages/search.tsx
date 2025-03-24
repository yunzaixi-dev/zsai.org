import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import { useLocation } from '@docusaurus/router';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import { performSearch, SearchResult } from '@site/src/utils/searchApi';

import styles from './search.module.css';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchPage(): React.ReactElement {
  const query = useQuery();
  const searchQuery = query.get('q') || '';
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSearchResults() {
      if (!searchQuery) {
        setSearchResults([]);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const results = await performSearch(searchQuery);
        setSearchResults(results);
      } catch (err) {
        console.error('搜索失败:', err);
        setError('搜索请求失败，请稍后再试');
      } finally {
        setIsLoading(false);
      }
    }

    fetchSearchResults();
  }, [searchQuery]);

  return (
    <Layout
      title={`搜索结果: ${searchQuery}`}
      description={`智识ΑIEΣΣΥΔΟ - 搜索结果: ${searchQuery}`}
    >
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className={styles.searchContainer}>
        <div className={styles.searchHeader}>
          <h1 className={styles.searchTitle}>搜索结果: <span className={styles.searchQuery}>{searchQuery}</span></h1>
        </div>

        <div className={styles.searchResultsContainer}>
          {isLoading ? (
            <div className={styles.loadingContainer}>
              <div className={styles.loadingSpinner}></div>
              <p>正在搜索中...</p>
            </div>
          ) : error ? (
            <div className={styles.errorContainer}>
              <p className={styles.errorMessage}>{error}</p>
              <Link to="/" className={styles.backHomeLink}>返回首页</Link>
            </div>
          ) : searchResults.length === 0 ? (
            <div className={styles.noResultsContainer}>
              <p className={styles.noResultsMessage}>未找到与 "<strong>{searchQuery}</strong>" 相关的内容</p>
              <div className={styles.searchTips}>
                <h3>搜索建议:</h3>
                <ul>
                  <li>确保所有单词拼写正确</li>
                  <li>尝试使用不同的关键词</li>
                  <li>尝试使用更通用的关键词</li>
                </ul>
              </div>
              <Link to="/" className={styles.backHomeLink}>返回首页</Link>
            </div>
          ) : (
            <div className={styles.searchResultsList}>
              <p className={styles.resultsCount}>找到 {searchResults.length} 个结果</p>
              {searchResults.map((result) => (
                <div key={result.id} className={styles.searchResultItem}>
                  <Link to={result.url} className={styles.resultTitle}>
                    {result.title}
                  </Link>
                  {result.content && (
                    <p className={styles.resultSnippet}>{result.content}</p>
                  )}
                  <div className={styles.resultUrl}>{result.url}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
