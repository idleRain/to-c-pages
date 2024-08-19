<script setup lang="ts">
defineProps<{ index: number }>()
</script>

<template>
  <div :id="`anchor${index}`" class="page-container h-screen">
    <div class="text-center text-[10vw]">Page4</div>
  </div>
</template>

<style scoped>

</style>
