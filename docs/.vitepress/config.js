export default {
  title: '前端',
  description: '开发笔记',
  base: '/front-end',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/flying-birds-do/front-end' },
    ],
    footer: {
      copyright: 'Copyright © 2020-present Bi Xiaoyu',
    },
    nav: [
      {
        text: '跟我一起学前端',
        link: '/0/0.0.md',
        activeMatch: '/',
      },
      {
        text: '极简后台脚手架',
        link: '/TODO',
      }
    ],
    sidebar: [
      {
        items: [
          {
            text: 'README',
            link: '/0/0.0',
          },
        ],
      },
      {
        text: '0. 前言',
        collapsible: true,
        items: [
          // {
          // 	text: '目录',
          // 	link: '/0/0.1',
          // },
          {
            text: '作者简介',
            link: '/0/0.2',
          },
          {
            text: '全文导读',
            link: '/0/0.3',
          },
        ],
      },
      {
        text: 'vue',
        collapsible: true,
        items: [{ text: 'vue3 项目实战', link: '/vue3/1.1' },
        { text: 'vue2生命周期', link: '/vue3/1.2' },
        { text: 'vue自带指令', link: '/vue3/1.3' },
          { text: 'vue2自定义指令', link: '/vue3/1.4' },
          { text: 'vue3自定义指令', link: '/vue3/1.5' },
          { text: 'vue2与3自定义指令的对比', link: '/vue3/1.6' },
          { text: 'vue过滤器的实现', link: '/vue3/1.7' },
          { text: 'vue3全局api', link: '/vue3/1.9' },
          { text: 'vue3通用api', link: '/vue3/1.8' },
          { text: 'vue3组合式api', link: '/vue3/2.1' },
          { text: 'vue3选项api', link: '/vue3/2.2' },
          { text: 'vue3内置内容', link: '/vue3/2.3' },
          { text: 'vue3单文件组件', link: '/vue3/2.4' },
          { text: 'vue2 Api 介绍', link: '/vue3/2.0' },
        ],
      },
      {
        text: 'typeScript',
        collapsible: true,
        items: [{ text: '基础类型', link: '/typescript/1.1' }, { text: '变量声明', link: '/typescript/1.2' }, { text: '接口', link: '/typescript/1.3' }, { text: '类', link: '/typescript/1.4' }],
      },
      {
        text: '数据结构',
        collapsible: true,
        items: [
          {
            text: '数组',
            link: '/shujujiegou/1.1',
          },
        ],
      },
      {
        text: '算法',
        collapsible: true,
        items: [{ text: '数组', link: '/suanfa/1.1' }],
      },


    ],
  },
}
