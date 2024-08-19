<script setup lang="ts" name="Page2">
import MyTitle from './components/page2/Title.vue'
import GoodsList from '@/views/PageA/components/page2/GoodsList.vue'
defineProps<{ index: number }>()
</script>

<template>
  <div :id="`anchor${index}`" class="page-container mt-[15vw] pb-[10vh]">
    <my-title />
    <goods-list />
  </div>
</template>

<style scoped>

</style>
