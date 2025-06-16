/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: 'wiki', link: '/wiki/' },
  { text: '在线地图', link: '/map/' },
  { text: '服务器', link: '/server/' },
  { text: '博客', link: '/blog/' },
  {
    text: '关于',
    items: 
  [
    { text: '社团介绍', link: '/notes/about/README.md' },
    { text: 'QQ群', link: '/notes/qq/README.md' },
    { text: 'B站主页', link: 'https://space.bilibili.com/3493277240133634?spm_id_from=333.337.0.0' }
  ]
  },
])
