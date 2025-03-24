/**
 * 搜索API服务
 * 用于连接自定义的搜索API并获取搜索建议
 */

export interface SearchResult {
  id: string;
  title: string;
  url: string;
  content?: string;
}

// 搜索API基础URL - 需要替换为您的实际API URL
const API_BASE_URL = 'https://api.zs.zaixi.com';

/**
 * 根据查询文本获取搜索建议
 * @param query 搜索查询文本
 * @returns 搜索建议列表
 */
export async function getSearchSuggestions(query: string): Promise<SearchResult[]> {
  if (!query || query.trim().length < 2) {
    return [];
  }

  try {
    // 构建API URL，添加查询参数
    const url = `${API_BASE_URL}/search/suggestions?q=${encodeURIComponent(query)}`;
    
    // 发送请求到API
    const response = await fetch(url);
    
    // 检查响应状态
    if (!response.ok) {
      console.error('搜索API请求失败:', response.status, response.statusText);
      return [];
    }
    
    // 解析响应数据
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error('搜索API请求出错:', error);
    return [];
  }
}

/**
 * 执行完整搜索并获取结果
 * @param query 搜索查询文本
 * @returns 搜索结果列表
 */
export async function performSearch(query: string): Promise<SearchResult[]> {
  if (!query || query.trim().length < 2) {
    return [];
  }

  try {
    // 构建API URL，添加查询参数
    const url = `${API_BASE_URL}/search?q=${encodeURIComponent(query)}`;
    
    // 发送请求到API
    const response = await fetch(url);
    
    // 检查响应状态
    if (!response.ok) {
      console.error('搜索API请求失败:', response.status, response.statusText);
      return [];
    }
    
    // 解析响应数据
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error('搜索API请求出错:', error);
    return [];
  }
}
