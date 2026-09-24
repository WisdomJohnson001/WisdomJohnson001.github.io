---
layout: default
title: "Archive"
permalink: /pages/archive.html
last_updated: 2026-09-24
---

# 📚 All Posts

Browse my journey year by year.

---

## 🟢 Days-To-Admission (2026/2027)

{% for post in site.posts %}
    {% if post.path contains 'Days-To-Admission' %}
- [{{ post.title }}]({{ post.url }}) — *{{ post.date | date: "%B %d, %Y" }}*
  {% if post.last_updated %}*(Updated: {{ post.last_updated | date: "%b %d, %Y" }})*{% endif %}
    {% endif %}
{% endfor %}

---

## 🟡 100-Level (2026/2027)

{% for post in site.posts %}
    {% if post.path contains '100-level' %}
- [{{ post.title }}]({{ post.url }}) — *{{ post.date | date: "%B %d, %Y" }}*
  {% if post.last_updated %}*(Updated: {{ post.last_updated | date: "%b %d, %Y" }})*{% endif %}
    {% endif %}
{% endfor %}

---

## 🟡 200-Level (2027/2028)

{% for post in site.posts %}
    {% if post.path contains '200-level' %}
- [{{ post.title }}]({{ post.url }}) — *{{ post.date | date: "%B %d, %Y" }}*
  {% if post.last_updated %}*(Updated: {{ post.last_updated | date: "%b %d, %Y" }})*{% endif %}
    {% endif %}
{% endfor %}

---

## 🟠 300-Level (2028/2029)

{% for post in site.posts %}
    {% if post.path contains '300-level' %}
- [{{ post.title }}]({{ post.url }}) — *{{ post.date | date: "%B %d, %Y" }}*
  {% if post.last_updated %}*(Updated: {{ post.last_updated | date: "%b %d, %Y" }})*{% endif %}
    {% endif %}
{% endfor %}

{% unless site.posts | where_exp: "post", "post.path contains '300-level'" | size > 0 %}
*(No posts yet — coming soon!)*
{% endunless %}

---

## 🔴 400-Level (2029/2030)

{% for post in site.posts %}
    {% if post.path contains '400-level' %}
- [{{ post.title }}]({{ post.url }}) — *{{ post.date | date: "%B %d, %Y" }}*
  {% if post.last_updated %}*(Updated: {{ post.last_updated | date: "%b %d, %Y" }})*{% endif %}
    {% endif %}
{% endfor %}

{% unless site.posts | where_exp: "post", "post.path contains '400-level'" | size > 0 %}
*(No posts yet — coming soon!)*
{% endunless %}

---

## 🟣 500-Level (2030/2031)

{% for post in site.posts %}
    {% if post.path contains '500-level' %}
- [{{ post.title }}]({{ post.url }}) — *{{ post.date | date: "%B %d, %Y" }}*
  {% if post.last_updated %}*(Updated: {{ post.last_updated | date: "%b %d, %Y" }})*{% endif %}
    {% endif %}
{% endfor %}

{% unless site.posts | where_exp: "post", "post.path contains '500-level'" | size > 0 %}
*(No posts yet — coming soon!)*
{% endunless %}

---

[Back to Home](/)