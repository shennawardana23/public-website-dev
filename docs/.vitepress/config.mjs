import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'PWD',
    description: 'Documentation for the Arch Public Website Dev team',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
        ],
        sidebar: {
            '/guide/': [
                {
                    text: 'Guide',
                    items: [
                        { text: 'E2E Automate Test', link: '/guide/e2e-automate-test' },
                        { text: 'Internal Tools', link: '/guide/internal-tools' },
                        { text: 'Programming Concepts', link: '/guide/programming-concepts' },
                        { text: 'Pull Request Workflow', link: '/guide/pull-request-workflow' },
                        { text: 'Quality Assurance', link: '/guide/quality-assurance' },
                        { text: 'Scrum', link: '/guide/scrum' },
                        { text: 'Software Analyst', link: '/guide/software-analyst' },
                    ]
                }
            ],
            '/id/guide/': [
                {
                    text: 'Panduan',
                    items: [
                        { text: 'E2E Automate Test', link: '/id/guide/e2e-automate-test' },
                        { text: 'Internal Tools', link: '/id/guide/internal-tools' },
                        { text: 'Programming Concepts', link: '/id/guide/programming-concepts' },
                        { text: 'Pull Request Workflow', link: '/id/guide/pull-request-workflow' },
                        { text: 'Quality Assurance', link: '/id/guide/quality-assurance' },
                        { text: 'Scrum', link: '/id/guide/scrum' },
                        { text: 'Software Analyst', link: '/id/guide/software-analyst' },
                    ]
                }
            ]
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2024 Arch Public Website Dev Team'
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/shennawardana23/public-website-dev' },
            // Add more social links as needed
        ]
    },
    locales: {
        root: {
            label: 'English',
            lang: 'en'
        },
        id: {
            label: 'Bahasa Indonesia',
            lang: 'id',
            link: '/id/'
        }
    },
    ignoreDeadLinks: true,  // Add this line
    vite: {
        ssr: {
            noExternal: ['vitepress-theme-custom']
        }
    }
})
