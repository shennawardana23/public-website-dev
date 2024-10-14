export default {
    title: "Public Website Developer",
    description: "Documentation for the Arch Public Website Dev team",
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
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/programming-concepts' }
        ],
        sidebar: {
            '/guide/': [
                {
                    text: 'Guide',
                    items: [
                        { text: 'Programming Concepts', link: '/guide/programming-concepts' },
                        { text: 'Internal Tools', link: '/guide/internal-tools' },
                        { text: 'Pull Request Workflow', link: '/guide/pull-request-workflow' },
                        { text: 'Quality Assurance', link: '/guide/quality-assurance' },
                        { text: 'Software Analyst', link: '/guide/software-analyst' },
                        { text: 'E2E Automation Test', link: '/guide/e2e-automate-test' },
                        { text: 'SCRUM', link: '/guide/scrum' },
                    ]
                }
            ],
            '/id/guide/': [
                {
                    text: 'Panduan',
                    items: [
                        { text: 'Konsep Pemrograman', link: '/id/guide/programming-concepts' },
                        { text: 'Alat Internal', link: '/id/guide/internal-tools' },
                        { text: 'Alur Kerja Pull Request', link: '/id/guide/pull-request-workflow' },
                        { text: 'Jaminan Kualitas', link: '/id/guide/quality-assurance' },
                        { text: 'Analis Perangkat Lunak', link: '/id/guide/software-analyst' },
                        { text: 'Tes Otomatis E2E', link: '/id/guide/e2e-automate-test' },
                        { text: 'SCRUM', link: '/id/guide/scrum' },
                    ]
                }
            ]
        }
    }
}
