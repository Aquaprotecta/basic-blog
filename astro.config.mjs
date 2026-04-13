// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import expressiveCode from "astro-expressive-code";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

// https://astro.build/config
export default defineConfig({
  site: "https://basic-blog.pages.dev",

  fonts: [
    {
      provider: fontProviders.local(),
      name: "Inter",
      cssVariable: "--font-inter",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/Inter.ttf"],
            weight: "normal",
            style: "normal",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "JetBrainsMono",
      cssVariable: "--font-jet-brains-mono",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/JetBrainsMono.ttf"],
            weight: "normal",
            style: "normal",
          },
        ],
      },
    },
  ],

  integrations: [
    sitemap(),
    pagefind(),
    icon(),
    expressiveCode({ plugins: [pluginLineNumbers()] }),
  ],

  markdown: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: { className: ["anchor"] },
        },
      ],
    ],
  },

  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "object-src 'self'",
        "connect-src 'self' https://challenges.cloudflare.com",
        "base-uri 'self'",
        "img-src 'self' https://res.cloudinary.com/dellp9a4z/ data:",
        "media-src 'self' https://res.cloudinary.com/dellp9a4z/",
        "font-src 'self' data:",
        "frame-src 'self' https://challenges.cloudflare.com",
        "worker-src 'self' blob: https://challenges.cloudflare.com",
        "child-src 'self' https://challenges.cloudflare.com blob:",
        "manifest-src 'none'",
        "form-action 'self'",
      ],
      scriptDirective: {
        resources: [
          "'self'",
          "https://challenges.cloudflare.com",
          "blob:",
          "'unsafe-eval'",
        ],
        hashes: [
          "sha256-+D181lN2Iw1b9lkNhIL2BSfLXvTnxTpdqxKE5OjSgk0=",
          "sha256-UnpvhDyF7OXferJXLLEvpK6eSVKujiCxuakCMAAfX0k=",
          "sha256-1uLA37rSE279Z3LD4V5UesnNrJXsLL3WlqRDPbR0SiQ=",
          "sha256-XOWpFOzUtq3WTcITdHEbeGIbvByWMkUYHPLkeNqUnrg=",
          "sha256-O/cT6xyqpBVZwWGYzXVpX7QJEsLa8cqTX0G7ptzRry8=",
          "sha256-y8GXDJSth6TkGGn3PesTxxuEoiMEn+PMMT3VzFcGcc8=",
          "sha256-BF0290pkb3jxQsE7z00xR8Imp8X34FLC88L0lkMnrGw=",
          "sha256-QzWFZi+FLIx23tnm9SBU4aEgx4x8DsuASP07mfqol/c=",
          "sha256-0chmwFk0zaA528yFfGV7J9ppIpdfTPPULncDF3WG7Zs=",
          "sha256-eIXWvAmxkr251LJZkjniEK5LcPF3NkapbJepohwYRIc=",
          "sha256-Q2BPg90ZMplYY+FSdApNErhpWafg2hcRRbndmvxuL/Q=",
          "sha256-YvmHN+RLoaKyj0Wvr1lawwJSU85HX9VU+XMIN2yJTdI=",
        ],
      },
      styleDirective: {
        resources: ["'self'", "'unsafe-hashes'"],
        hashes: [
          "sha256-y2JW07Q0/vstgbPj/xxtTnjG70DPkHRftv4fFS7r5sk=",
          "sha256-9G4h3Bt2rC8Ty15cZ/qd2TP2iSP3TULSYvKnTPWzbyE=",
          "sha256-nBuQodxHbMFGFDc+709UWrh0nGQICZuQQlLQkhPrmW4=",
          "sha256-TqO3OLUG4Ila2f/GgYSKdMkr8Eu3FF5u9vV/7qCKYlA=",
          "sha256-47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
          "sha256-Z1HxjJ2kQ5UaOV2Ds31+5xdy+WTAWc3c9W2P8ISEtoM=",
          "sha256-OHHJt3V7bbGQVFFoSS8ClWV1uXy19wbP3kJTdWrvtd4=",
        ],
      },
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
