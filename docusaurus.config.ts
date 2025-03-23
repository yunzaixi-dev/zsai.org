import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: '智识ΑIEΣΣΥΔΟ',
  tagline: 'Support by 智识ΑIEΣΣΥΔΟ',
  favicon: 'img/logo.ico',

  // Set the production url of your site here
  url: 'https://www.zs.zaixi.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'yunzaixi-dev', // Usually your GitHub org/user name.
  projectName: 'zs-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      content:
        '智识ΑIEΣΣΥΔΟ - 平等、开放、共享的开源社区 💙',
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
          href: 'https://discord.gg/DaePbQXhnH',
          label: 'Discord',
          position: 'right',
          className: 'navbar-discord-link',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '开始使用',
              to: '/docs/intro',
            },
            {
              label: '教程',
              to: '/docs/tutorial-basics/create-a-page',
            },
            {
              label: '指南',
              to: '/docs/category/tutorial-extras',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'GitHub讨论',
              href: 'https://github.com/yunzaixi-dev/zs-docs/discussions',
            },
            {
              label: '参与贡献',
              href: 'https://github.com/yunzaixi-dev/zs-docs/blob/main/CONTRIBUTING.md',
            },
            {
              label: '行为准则',
              href: 'https://github.com/yunzaixi-dev/zs-docs/blob/main/CODE_OF_CONDUCT.md',
            },
          ],
        },
        {
          title: '资源',
          items: [
            {
              label: '博客',
              to: '/blog',
            },
            {
              label: 'GitHub仓库',
              href: 'https://github.com/yunzaixi-dev/zs-docs',
            },
            {
              label: '问题反馈',
              href: 'https://github.com/yunzaixi-dev/zs-docs/issues',
            },
          ],
        },
      ],
      logo: {
        alt: '智识ΑIEΣΣΥΔΟ Logo',
        src: 'img/logo.png',
        href: '/',
        width: 80,
      },
      copyright: `
        <div class="footer__core-values">
          <div class="footer__value-item">
            <svg class="footer__value-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,3c-0.5,0-1,0.4-1,1v2c0,0.6,0.5,1,1,1s1-0.4,1-1V4C13,3.4,12.5,3,12,3z"/>
              <path d="M18.3,7.7c-0.4,0.4-1,0.4-1.4,0L15.6,9c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l1.3-1.3
                C18.7,8.7,18.7,8.1,18.3,7.7z"/>
              <path d="M20,11h-2c-0.6,0-1,0.4-1,1s0.4,1,1,1h2c0.6,0,1-0.4,1-1S20.6,11,20,11z"/>
              <path d="M7.1,9l-1.3-1.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4L5.7,10.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3
                C7.5,10,7.5,9.4,7.1,9z"/>
              <path d="M6,12c0-0.6-0.4-1-1-1H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h2C5.6,13,6,12.6,6,12z"/>
              <path d="M12,16c0-2.2-1.8-4-4-4c-1.5,0-2.9,0.9-3.6,2.2C4.2,14.6,4.3,15,4.6,15.3c0.3,0.3,0.7,0.3,1,0.1C6.2,14.7,7,14,8,14
                c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2c-0.4,0-0.8-0.1-1.2-0.4c-0.3-0.2-0.7-0.2-1,0.1c-0.3,0.3-0.2,0.7,0.1,1C6.8,19.6,7.9,20,9,20
                c0.5,0,1-0.1,1.5-0.3c0.5,0.2,1,0.3,1.5,0.3C14.2,20,16,18.2,16,16c0-1.1-0.9-2-2-2c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2
                c-0.4,0-0.8-0.1-1.2-0.4c-0.3-0.2-0.7-0.2-1,0.1c-0.3,0.3-0.2,0.7,0.1,1C12.8,19.6,13.9,20,15,20c2.2,0,4-1.8,4-4
                c0-1.5-0.9-2.9-2.2-3.6c-0.4-0.2-0.8-0.1-1.1,0.3c-0.3,0.3-0.3,0.7-0.1,1c0.7,0.6,1.4,1.4,1.4,2.3c0,1.1-0.9,2-2,2
                c-1.1,0-2-0.9-2-2"/>
            </svg>
            <span class="footer__value-text">平等</span>
          </div>
          
          <div class="footer__value-item">
            <svg class="footer__value-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z"/>
              <path d="M14,15h2v-3h3v-2h-3V7h-2v3h-3v2h3V15z"/>
              <path d="M10,7H8v9h2V7z"/>
            </svg>
            <span class="footer__value-text">开放</span>
          </div>
          
          <div class="footer__value-item">
            <svg class="footer__value-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8,11c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S9.1,11,8,11z"/>
              <path d="M16,11c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S17.1,11,16,11z"/>
              <path d="M12,4c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S13.1,4,12,4z"/>
              <path d="M12,16c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S13.1,16,12,16z"/>
              <path d="M15.1,7.3c-0.4,0.4-0.4,1,0,1.4l4.3,4.3c0.4,0.4,1,0.4,1.4,0s0.4-1,0-1.4l-4.3-4.3C16.1,6.9,15.5,6.9,15.1,7.3z"/>
              <path d="M10.6,7.3C10.2,6.9,9.6,6.9,9.2,7.3l-5,5c-0.4,0.4-0.4,1,0,1.4s1,0.4,1.4,0l5-5C11,8.3,11,7.7,10.6,7.3z"/>
              <path d="M13.3,17.7c-0.4-0.4-1-0.4-1.4,0l-3.5,3.5c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l3.5-3.5
                C13.7,18.7,13.7,18.1,13.3,17.7z"/>
              <path d="M14.9,16.4l3.5-3.5c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-3.5,3.5c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3
                S14.7,16.6,14.9,16.4z"/>
            </svg>
            <span class="footer__value-text">共享</span>
          </div>
        </div>
        
        <div class="footer__bottom">
          <div>Copyright ${new Date().getFullYear()} 智识ΑIEΣΣΥΔΟ社区 | <a href="/privacy">隐私政策</a> | <a href="/terms">服务条款</a></div>
        </div>
      `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
