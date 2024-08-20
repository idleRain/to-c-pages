<script setup lang="ts" name="Goods">
import MyButton from '@/views/PageA/components/Button.vue'

const props = defineProps<{
  data: {
    oneTitle: string
    twoTitle: string
    price: number
    introduction: string
    pic: any
  }
}>()

const bgUrl = computed(() => `url("${props.data.pic}")`)
</script>

<template>
  <div class="box flex flex-col justify-between text-center pt-[4.79vw] pb-[2.52vw] transition goods h-[46vw] bg-cover bg-no-repeat flex-1">
    <div>
      <div class="text-[1.25vw]">{{ data.oneTitle }}</div>
      <div class="text-[3.33vw]">{{ data.twoTitle }}</div>
    </div>
    <div>
      <div class="text-DINPro mb-[0.5vw] font-bold text-[1.875vw]">Price:£{{ data.price }}</div>
      <div class="text-[1.25vw] mb-[1.46vw] whitespace-pre-wrap">{{ data.introduction }}</div>
      <my-button class="mx-auto">
        View Details
      </my-button>
    </div>
  </div>
</template>

<style scoped>
.box {
  background-image: v-bind("bgUrl");
  background-position: center;
}
</style>
