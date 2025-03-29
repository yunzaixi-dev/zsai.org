import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: '智识ΑIEΣΣΥΔΟ',
  tagline: 'Support by 智识ΑIEΣΣΥΔΟ',
  favicon: 'img/logo.ico',

  // Set the production url of your site here
  url: 'https://zsai.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'yunzaixi-dev', // Usually your GitHub org/user name.
  projectName: 'zs-docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN', 'en'],
  },

  // 启用 Mermaid 主题支持
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  plugins: [
    [
      '@docusaurus/plugin-sitemap',
      {
        id: 'custom-sitemap', // 添加唯一ID以区分默认插件
        lastmod: 'date',
        changefreq: 'weekly',
        priority: 0.5,
        ignorePatterns: ['/tags/**'],
        filename: 'sitemap.xml',
        createSitemapItems: async (params) => {
          const {defaultCreateSitemapItems, ...rest} = params;
          const items = await defaultCreateSitemapItems(rest);
          return items.filter((item) => !item.url.includes('/page/'));
        },
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/zsai-org/zsai.org/tree/main',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/zsai-org/zsai.org/tree/main',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    announcementBar: {
      id: 'support_us',
      content: '智识ΑIEΣΣΥΔΟ - 平等、开放、共享的开源社区 💙',
      backgroundColor: '#0175C2',
      textColor: '#ffffff',
      isCloseable: true,
    },
    navbar: {
      title: '智识ΑIEΣΣΥΔΟ',
      logo: {
        alt: '智识ΑIEΣΣΥΔΟ Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '教程',
        },
        {to: '/blog', label: '博客', position: 'left'},
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://discord.gg/DaePbQXhnH',
          label: 'Discord',
          position: 'right',
          className: 'navbar-discord-link',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    // 配置 Mermaid 选项
    mermaid: {
      theme: {light: 'default', dark: 'dark'},
      options: {
        themeVariables: {
          // 亮色主题变量
          primaryColor: '#5271ff',
          primaryTextColor: '#323232',
          primaryBorderColor: '#7C84FF',
          lineColor: '#5271ff',
          secondaryColor: '#6CA0FF',
          tertiaryColor: '#EDF2FF',
          // 节点样式
          nodeBorder: '#5271ff',
          nodeBackgroundColor: '#EDF2FF',
          mainBkg: '#f8fafd',
          // 文本颜色
          textColor: '#323232',
          // 边框和箭头
          clusterBkg: '#F5F8FE',
          clusterBorder: '#5271ff',
          // 字体和边距
          fontSize: '16px',
          labelBackground: '#EDF2FF',
        },
        // 全局样式设置
        fontFamily: 'Segoe UI, Roboto, sans-serif',
        fontSize: 14,
        flowchart: {
          curve: 'basis',
          htmlLabels: true,
          padding: 15,
          nodeSpacing: 30,
          rankSpacing: 80,
          useMaxWidth: true,
        },
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
