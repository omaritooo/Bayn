<template>
  <div class="!overflow-x-hidden font-semibold bg-white px-80">
  

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