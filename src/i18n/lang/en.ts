import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Home",
    posts: "Notes",
    tags: "Tags",
    about: "About",
    archives: "Archives",
    search: "Search",
  },
  post: {
    publishedAt: "Planted",
    updatedAt: "Tended",
    sharePostIntro: "Share this note:",
    sharePostOn: "Share this post on {{platform}}",
    sharePostViaEmail: "Share this post via email",
    tagLabel: "Tags",
    backToTop: "Back to top",
    goBack: "Go back",
    editPage: "Edit page",
    previousPost: "Previous Note",
    nextPost: "Next Note",
  },
  pagination: {
    prev: "Prev",
    next: "Next",
    page: "Page",
  },
  home: {
    socialLinks: "Social Links",
    featured: "Featured",
    recentPosts: "Recently Tended",
    allPosts: "All Notes",
  },
  footer: {
    copyright: "Copyright",
    allRightsReserved: "All rights reserved.",
  },
  pages: {
    tagTitle: "Tag",
    tagDesc: "All the notes with the tag",

    tagsTitle: "Tags",
    tagsDesc: "All the tags used across the garden.",

    postsTitle: "All Notes",
    postsDesc: "Everything in the garden, most recently tended first.",

    archivesTitle: "Archives",
    archivesDesc: "All notes, grouped by when they were planted.",

    searchTitle: "Search",
    searchDesc: "Search the garden ...",
  },
  a11y: {
    skipToContent: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    toggleTheme: "Toggle theme",
    searchPlaceholder: "Search notes...",
    noResults: "No results found",
    goToPreviousPage: "Go to previous page",
    goToNextPage: "Go to next page",
  },
  notFound: {
    title: "404 Not Found",
    message: "Page Not Found",
    goHome: "Go back home",
  },
} satisfies UIStrings;
