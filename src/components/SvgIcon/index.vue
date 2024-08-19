<template>
  <svg aria-hidden="true" :width="width" :height="height">
    <use :xlink:href="symbolId"/>
  </svg>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
  name: string;
  width?: string | number;
  height?: string | number
}>(), {
  width: 24,
  height: 24
})
const symbolId = computed(() => `#icon-svg-${props.name}`)
</script>
