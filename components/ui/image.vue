<template>
  <div class="relative">
    <img :src="src" :alt="alt" @load="() => isLoading = false">
    <o-skeleton v-if="isLoading" item-class="absolute inset-0 !m-0" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: '' },
})

const isLoading = ref(true)
</script>

<style lang="scss" scoped>
img {
  @apply pointer-events-none;
}
</style>
