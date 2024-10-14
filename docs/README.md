# public-website-dev

folder

```
.
├─ docs
|  ├─ .github
│  └─ workflows
│     └─ deploy.yml
│  ├─ .vitepress
│  │  │  ├─ theme
│  │  |  └─ custom.css
│  │  └─ config.js
│  ├─ guide
│  │  ├─ programming-concepts.md
│  │  ├─ index.md
│  │  ├─ internal-tools.md
│  │  ├─ pull-request-workflow.md
│  │  ├─ quality-assurance.md
│  │  ├─ software-analyst.md
│  │  ├─ e2e-automate-test.md
│  │  └─ scrum.md
│  ├─ id
│  │  └─ guide
│  │     ├─ programming-concepts.md
│  │     ├─ index.md
│  │     ├─ internal-tools.md
│  │     ├─ pull-request-workflow.md
│  │     ├─ quality-assurance.md
│  │     ├─ software-analyst.md
│  │     ├─ e2e-automate-test.md
│  │     └─ scrum.md
│  ├─ public
│  │  └─ images
│  │     ├─ arch.png
│  │     └─ collage.png
│  └─ index.md
└─ package.json

public-website-dev/
├── docs/
│   ├── .vitepress/
│   │   ├── theme/
│   │   │   └── custom.css
│   │   └── config.js
│   ├── .github/
│   │   └── workflows/
│   │       └── deploy.yml
│   ├── guide/
│   │   └── ... (our guide markdown files)
│   ├── id/
│   │   └── guide/
│   │       └── ... (our Indonesian guide markdown files)
│   ├── public/
│   │   └── images/
│   │       ├── arch.png
│   │       └── collage.png
│   ├── index.md
│   └── ... (other markdown files)
└── package.json
```

run

```bash
> npm run docs:build
> npm run docs:preview
```
