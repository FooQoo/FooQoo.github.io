---
date: 2020-5-5
tags:
  - 開発
title: vuepressでカレンダー埋め込みを実装
image: https://res.cloudinary.com/fooqoo/image/upload/c_scale,f_auto,h_200,q_auto:low,w_300/v1588754812/fooqoo%20memo/calendar_m806ng.jpg
featured: true
popular: true
readingTime: { text: "1 min read" }
noGlobalSocialShare: true
---

vuepress は、vue.js のコンポーネントを入れることができるとのことで、早速カレンダーを導入した。

ライブラリは、[vue-calendar](https://vcalendar.io/)である。
UI は以下の感じで、markdown に直接 `<BlogCalendar />` を埋め込むことで下のようなカレンダーが表示される。

<ClientOnly>
  <BlogCalendar />
</ClientOnly>

実装としては以下の手順を踏めばおーけー

::: tip 私の実装手順

1. `.vuepress/public`配下にカレンダー用の`vue`ファイルを作成する。
2. `.vuepress/enhanceApp.js`に作成した`vue`ファイルを登録する。
3. 予定表をまとめた`json`ファイルを`.vuepress/public`配下に作成する。

:::

追加したソースコードは以下。

- BlogCalendar.vue

<<< @/docs/.vuepress/components/BlogCalendar.vue

- enhanceApp.js

<<< @/docs/.vuepress/enhanceApp.js

- schedule.json

<<< @/docs/.vuepress/public/schedule.json

注意点としては、`v-calendar`は SSR に対応してないこと。  
vuepress の build は全て SSR なため、単に import しただけだと build がこける。

これを防ぐために、`v-calendar`はクライアント側で動的に compornent が呼ばれるようにしなければならない。
このやり方については、[Using Vue in Markdown](https://v1.vuepress.vuejs.org/guide/using-vue.html#browser-api-access-restrictions)に詳しく書いてある。

作って思ったのが、わざわざ markdown に埋め込ませる必要はなかったかなと笑

<social-share />
2020/5/5 FooQoo
