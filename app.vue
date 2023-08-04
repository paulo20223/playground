<template>
     <NuxtLayout>
      <NuxtLoadingIndicator :height="4" />
      <NuxtPage />
    </NuxtLayout>
</template>

<script setup lang="ts">
AppSetup()

const nuxtApp = useNuxtApp()
</script>
