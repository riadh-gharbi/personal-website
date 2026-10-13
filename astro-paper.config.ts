import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://riadhgharden.github.io/",
    title: "riadhgharden",
    description:
      "Riadh Gharbi's digital garden: evolving notes on tech, work and personal interests.",
    author: "Riadh Gharbi",
    profile: "https://www.linkedin.com/in/riadhgharbi/",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Europe/Berlin",
    dir: "ltr",
  },
  posts: {
    perPage: 8,
    perIndex: 6,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/riadhgharden/riadhgharden.github.io/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "linkedin", url: "https://www.linkedin.com/in/riadhgharbi/" },
    { name: "github", url: "https://github.com/riadh-gharbi" },
  ],
  shareLinks: [
    { name: "linkedin", url: "https://www.linkedin.com/sharing/share-offsite/?url=" },
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "mail", url: "mailto:?subject=See%20this%20note&body=" },
  ],
});
