<script setup name="PageA" lang="ts">
defineProps<{ index: number }>()
</script>

<template>
  <div :id="`anchor${index}`" class="page-container h-screen">
    <div class="my-box h-screen">
      <div class="mx-auto content h-full flex justify-between items-center">
        <div class="flex-1 url text-[1.25vw] tracking-[0.2em]">WWW.KASHI.COM</div>
        <div class="w-[49.4vw]">
          <div class="text-[4.58vw] leading-[1.1]">Be Prepared For Life And a Better Life!</div>
          <div class="text-[1.67vw] flex items-center">
            <span class="mr-[1vw] text-DINPro">scroll down</span>
            <svg-icon name="downward" width="14" />
          </div>
        </div>
        <div class="flex-1"></div>
      </div>
    </div>
    <div class="full h-[15vw]"></div>
  </div>
</template>

<style scoped>
.my-box {
  background: linear-gradient(to top, rgba(0, 0, 0, 0) 30.06%, rgba(0, 0, 0, 0.8) 108.93%);
}
.url {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
}
.full {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 1) 70%);
}
</style>
