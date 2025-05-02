// latte / frappe / macchiato / mocha
const palette = mocha;

const default_config = {
  overrideStorage: true,
  disabled: [],
  openLastVisitedTab: true,
  localIcons: true,
  tabs: [
    {
      name: "home",
      background_url: `src/img/banners/cbg-8.gif`,
      categories: [
        {
          name: "",
          links: [
            {
              name: "instagram",
              url: "https://www.instagram.com",
              icon: "brand-instagram",
              icon_color: palette.blue,
            },
            {
              name: "facebook",
              url: "https://www.facebook.com/",
              icon: "brand-facebook",
              icon_color: palette.green,
            },
            {
              name: "twitter",
              url: "https://x.com",
              icon: "brand-x",
              icon_color: palette.text,
            },
          ],
        },
        {
          name: "",
          links: [
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/",
              icon: "brand-reddit",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "",
          links: [
            {
              name: "github",
              url: "https://github.com/blindmodz?tab=stars",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "anilist",
              url: "https://anilist.co/home",
              icon: "code",
              icon_color: palette.blue,
            },
            {
              name: "mangadex",
              url: "https://mangadex.org/",
              icon: "news",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "",
          links: [
            {
              name: "myanimelist",
              url: "https://myanimelist.net/",
              icon: "brand-leetcode",
              icon_color: palette.yellow,
            },
            {
              name: "osu",
              url: "https://osu.ppy.sh/",
              icon: "binary-tree",
              icon_color: palette.red,
            },
            {
              name: "udemy",
              url: "https://www.miruro.tv/",
              icon: "certificate",
              icon_color: palette.lavender,
            },
          ]
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
