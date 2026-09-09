---
layout: default
title: "Archive"
permalink: /pages/archive.html
---


# 📚 All Posts

Browse my journey year by year.

---

## 🟢 100-Level (2026/2027)

{% for post in site.posts %}
    {% if post.path contains '100-level' %}
- **[{{ post.title }}]({{ post.url }})** — *{{ post.date | date: "%B %d, %Y" }}*
    {% endif %}
{% endfor %}

---

## 🟡 200-Level (2027/2028)

{% for post in site.posts %}
    {% if post.path contains '200-level' %}
- **[{{ post.title }}]({{ post.url }})** — *{{ post.date | date: "%B %d, %Y" }}*
    {% endif %}
{% endfor %}

---

## 🟠 300-Level (2028/2029)

{% for post in site.posts %}
    {% if post.path contains '300-level' %}
- **[{{ post.title }}]({{ post.url }})** — *{{ post.date | date: "%B %d, %Y" }}*
    {% endif %}
{% endfor %}

---

## 🔴 400-Level (2029/2030)

{% for post in site.posts %}
    {% if post.path contains '400-level' %}
- **[{{ post.title }}]({{ post.url }})** — *{{ post.date | date: "%B %d, %Y" }}*
    {% endif %}
{% endfor %}

---

## 🟣 500-Level (2030/2031)

{% for post in site.posts %}
    {% if post.path contains '500-level' %}
- **[{{ post.title }}]({{ post.url }})** — *{{ post.date | date: "%B %d, %Y" }}*
    {% endif %}
{% endfor %}

---

[Back to Home](/)