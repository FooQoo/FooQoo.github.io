<template>
  <div id="base-list-layout" class="fill-height">
    <div class="row my-5 justify-content-between">
      <div class="col-md-12 col-lg-7">
        <post-item v-for="page in pages" :key="page.key" :page="page"></post-item>
      </div>
      <div class="col-md-12 col-lg-4">
        <info-card />
        <blog-calendar />
      </div>
    </div>
  </div>
</template>

<script>
/* global THEME_BLOG_PAGINATION_COMPONENT */

import Vue from "vue";
import PopularPosts from "../components/PopularPosts";
import PostItem from "../components/PostItem";
import InfoCard from "../components/InfoCard";
import BlogCalendar from "../components/BlogCalendar";

export default {
  components: { PopularPosts, PostItem, InfoCard, BlogCalendar },

  computed: {
    pages() {
      if (this.$route.meta.pid == "tag") {
        const pages = this.$tag.list
          .filter((tag) => {
            return tag.path === this.$route.path;
          })[0]
          .pages.slice()
          .sort(this.compareDate);

        return pages;
      }

      return this.$site.pages
        .filter((page) => {
          return (
            !page.path.startsWith("/tag/") &&
            !page.path.startsWith("/page/") &&
            page.path !== "/" &&
            !(page.frontmatter.tags || []).some((tag) => tag === "日記")
          );
        })
        .slice()
        .sort(this.compareDate);
    },

    popularPosts() {
      return this.$site.pages
        .filter((page) => page.frontmatter.popular)
        .slice(0, 9);
    },
  },

  methods: {
    resovlePostDate(date) {
      return new Date(date.replace(/\-/g, "/").trim()).toDateString();
    },

    compareDate(a, b) {
      return a.frontmatter.date < b.frontmatter.date ? 1 : -1;
    },
  },
};
</script>
