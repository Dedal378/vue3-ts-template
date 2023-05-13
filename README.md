# vue3-ts-template

This template should help get you started developing with Vue 3 in Vite.

## UnoCss (Tailwind / Windi CSS) + Vue3 + Vue-router + Vite + Pinia + Yarn2
###

Superfast and small in prod template based on modern [**VUE3**](https://vuejs.org/) and fast technology: [**VITE**](https://vitejs.dev/guide/) (pronounced /vit/, like "veet" =))), [**UNOCss**](https://uno.antfu.me/?s=guide:preset-uno) (Tailwind/WindiCSS compact preset). SCSS is enabled by default. Also include [**PINIA**](https://pinia.vuejs.org/introduction.html) (next gen Vuex), [**VUE-ROUTER**](https://router.vuejs.org/guide/) and package manager [**YARN**](https://classic.yarnpkg.com/en/docs/getting-started). All for comfort. Everything for fast development.

##
[**UNOCss**](https://uno.antfu.me/?s=guide:preset-uno) +
[**VUE3**](https://vuejs.org/) +
[**VUE-ROUTER**](https://router.vuejs.org/guide/) +
[**PINIA**](https://pinia.vuejs.org/introduction.html) +
[**VITE**](https://vitejs.dev/guide/) +
[**YARN**](https://classic.yarnpkg.com/en/docs/getting-started) +
[**@vueuse/core**](https://vueuse.org/guide/) +
[**@formkit/auto-animate**](https://auto-animate.formkit.com/#usage-vue)

The template uses `<script setup>` SFCs and Reactivity Transform.
Check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup), [reactivity transform docs](https://vuejs.org/guide/extras/reactivity-transform.html#reactivity-transform).


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
