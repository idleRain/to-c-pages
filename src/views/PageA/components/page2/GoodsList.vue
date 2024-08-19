<script setup lang="ts">
import Goods from '@/views/PageA/components/page2/Goods.vue'
const goodsRefs = ref<InstanceType<typeof Goods>[]>([]);
import pic1 from '@/assets/images/8.png'
import pic2 from '@/assets/images/9.png'
import pic3 from '@/assets/images/10.png'

const data = reactive([
  {
    oneTitle: 'This Home',
    twoTitle: 'Refined Study',
    price: 10000,
    introduction: 'High-End Home Furnishings Are Crafted With Meticulous\n Attention To Detail And The\n Finest Materials. They Combine Elegance, Style,',
    pic: pic1
  },
  {
    oneTitle: 'This Home',
    twoTitle: 'Warm Bedroom',
    price: 38749,
    introduction: 'A Warm Bedroom Is A Haven Of Tranquility. Soft Lighting,\n Plush Bedding, And Gentle Hues Create An Inviting\n  Atmosphere That Soothes The Soul.',
    pic: pic2
  },
  {
    oneTitle: 'This Home',
    twoTitle: 'Wide Living Room',
    price: 20000,
    introduction: 'A Spacious Living Room Is A Realm Of Openness And Comfort.\n Expansive Windows, Tasteful Decor, And Ample Seating Offer\n A Welcoming Space For Relaxation And Gatherings.',
    pic: pic3
  }
])

</script>

<template>
  <div class="mt-[2vw] flex w-full content gap-[1.82vw]">
    <goods ref="goodsRefs" v-for="item in data" :data="item" />
  </div>
</template>

<style scoped>

</style>
