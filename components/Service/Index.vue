<template>
  <section>
    <div class="pb-8">
      <o-input v-model="search" variant="transparent" expanded icon="ri-search-line" placeholder="Search Services" />
    </div>
    <div class="service">
      <service-item
        v-for="(service, key) in filteredServices"
        :key="key"
        class="service-item bg-gradient"
        :name="service.name"
        :src="`/img/logos/${service.image}`"
      />
    </div>
  </section>
</template>

<script setup>
const services = ref([
  {
    name: 'Google Store',
    image: 'g-drive.png',
  },
  {
    name: 'Gira',
    image: 'gira.png',
  },
  {
    name: 'Dropbox',
    image: 'dropbox.png',
  },
  {
    name: 'Google My Business',
    image: 'g-my-business.png',
  },
  {
    name: 'Automate',
    image: 'automate.png',
  },
  {
    name: 'Sales Force',
    image: 'sales-force.png',
  },
  {
    name: 'Caltrain',
    image: 'caltrain.png',
  },
  {
    name: 'Google My Business',
    image: 'g-my-business-cloud.png',
  },
  {
    name: 'Intelligent Voice',
    image: 'intelligent-voice.png',
  },
])

const search = ref('')
const filteredServices = computed(() => {
  if (!search.value) {
    return services.value
  }
  return services.value.filter((item) => {
    return item.name.toLowerCase().includes(search.value.toLowerCase())
  })
})
</script>

<style lang="scss" scoped>
  .service {
    @apply grid grid-cols-3 content-around gap-4;
    @apply pb-[140px];

    &-item {
      @apply grid content-end py-[40px] justify-center text-center;
      @apply rounded-2xl;
      @apply bg-gradient bg-gray;

      @apply h-[15rem];
      &:hover {
        @apply bg-blue;
      }
    }
  }
</style>
