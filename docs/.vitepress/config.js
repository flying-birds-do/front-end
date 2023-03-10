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
                text: "前端开发笔记",
                link: "/0/0.0.md",
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
                text: "vue3",
                collapsible: true,
                items: [
                    {
                        text: "前期准备",
                        link: "/vue3/01",
                    }
                ],
            }
        ],
    },
};
