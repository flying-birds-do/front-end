export default {
    title: "kaifa",
    description: "开发笔记",
    base: "/kaifa",
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        socialLinks: [
            { icon: "github", link: "https://github.com/feiniaojin/kaifa" },
        ],
        footer: {
            copyright: "Copyright © 2020-present Qin Yujie",
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
