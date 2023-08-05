<template>
  <section class="main-wrapper">
    <div class="main-title">
      <h1 class="pb-2 uppercase">
        Start connecting your world
      </h1>
      <p>Save time and money by making the internet work for you! We believe you might like...</p>
    </div>
    <service />
    <suggest-form />
  </section>
</template>

<script setup lang=ts>
import { serviceService } from '@/services'
const { list } = serviceService()

try {
  const service = await list()
} catch {}
</script>

<style lang="scss" scoped>
.main {
  &-wrapper {
    @apply container-xs pt-[6rem];
  }
  &-title {
    @apply text-center pb-[4.875rem];
  }
}
</style>
