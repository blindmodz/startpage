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
      background_url: `src/img/banners/cbg-13.gif`,
      categories: [
        {
          name: "",
          links: [
            {
              name: "instagram",
              url: "https://www.instagram.com",
              icon: "brand-instagram",
              icon_color: palette.red,
            },
            {
              name: "facebook",
              url: "https://www.facebook.com/",
              icon: "brand-facebook",
              icon_color: palette.blue,
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
              icon_color: palette.red,
            },
            {
              name: "gmail",
              url: "https://mail.google.com/mail/u/0/#inbox",
              icon: "brand-gmail",
              icon_color: palette.red,
            }
          ],
        },
        {
          name: "",
          links: [
            {
              name: "anilist",
              url: "https://anilist.co/home",
              icon: "book",
              icon_color: palette.blue,
            },
            {
              name: "mangadex",
              url: "https://mangadex.org/",
              icon: "book",
              icon_color: palette.lavender,
            },
            {
              name: "weeb central",
              url: "https://weebcentral.com/",
              icon: "book",
              icon_color: palette.lavender,
            },
            {
              name: "myanimelist",
              url: "https://myanimelist.net/",
              icon: "book",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "",
          links: [
            {
              name: "animekai",
              url: "https://anikai.to/browser?keyword=&status%5B%5D=releasing&status%5B%5D=completed&sort=updated_date",
              icon: "device-tv",
              icon_color: palette.maroon,
            },
            {
              name: "github",
              url: "https://github.com/blindmodz?tab=stars",
              icon: "brand-github",
              icon_color: palette.text,
            },
            {
              name: "osu",
              url: "https://osu.ppy.sh/",
              icon: "music",
              icon_color: palette.pink,
            },
            {
              name: "nyaa",
              url: "https://nyaa.si/",
              icon: "download",
              icon_color: palette.text,
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
