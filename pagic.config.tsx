// @deno-types="https://deno.land/x/pagic@v0.8.4/src/types/react/v16.13.1/react.d.ts"
import React from "https://dev.jspm.io/react@16.13.1";

export default {
  srcDir: ".",
  outDir:'docs',
  exclude: ["ref"],
  theme: "docs",
  plugins: ["sidebar", "prev_next"],
  title: "Ding前端笔记",
  description: "前端笔记",
  nav: [],
  blog: false,
  sidebar: {
    "/": [
      "README.md",
      {
        link: "WebAPI/README.md",
        children: [
          "WebAPI/Blob_ArrayBuffer_atob_abot.md",
          "WebAPI/image_handle.md",
          "WebAPI/video.md",
        ],
      },
      {
        link: "HTTP/README.md",
        children: [
          "HTTP/browser.md",
          "HTTP/HTTP.md",
          "HTTP/internet-hardware.md",
        ],
      },
      {
        link: "js/todo.md",
        children: [
          "js/basics.md",
          "js/data-structure.md",
          "js/Object.md",
          "js/context.md",
          "js/closure.md",
          "js/regex.md",
          "js/algo.md",
          "js/design-patterns.md",
        ],
      },
      {
        link: "TS/README.md",
        children: ["TS/basics.md", "TS/enum.md"],
      },
      {
        link: "vue/README.md",
        children: [
          "vue/vue-skills.md",
          "vue/vue-communication.md",
          "vue/vue-router/vue-router.md",
          //   "vue/vue-interview-questions.md",
        ],
      },
      "react/lifecycle.md",
      {
        link: "webpack/README.md",
        children: [
          "webpack/webpack-modules-diff.md",
          "webpack/webpack-use.md",
          "webpack/webpack-principle.md",
          "webpack/webpack-dev-config.md",
          "webpack/webpack-custom-loader.md",
          "webpack/webpack-custom-plugin.md",
          "webpack/webpack-split-chunks.md",
          "webpack/webpack-dev-server-hmr.md",
        ],
      },
      "web-monitor/web-monitor.md",
      "git/git.md",
    ],
  },
  tools: {
    backToTop: true,
  },
  port: 8001,
};
