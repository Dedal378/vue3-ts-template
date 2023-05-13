<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      height="125"
      src="./assets/logo.svg"
      width="125"
    >

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink
          rel="noopener noreferrer nofollow"
          to="/"
        >
          Home
        </RouterLink>
        <RouterLink
          rel="noopener noreferrer nofollow"
          to="/error"
        >
          Showing Loading & Error
        </RouterLink>
        <RouterLink
          rel="noopener noreferrer nofollow"
          to="/renderless"
        >
          Renderless Component
        </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView class="grid place-content-center min-h-100px mt-6" />
</template>

<style lang="scss" scoped>
header {
  max-height: 100vh;
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  margin-top: 2rem;
  font-size: 12px;
  text-align: center;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    padding-right: calc(var(--section-gap) / 2);
    place-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    flex-wrap: wrap;
    place-items: flex-start;
  }

  nav {
    margin-top: 1rem;
    margin-left: -1rem;
    padding: 1rem 0;

    font-size: 1rem;
    text-align: left;
  }
}
</style>
