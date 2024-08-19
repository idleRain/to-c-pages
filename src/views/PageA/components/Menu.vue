<script setup lang="ts" name="Menu">
const menus = [
  {label: 'Home', path: '/'},
  {label: 'Excursions', path: '/'},
  {label: 'Me', path: '/'}
]
</script>

<template>
  <div>
    <router-link class="text-3xl ml-[64px]" v-for="(menu, index) in menus" :to="menu.path">{{ menu.label }}</router-link>
  </div>
</template>

<style scoped>

</style>
