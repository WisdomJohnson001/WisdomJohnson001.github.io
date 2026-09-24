---
layout: default
title: "Day 0: Building My Digital Logbook"
date: 2026-09-09
--- 
Today I officially started my Mechatronics Engineering journey at FUNAAB - not with a lecture, but by building the place where I'll document every thing for the next 5 years.

## Why Build This

I wanted a space to:
- Document every lab, project, and lesson
- Share resources with fellow students
- Build a portfolio that grpws with me
- Look back and see how far I've come

## What I Actually Did Today

### 1. Set Up Jekyll
Jekyll is a static site generator. If you don't know what that means use gogle >0<. I write in Markdown, and it turns everything into HTML automatically. No databases, no server-sde logic - just fast, simple web pages. 
Thanks be to whoever created it.

```bash
gem install jekyll bundler
jekyll new my-site
```

### 2. Fixed a LOT of Errors

This wasn't smooth. I hit:
- YAML syntax errors in _config.yml
- Missing `webrick` gem
- Folder naming issues (`w_includes` instead of `_includes`)
- Broken links on my archive page (Some parts are still broken)

But I fixed every single one.

### 3. Structured the Site
```text
_posts/
    Days-To-Admission/
    100-level/
    200-level/
    300-level/
    400-level/
    500-level/
```
This way each year of my degree gets its own folder. By graduation, I'll have  5 years of documented growth.

### 4. Wrote in Markdown

This post? Written in Markdown. It looks like plain text but becomes HTML.

**Bold**, *italic*, [links](#), and code blocks — all from simple symbols.

### 5. Deployed to GitHub Pages

```bash
git add .
git commit -m "First post"
git push origin main
```

My site went live at **https://WisdomJohnson001.github.io** in minutes.

## What I Learned

| Lesson | Takeaway |
|--------|----------|
| YAML is picky | One wrong space breaks everything |
| Git is forgiving | You can always revert mistakes |
| Markdown is fast | Way faster than writing HTML by hand |
| GitHub Pages is free | Free hosting, free SSL, free custom domain support |
| Documentation matters | Future me will thank present me |

## What's Next

- My first week at FUNAAB
- Course registration
- Meeting my classmates
- Setting up my study routine

---

*This is Day 0. The real journey starts now.* 🚀

**— Wisdom Johnson**
*Mechatronics Engineering, FUNAAB*