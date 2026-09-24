---
layout: default
title: "Archive"
permalink: /pages/archive.html
last_updated: 2026-09-12
---

# 📚 All Posts

Browse my journey year by year.

## 🟢 Days-To-Admission (2026/2027)

{% for post in site.posts %}
    {% if post.path contains 'Days-To-Admission' %}
- **[{{ post.title }}]({{ post.url }})** — *{{ post.date | date: "%B %d, %Y" }}*
    {% endif %}
{% endfor %}
---
## 🟡 100-Level (2027/2028)

{% for post in site.posts %}
    {% if post.path contains '200-level' %}
- [{{ post.title }}]({{ post.url }}) — *{{ post.date | date: "%B %d, %Y" }}*
    {% else %}
*(No posts yet — coming soon!)*
    {% endif %}
    {% break %}
{% endfor %}

---

## 🟡 200-Level (2027/2028)

{% for post in site.posts %}
    {% if post.path contains '200-level' %}
- [{{ post.title }}]({{ post.url }}) — *{{ post.date | date: "%B %d, %Y" }}*
    {% else %}
*(No posts yet — coming soon!)*
    {% endif %}
    {% break %}
{% endfor %}

---

## 🟠 300-Level (2028/2029)

*(No posts yet — coming soon!)*

---

## 🔴 400-Level (2029/2030)

*(No posts yet — coming soon!)*

---

## 🟣 500-Level (2030/2031)

*(No posts yet — coming soon!)*

---

[Back to Home](/)