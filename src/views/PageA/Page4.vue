<script setup lang="ts">
import MyButton from '@/views/PageA/components/Button.vue'

defineProps<{ index: number }>()
</script>

<template>
  <div :id="`anchor${index}`" class="page-container mt-[10vw] h-screen content">
    <div class="banner flex justify-end w-full h-[41.67vw] bg-[url(@/assets/images/2.png)]">
      <div class="w-[33.33vw] mr-[5.76vw] pt-[8.2vw]">
        <div class="text-[1.25vw]">This Home</div>
        <div class="text-DINPro text-[3.33vw] leading-[1.2]">Japanese Minimalist Style ”</div>
        <div class="text-[1.25vw] mt-[2vw]">
          The Houses Of Japanese Minimalist Style Are Like Peaceful Works Of art. The Spatial Layout Is Simple And Clear, With Smooth And Natural Lines. Natural Materials And Soft Colors Complement Each Other, Creating A Rustic And Warm Atmosphere. Discarding Complicated Decorations And Focusing On The Balance Of Functionality And Aesthetics, Every Detail Eeveals Tranquility And Purity, Comforting People's Souls.
        </div>
        <my-button class="mt-[3vw] w-[7.29vw] h-[3.17vw]">View Details</my-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner {
  background-size: 100%;
  background-position: bottom;
}
</style>
