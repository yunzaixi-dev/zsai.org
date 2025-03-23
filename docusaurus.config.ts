import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: '智识ΑIEΣΣΥΔΟ',
  tagline: '简单，纯粹的开源社区',
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
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://discord.gg/DaePbQXhnH',
          label: 'Discord',
          position: 'right',
          className: 'navbar-discord-link',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
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
        <div class="footer__social">
          <a href="https://github.com/yunzaixi-dev" class="social-icon" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
          </a>
          <a href="#" class="social-icon" target="_blank" rel="noopener noreferrer" aria-label="X">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path></svg>
          </a>
          <a href="https://discord.gg/DaePbQXhnH" class="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Discord">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path></svg>
          </a>
        </div>
        
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
