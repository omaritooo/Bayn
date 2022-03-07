<template>
  <div class="container mx-auto">
    <div
      class="flex justify-around flex-col md:flex-row xl:gap-x-[120px] md:gap-x-[50px] 2xl:gap-x-[219px]"
    >
      <div class="relative flex flex-col mx-auto my-auto md:mx-0">
        <h1
          class="lg:text-[48px] text-center md:text-left text-[30px] xl:leading-[73px] md:mx-0 leading-[45px] font-[600] text-[#2C3A4B] 2xl:max-w-[610px] lg:max-w-[610px] md:max-w-[381px]"
        >A livestreaming commerce Platform that transforms your business</h1>
        <p
          class="text-[18px] mt-[20px] mx-auto md:mx-0 text-center md:text-left md:mt-0 leading-[30px] font-[500] my-2 xl:max-h-[151.89px] text-[#394452] xl:max-w-[342.38px] max-w-[360.37px] md:max-w-[342.38px]"
        >
          Bayn connects people to their needs for saving time & effort to reach
          maximum entertainment
        </p>
        <div class="flex mx-auto md:mx-0 md:mt-[15px] gap-x-[12px]">
          <nuxt-link
            to="/business"
            class="bg-black font-[500] leading-[15px] my-auto lg:leading-[18.78px] rounded-[8px] text-[13px] lg:text-[16px] px-[20px] py-[12px] lg:py-[15px] text-white"
          >I’m a business owner</nuxt-link>
          <nuxt-link
            to="/influencers"
            class="bg-transparent font-[500] leading-[15px] my-auto lg:leading-[18.78px] rounded-[8px] text-[13px] lg:text-[16px] px-[20px] py-[12px] lg:py-[15px] text-black border-[1px] border-black"
          >I’m an influencer</nuxt-link>
        </div>
        <svg
          class="absolute hidden lg:block xl:bottom-[47%] xl:scale-100 lg:scale-75 lg:bottom-1/3 right-0 xl:right-2"
          width="259"
          height="64"
          viewBox="0 0 259 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.3916 37.4949C13.079 49.4042 41.6648 63.1848 67.3878 61.3443C106.192 58.568 140.258 35.6401 142.053 22.6951C143.848 9.75007 128.658 4.94755 124.651 15.3275C119.718 28.1058 145.862 49.6464 200.371 31.7567C200.371 31.7567 242.895 14.9081 251.774 6.43786"
            stroke="#1E1E27"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M240.821 24.82C244.536 18.7418 252.942 6.13992 256.854 4.35806"
            stroke="#1E1E27"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M256.908 4.27852C247.772 6.10809 241.066 6.58536 231.65 2.13074"
            stroke="#1E1E27"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div class="mt-[22px] md:mt-0 lg:my-0 mx-auto md:mx-0 w-fit lg:mx-0">
        <img
          class="object-cover lg:h-[613.15px] lg:w-[343.31px] w-[267.04px] h-[443.36px]"
          src="/phoneright.png"
          alt
        />
      </div>
    </div>
  </div>
</template>

<script>
import AOS from '@/mixins/aos.js'
export default {
  mixins: [AOS]
}
</script>

<style>
</style>