<script setup lang="ts">
import pic1 from '@/assets/images/4.png'
import pic2 from '@/assets/images/5.png'
import pic3 from '@/assets/images/6.png'
import pic4 from '@/assets/images/7.png'

defineProps<{ index: number }>()

const list = [
  { id: 1, pic: pic1 },
  { id: 2, pic: pic2 },
  { id: 3, pic: pic3 },
  { id: 4, pic: pic4 },
]
</script>

<template>
  <div :id="`anchor${index}`" class="page-container content h-screen mt-[10vw]">
    <div class="text-DINPro text-[3.33vw] w-[27vw]">Our Latest Design Works</div>
    <div class="flex items-center">
      <span class="mr-[2.2vw] text-[1.67vw]">Go to account</span>
      <svg-icon name="rightward" width="42" height="24" />
    </div>
    <div class="mt-[3vw]">
      <div class="flex justify-between">
        <div v-for="item in list" class="w-[21.56vw] h-[28.65vw]">
          <img :src="item.pic" class="w-full h-full object-cover" alt="">
        </div>
      </div>
      <div class="relative mt-[3vw] bg-[#ffffff8a] w-[45vw] h-[0.16vw]">
        <div class="absolute h-full bg-white w-[12.44vw] left-0 top-0"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
