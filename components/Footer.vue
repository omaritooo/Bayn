<template>
  <div class="!overflow-x-hidden font-semibold bg-[#E5E5E5] px-80">
    <div class="relative py-16">
      <div class="bg-[#FFFAFF] relative px-24 py-[5.75rem] rounded-xl flex justify-between">
        <div class="text-[24px] my-auto gap-y-4 text-[#394452] z-50">
          <h3 class="text-[58px] text-[#0A2533] font-bold">It is free</h3>
          <div class="font-semibold">Can’t wait to start join us as a merchant</div>
        </div>
        <div class="z-50 my-auto">
          <button class="px-10 text-white bg-black rounded-lg text-[24px] py-4">Start your campaign</button>
        </div>
      </div>
      <div class="absolute !z-[1] overflow-x-hidden w-screen h-[2px] bg-[#EBEEF2] top-1/2 -left-80"></div>
    </div>

    <div class="flex justify-between py-16">
      <div class="flex flex-col gap-y-5 text-[16px] text-[#2C3A4B] font-semibold">
        <img class="w-[89px] h-[46px]" src="/bayn.svg" alt />
        <div>
          <p class>Empower People, Empower</p>
          <p>Community.</p>
        </div>
      </div>
      <div class="flex gap-x-20 text-[16px] text-[#2C3A4B] w-fit">
        <div class="flex flex-col gap-y-8">
          <nuxt-link to>Why Bayn</nuxt-link>
          <nuxt-link to>For Influencers</nuxt-link>
          <nuxt-link to>FAQ</nuxt-link>
        </div>
        <div class="flex flex-col gap-y-8">
          <nuxt-link to>About Bayn</nuxt-link>
          <nuxt-link to>Careers</nuxt-link>
          <nuxt-link to>Contact Us</nuxt-link>
        </div>
      </div>
      <div class="flex flex-col gap-y-6">
        <div class="flex gap-x-6">
          <img src="/fa_facebook-square.svg" />
          <img src="/fa_facebook-square.svg" />
          <img src="/fa_facebook-square.svg" />
        </div>
        <div class="flex justify-end gap-x-6">
          <img src="/fa_facebook-square.svg" />
          <img src="/fa_facebook-square.svg" />
        </div>
      </div>
    </div>
    <div class="py-20 flex justify-between font-semibold text-[14px] text-[#2C3A4B]">
      <div class>{{ new Date().getFullYear() }} Bayn Limited. All Rights Reserved</div>
      <div>
        <div class="flex gap-x-4">
          <nuxt-link to>Terms and Conditions</nuxt-link>
          <nuxt-link to>Privacy Policy</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
</style>