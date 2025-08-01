import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '首頁',
      href: getPermalink('/'),
    },
    {
      text: '部落格',
      links: [
        {
          text: '文章列表',
          href: getBlogPermalink(),
        },
        {
          text: '分類',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: '標籤',
          href: getPermalink('/tags'),
        },
      ],
    },
    {
      text: '關於我',
      href: getPermalink('/about'),
    },
    {
      text: '聯絡我',
      href: getPermalink('/contact'),
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: '部落格',
      links: [
        { text: '最新文章', href: getBlogPermalink() },
        { text: '分類', href: getPermalink('tutorials', 'category') },
        { text: '標籤', href: getPermalink('/tags') },
        { text: 'RSS', href: getAsset('/rss.xml') },
      ],
    },
    {
      title: '關於',
      links: [
        { text: '關於我', href: getPermalink('/about') },
        { text: '聯絡我', href: getPermalink('/contact') },
      ],
    },
    {
      title: '法律',
      links: [
        { text: '使用條款', href: getPermalink('/terms') },
        { text: '隱私權政策', href: getPermalink('/privacy') },
      ],
    },
  ],
  secondaryLinks: [
    { text: '使用條款', href: getPermalink('/terms') },
    { text: '隱私權政策', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://fb.me/LisbethW1130' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/lisbethw1130' },
  ],
  footNote: `
    <span class="text-sm dark:text-muted">© 2025 Lisbeth Wu. 版權所有.</span>
    <span class="text-xs dark:text-muted block mt-1">網站由 Lisbeth Wu 與 GitHub Copilot 共同開發</span>
  `,
};
