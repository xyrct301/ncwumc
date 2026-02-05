/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: 'wiki', link: '/wiki/' },
  { text: '在线地图', link: 'http://t24.sjcmc.cn:36212/' },
  { text: '赞助名单', link: '/zanzhu/' },
  { text: '博客', link: '/blog/' },
  {
    text: '关于',
    items: 
  [
    { text: '社团介绍', link: '/notes/about/README.md' },
    { text: '社团成员', link: '/notes/list/README.md' },
    { text: 'QQ群', link: 'https://qun.qq.com/universal-share/share?ac=1&authKey=FForLmXqIB1Mf3TRRIE5Rno3kASuCbTeA2FaOfDtIR4zs7E0rE81O60co7ZqvXdO&busi_data=eyJncm91cENvZGUiOiI3OTQwNjE4MTAiLCJ0b2tlbiI6Ii9Id0IxajVPby9sM0R5WjZGS0hBUkJuVzYvbUVsNThWNmlIdTFNUjVxRDF6UXNya2cvMTBBdmxpaDZxRjVqZVIiLCJ1aW4iOiIyMTU5OTU0MTg5In0%3D&data=mXBE6JncAFCIMPeN6bBNwPb6KEGAkv8Tr_2ht5iQmGBhZSfBsnpn10B8bFkWxvNPpe4GYvs7kx7ZFH3zZwoLPQ&svctype=4&tempid=h5_group_info' },
    { text: 'B站官号', link: 'https://space.bilibili.com/3493277240133634?spm_id_from=333.337.0.0' },
    { text: '抖音官号', link: 'https://v.douyin.com/sWyNPPnaQPQ/' }
  ]
  },
])
