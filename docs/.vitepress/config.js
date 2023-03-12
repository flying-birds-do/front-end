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
				items: [{ text: 'vue3 + vite + ts 项目', link: '/vue3/1.1' }],
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
