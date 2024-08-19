<script setup lang="ts">

</script>

<template>
  <div class="absolute top-[2.5vw] left-0 right-0 flex justify-center z-50">
    <div class="flex items-center justify-center content">
      <div class="flex-1 flex justify-start">
        <slot name="left" />
      </div>
      <div class="flex-1 flex justify-center">
        <slot name="center" />
      </div>
      <div class="flex-1 flex justify-end">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
