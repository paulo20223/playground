<template>
  <div class="app">
    <the-header />
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.app {
  @apply flex flex-col;
  @apply px-8 py-6;
  background: url('/img/bg.svg');
  @apply bg-no-repeat bg-cover;
}
</style>
