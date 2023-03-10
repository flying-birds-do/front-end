export default {
    title: "前端",
    description: "开发笔记",
    base: "/front-end",
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        socialLinks: [
            { icon: "github", link: "https://github.com/flying-birds-do/front-end" },
        ],
        footer: {
            copyright: "Copyright © 2020-present Bi Xiaoyu",
        },
         nav: [
      {
        text: "前言",
        link: "/0/0.0.md",
        activeMatch: "/",
      },
      {
        text: "数据结构",
        link: "/1/1.1.md",
        activeMatch: "/",
      },
      {
        text: "算法",
        link: "/2/2.1.md",
        activeMatch: "/",
      },
        {
        text: "vue",
        link: "/3/3.1.md",
        activeMatch: "/",
      }
    ],
    sidebar: [
      {
        items: [
          {
            text: "README",
            link: "/0/0.0",
          },
        ],
      },
      {
        text: "0. 前言",
        collapsible: true,
        items: [
          {
            text: "目录",
            link: "/0/0.1",
          },
          {
            text: "作者简介",
            link: "/0/0.2",
          },
          {
            text: "全文导读",
            link: "/0/0.3",
          },
        ],
      },
      {
        text: "1. 数据结构",
        collapsible: true,
        items: [
          {
            text: "1.1 数组",
            link: "/1/1.1",
          },
          {
            text: "1.2 链表",
            link: "/1/1.2",
          },
        ],
      },
      {
        text: "2. 算法",
        collapsible: true,
        items: [
          { text: "2.1 数组", link: "/2/2.1" }
        ],
      },
      {
        text: "3. 面试八股文",
        collapsible: true,
        items: [
          { text: "3.1 基本认知", link: "/3/3.1" },
        ],
      },
      {
        text: "4. vue",
        collapsible: true,
        items: [
          { text: "4.1 vue3", link: "/4/4.1" },
        ],
      },
    ],
    },
};


