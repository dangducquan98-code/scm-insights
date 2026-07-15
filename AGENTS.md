# Quân làm BA Blog — Agent Context

## Overview
Hugo static blog with Blowfish theme, deployed to Netlify at https://quanlamba.com.
Repo: git@github.com:dangducquan98-code/scm-insights.git

## Critical Rules (verified — do NOT guess)

### Images
- Cover images: `featureimage: "images/posts/{slug}.jpg"` in frontmatter
- Images go in `assets/images/posts/` (NOT `static/`)
- Og:image: overridden in `layouts/partials/head.html` to use featureimage param

### Config files
- Theme: `config/_default/hugo.toml` (theme = "blowfish")
- Params: `config/_default/params.toml`
- Author: `config/_default/languages.vi.toml`

### SEO frontmatter (MANDATORY per post)
```yaml
featureimage: "images/posts/{slug}.jpg"
featureAlt: "mô tả ảnh"
description: "meta description 140-160 chars"
tags: [lowercase, gach-ngang, khong-dau]
```

### Common pitfalls
- Blowfish CSS goes in `assets/css/custom.css` (NOT `assets/css/extended/`)
- TOC needs `## headings` (NOT bold markers)
- Header logo uses `layouts/partials/header/basic.html` override
- `og:image` override at `layouts/partials/head.html`
- Domain: quanlamba.com (NOT quandangba.netlify.app)
- `baseURL` in hugo.toml must be `https://quanlamba.com/`

### Build & deploy
```bash
cd ~/blog && hugo --minify 2>&1  # MUST pass
git add -A && git commit -m "..." && git push
# Netlify auto-deploys from main branch (~12s)
```

### Verification (ALWAYS)
```bash
# After push, verify:
curl -s "https://quanlamba.com/?v=$(date +%s)" | grep -c 'expected-text'
```

### Cron jobs
- Blog: CN 10h (5b223f496e7f)
- X tweet: 9h daily (d7b15bf50ba7)
- X curate: 11h daily (1246ca7462dd)

### Related skills
- quankiu-voice: writing style
- blog-enhance: post pipeline
- creative/humanizer: AI-slop removal
- xurl: X/Twitter automation
