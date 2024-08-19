<script setup lang="ts" name="Progress">
import { computed } from 'vue'

const items = [
  {label: 'start'},
  {label: '01'},
  {label: '02'},
  {label: '03'},
  {label: '04'}
]

const activeIndex = ref(0)

const handleClick = (index: number) => {
  const anchor = document.querySelector(`#anchor${index}`)
  anchor!.scrollIntoView({
    behavior: 'smooth'
  })
}

const setAnchorIndex = (index: number) => {
  activeIndex.value = index
}

const top = computed(() => 2.3 * activeIndex.value + 'vw')

defineExpose({setAnchorIndex})
</script>

<template>
  <div class="fixed right-[4.25vw] top-1/2 -translate-y-1/2 flex z-50">
    <div class="w-[2.6vw]">
      <div
        v-for="(item, index) in items"
        class="text h-[2.3vw] leading-[2.3vw]"
        :style="{color: activeIndex === index ? '#fff' : '#ffffff8a'}"
        @click="handleClick(index)"
      >
        {{ item.label }}
      </div>
    </div>
    <div class="relative h-[calc(2.3*5)vw] w-[0.15vw] bg-[#ffffff8a]">
      <div class="absolute left-0 bg-white h-[2.3vw] w-full transition-all" :style="{top}"></div>
    </div>
  </div>
</template>

<style scoped>
.text {
  @apply flex items-center text-[1.25vw] h-1/5 cursor-pointer;
}
</style>
