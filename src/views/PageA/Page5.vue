<script setup lang="ts">
import MyButton from '@/views/PageA/components/Button.vue'

defineProps<{ index: number }>()

const menu = {
  left: [
    { label: 'About MNTN', path: '/' },
    { label: 'Contributors & Writers', path: '/' },
    { label: 'Write For Us', path: '/' },
    { label: 'Contact Us', path: '/' },
    { label: 'Privacy Policy', path: '/' }
  ],
  right: [
    { label: 'The Team', path: '/' },
    { label: 'Jobs', path: '/' },
    { label: 'Press', path: '/' }
  ]
}
</script>

<template>
  <div :id="`anchor${index}`" class="relative page-container min-h-screen pt-[10vw]">
    <div class="text-center w-[52vw] mx-auto">
      <div class="text-[1.875vw]">OUR PROFILE</div>
      <div class="text-[3.7vw]">IDEALS & PURPOSES</div>
      <div class="text-[1.67vw]">
        We Are Only Dedicated To Creating High-End Home Products. We Always Adhere To Excellent Quality And Exquisite Craftsmanship, Meticulously Crafting Every Detail. Our Ideal Is To Create A Home That Is Not Only Elegant But Also Makes People Feel Comfortable With Their Whole Heart. Here, Every Corner Flows With Warmth And Coziness, And Every Element Shows Unique Taste And Charm.
      </div>
      <my-button class="mx-auto mt-[4.2vw] w-[10.62vw] h-[4.17vw]">REACH ME</my-button>
    </div>

    <div class="flex justify-between mt-[11.41vw] pb-[9vw] w-[66vw] mx-auto">
      <div class="w-[20vw]">
        <div class="flex items-center">
          <svg-icon name="logo" width="35" height="43" class="mr-[0.62vw]" />
          <div class="text-[0.94vw] leading-[1.66]">Get out there & discover your next slope, mountain & destination!</div>
        </div>
        <div class="mt-[6.67vw]">Copyright 2023 MNTN, Inc. Terms & Privacy</div>
      </div>
      <div class="flex">
        <div v-for="m in menu" class="ml-[14vw]">
          <div v-for="items in m" class="mt-[0.83vw]">
            <router-link :to="items.path" class="text-[0.94vw]">
              {{ items.label }}
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-0 bg-[url(@/assets/images/3.png)] bg-center bg-cover h-screen w-screen -z-10">
      <div class="my-bg w-full h-full"></div>
    </div>
  </div>
</template>

<style scoped>
.my-bg {
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 1) 100%), linear-gradient(to top, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 1) 100%);
}
</style>
