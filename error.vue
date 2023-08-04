<template>
  <div class="app">
    <the-header />

    <error-content
      :header="notFound ? 404 : ''"
      :title="$t(`errors.titles.${type}`)"
      :details="$t(`errors.details.${type}`)"
    />
  </div>
</template>

<script setup lang="ts">
import { title } from '~/package.json'

const props = defineProps({
  error: {
    type: Object,
    default: () => ({}),
  },
})

useHead({
  title: `${props.error.statusCode} - ${title}`,
  meta: [
    { hid: 'description', name: 'description', content: title },
  ],
})

const notFound = computed(() => {
  return props.error.statusCode === 404
})

const type = computed(() => {
  return notFound.value ? 'notFound' : 'default'
})
</script>

<style lang="scss" scoped>
.app {
  @apply flex flex-col;
}
</style>
