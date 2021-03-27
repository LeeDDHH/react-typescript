import React from 'react';
import { Helmet } from 'react-helmet'

const Head = () => {
  return (
    <Helmet
      title={'TodoList'}
      meta={[
        { charSet: "utf-8" },
        { name: "description", content: "簡単なTodoList" },
        { name: "robots", content: "index,follow" },
        { name: "googlebot", content: "index,follow" },
        { name: "mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        { name: "application-name", content: "TodoList" },
        { name: "apple-mobile-web-app-title", content: "TodoList" },
        { name: "msapplication-starturl", content: "/" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@camomile_cafe" },
        { name: "twitter:creator", content: "@camomile_cafe" },
        { property: "og:url", content: "https://todolist.expfrom.me/" },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "TodoList" },
        { property: "og:description", content: "簡単なTodoList" },
        { property: "og:locale", content: "ja_JP" },
        { property: "og:site_name", content: "TodoList" },
        { property: "og:image", content: "https://todolist.expfrom.me/image/og/ogp_image.png" },
        { property: "og:image:alt", content: "Og Image Alt TodoList" },
        { property: "og:image:width", content: "1140" },
        { property: "og:image:height", content: "620" },
      ]}
      link={[
        { rel: "canonical", href: "https://todolist.expfrom.me/" },
        { rel: "icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
        { rel: "manifest", href: "/manifest.json" },
      ]}
    />
  )
}

export default Head
