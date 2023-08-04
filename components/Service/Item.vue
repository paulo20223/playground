<template>
  <section>
    <ui-image :src="src" :alt="name" class="pb-[25px] mx-auto" />
    <h4>{{ name }}</h4>
  </section>
</template>

<script setup>
defineProps({
  src: { type: String },
  name: { type: String },
})
</script>

<style lang="scss" scoped>
.service {
  @apply flex flex-col items-center justify-center;
  @apply h-[15rem] w-full;
}
</style>
