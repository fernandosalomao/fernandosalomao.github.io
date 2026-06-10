---
layout: splash
permalink: /
hidden: true
header:
  overlay_color: "#000"
  overlay_image: /assets/images/hero-home-1920x840.jpg
  # overlay_filter: linear-gradient(rgba(255, 0, 0, 0.5), rgba(0, 255, 255, 0.5))
  actions:
    - label: "Read the blog"
      url: /posts/
    - label: "About me"
      url: /about/
excerpt: "Practical insights on cloud architecture, platform engineering, DevOps, and AI."
---

<div class="landing">

  {% assign posts = site.posts %}
  {% assign featured = posts.first %}

  {% if featured %}
  <section class="landing__section">
    <p class="landing__eyebrow">Featured</p>
    <a class="feature-card" href="{{ featured.url | relative_url }}">
      <div class="feature-card__media{% unless featured.header.teaser %} card__media--placeholder{% endunless %}"
           {% if featured.header.teaser %}style="background-image:url('{{ featured.header.teaser | relative_url }}')"{% endif %}>
      </div>
      <div class="feature-card__body">
        {% if featured.categories.size > 0 %}<span class="chip">{{ featured.categories.first }}</span>{% endif %}
        <h2 class="feature-card__title">{{ featured.title }}</h2>
        <p class="feature-card__excerpt">{{ featured.excerpt | strip_html | truncate: 220 }}</p>
        <p class="card__meta">
          <span>{{ featured.date | date: "%b %-d, %Y" }}</span>
          <span aria-hidden="true">·</span>
          <span>{{ featured.content | number_of_words | divided_by: 200 | plus: 1 }} min read</span>
        </p>
        <span class="feature-card__cta">Read article →</span>
      </div>
    </a>
  </section>
  {% endif %}

  {% if posts.size > 1 %}
  <section class="landing__section">
    <div class="landing__heading">
      <p class="landing__eyebrow">Latest writing</p>
      <a class="landing__all" href="/posts/">View all →</a>
    </div>
    <div class="post-grid">
      {% for post in posts offset: 1 limit: 6 %}
      <a class="post-card" href="{{ post.url | relative_url }}">
        <div class="post-card__media{% unless post.header.teaser %} card__media--placeholder{% endunless %}"
             {% if post.header.teaser %}style="background-image:url('{{ post.header.teaser | relative_url }}')"{% endif %}>
          {% unless post.header.teaser %}<span class="card__placeholder-text">{{ post.categories.first | default: "Post" }}</span>{% endunless %}
        </div>
        <div class="post-card__body">
          {% if post.categories.size > 0 %}<span class="chip">{{ post.categories.first }}</span>{% endif %}
          <h3 class="post-card__title">{{ post.title }}</h3>
          <p class="post-card__excerpt">{{ post.excerpt | strip_html | truncate: 120 }}</p>
          <p class="card__meta">
            <span>{{ post.date | date: "%b %-d, %Y" }}</span>
            <span aria-hidden="true">·</span>
            <span>{{ post.content | number_of_words | divided_by: 200 | plus: 1 }} min read</span>
          </p>
        </div>
      </a>
      {% endfor %}
    </div>
    <div class="landing__more">
      <a class="btn btn--primary btn--large" href="/posts/">View all posts</a>
    </div>
  </section>
  {% endif %}

</div>

