module.exports = {
  title: "FooQoo's memo",
  description: "日常生活の気付きをメモします",
  theme: require.resolve("../../"),
  themeConfig: {
    summary: true,
    nav: [
      {
        text: "Home",
        link: "/",
        icon: "el-icon-house",
      },
      {
        text: "Projects",
        link: "/projects/",
      },
    ],
    sitemap: true, // enables sitemap plugin
    hostname: "https://fooqoo56.com/", // required for sitemap
    disqus: "FooQoo's memo", // if you want to incorporate Disqus for comments replace this value else just get rid of it
    googleAnalytics: "", // Google Analytics tracking ID
    footer: {
      contact: [
        {
          type: "github",
          link: "https://github.com/z3by",
        },
        {
          type: "instagram",
          link: "#",
        },
        {
          type: "linkedin",
          link: "#",
        },
        {
          type: "twitter",
          link: "#",
        },
      ],
      copyright: [
        {
          text: "Powered by awesome vuepress themes and burst",
          link: "https://github.com/FooQoo/fooqoo.github.io",
        },
      ],
    },
    personalInfo: {
      nickname: "FooQoo",
      description: "Web Engineer",
      location: "Tokyo, Japan",

      avatar:
        "https://res.cloudinary.com/fooqoo/image/upload/c_scale,f_auto,h_240,q_auto:low,w_240/v1588754816/fooqoo%20memo/beluga_jwpply.jpg",

      sns: {
        github: {
          account: "fooqoo",
          link: "https://github.com/FooQoo",
        },
        facebook: {
          account: "satoshi fukuyama",
          link: "https://www.facebook.com/fooqoo56",
        },
        twitter: {
          account: "fooqoo56",
          link: "https://twitter.com/FooQoo56",
        },
      },
    },
    infoCard: {
      headerBackground: {
        // url: '/assets/img/header-image-01.jpg',
        useGeo: true,
      },
    },
  },
  head: [
    [
      "script",
      {
        "async src": "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
      },
    ],
    [
      "script",
      {},
      '(adsbygoogle = window.adsbygoogle = window.adsbygoogle || []).push({ google_ad_client: "ca-pub-1144207358103797", enable_page_level_ads: true  });',
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.10.0/katex.min.css",
      },
    ],
    [
      "script",
      {
        "async src":
          "https://www.googletagmanager.com/gtag/js?id=UA-161520690-1",
      },
    ],
    [
      "script",
      {},
      "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);};gtag('js', new Date());gtag('config', 'UA-161520690-1');",
    ],
    ["link", { rel: "shortcut icon", href: " /favicon/favicon.ico" }],
    [
      "meta",
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],

  ],
  plugins: [
    "geopattern",
    [
      "vuepress-plugin-container",
      {
        type: "tip",
        before: (info) => `<div class="tip"><p class="title">${info}</p>`,
        after: "</div>",
      },
    ],
    [
      "social-share",
      {
        networks: ["twitter", "facebook"],
        autoQuote: true,
        isPlain: false,
      },
    ],
    ["@vuepress/pwa"],
    [
      'seo',
      {
        siteTitle: (_, $site) => $site.title,
        title: $page => $page.title || "FooQoo's memo",
        description: $page => $page.frontmatter.description,
        author: (_, $site) => $site.themeConfig.author,
        tags: $page => $page.frontmatter.tags,
        twitterCard: _ => 'summary_large_image',
        type: $page => ['articles', 'posts', 'blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
        url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
        image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain && !$page.frontmatter.image.startsWith('http') || '') + $page.frontmatter.image) || "https://res.cloudinary.com/fooqoo/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1588754816/fooqoo%20memo/beluga_jwpply.jpg",
        publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
        modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
      }
    ]
  ],
};
