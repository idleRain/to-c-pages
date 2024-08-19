<script setup name="PageA" lang="ts">
import { vIntersectionObserver } from '@vueuse/components'
import MyMenu from '@/views/PageA/components/Menu.vue'
import Page1 from './Page1.vue'
import Page2 from './Page2.vue'
import Page3 from './Page3.vue'
import Page4 from './Page4.vue'
import Page5 from './Page5.vue'
import MyProgress from '@/views/PageA/components/page1/progress.vue'

const pageArr = markRaw([Page1, Page2, Page3, Page4, Page5])
const progressRef = ref<InstanceType<typeof MyProgress>>()

const abc = (...args: any[]) => {
  const [index, [{ isIntersecting }]] = args
  isIntersecting && progressRef.value?.setAnchorIndex(index)
}
</script>

<template>
  <div class="relative bg-[url('@/assets/images/1.png')] bg-top bg-no-repeat">
    <my-header>
      <template #left>
        <svg-icon name="logo" width="35" height="43"/>
      </template>
      <template #right>
        <my-menu/>
      </template>
    </my-header>
    <div class="page">
      <component
        v-for="(page, index) in pageArr"
        :is="page"
        :index="index"
        v-intersection-observer="(...a) => abc(index, ...a)"
      />
      <MyProgress ref="progressRef"/>
    </div>
  </div>
</template>

<style scoped>
</style>
