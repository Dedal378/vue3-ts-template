<script lang="ts" setup>
defineProps<{ msg: string }>()
</script>

<template>
  <div class="greetings">
    <!--tailwindcss color-->
    <h1 class="text-amber-500">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a
        href="https://vitejs.dev/"
        rel="noopener noreferrer nofollow"
        target="_blank"
      >
        Vite
      </a>
      +
      <a
        href="https://vuejs.org/"
        rel="noopener noreferrer nofollow"
        target="_blank"
      >
        Vue 3
      </a>
      +
      <a
        href="https://uno.antfu.me/"
        rel="noopener noreferrer nofollow"
        target="_blank"
      >
        UnoCss (Windi / Tailwind).
      </a>
    </h3>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
