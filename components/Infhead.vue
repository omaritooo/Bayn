<template>
  <div class="relative overflow-x-hidden">
    <div
      class="container mx-auto relative z-30 flex flex-col gap-y-[96px] mt-[14px] mb-[142px]"
    >
      <div
        class="flex relative justify-center mx-auto flex-col md:mt-0 md:flex-row lg:gap-x-[64px] xl:gap-x-[101px] mt-[20px] mb-[64px]"
      >
        <div class="flex md:my-auto xl:mb-[85px] relative flex-col lg:my-auto">
          <h1
            v-if="$i18n.locale == 'ar'"
            class="text-[40px] inline lg:text-[70px] text-center md:text-right lg:leading-[100px] font-[600] text-[#0A2533] whitespace-nowrap"
          >
            <span class="relative">
              {{ $t('baynForInfluencers') }}
              <svg
                class="absolute -top-2 -left-10 w-[30px] h-[22px] lg:w-10 lg:h-[30px] hidden md:flex"
                viewBox="0 0 40 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.8772 19.3551C34.4752 17.0087 32.8308 10.6774 37.4688 4.12256M24.5793 19.7737C21.1881 12.8199 17.13 5.91593 13.1617 2.57611"
                  stroke="#1E1E27"
                  stroke-width="3"
                />
                <path
                  d="M16.6098 28.0842C15.2646 25.1939 10.2819 19.2837 1.11226 18.7656"
                  stroke="#1E1E27"
                  stroke-width="3"
                />
              </svg>
            </span>
          </h1>
          <h1
            v-if="$i18n.locale == 'en'"
            class="text-[50px] inline lg:text-[80px] text-center md:text-left lg:leading-[100px] font-[600] text-[#0A2533]"
          >
            {{ $t('baynFor') }}

            <br class="rtl:hidden" />
            <span class="relative">
              {{ $t('forInfluencers') }}

              <svg
                class="absolute -top-2 -right-5 w-[30px] h-[22px] lg:w-10 lg:h-[30px] hidden md:flex"
                viewBox="0 0 40 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.60085 18.9073C5.00279 16.561 6.64719 10.2297 2.00928 3.6748M14.8987 19.326C18.2899 12.3721 22.3481 5.46818 26.3163 2.12836"
                  stroke="#1E1E27"
                  stroke-width="3"
                />
                <path
                  d="M22.8689 27.6365C24.2141 24.7461 29.1968 18.8359 38.3665 18.3178"
                  stroke="#1E1E27"
                  stroke-width="3"
                />
              </svg>
            </span>
          </h1>
          <p
            class="max-w-[357.97px] text-center md:text-left rtl:md:text-right mx-auto md:mx-0 md:max-w-[410.27px] lg:max-w-[541.68px] font-[500] text-[#394452] text-[18px] leading-[35px]"
          >
            {{ $t('BaynInfInfo') }}
          </p>
          <div class="flex w-full gap-x-[17px] mt-[27px] relative z-40">
            <button
              class="text-[14px] relative z-40 leading-[16.44px] font-[500] py-[12px] px-[15px] lg:px-[20px] lg:py-[15px] text-white bg-black rounded-[8px]"
            >
              {{ $t('Android') }}
            </button>
            <button
              class="text-[14px] relative z-40 leading-[16.44px] font-[500] py-[12px] px-[15px] lg:px-[20px] lg:py-[15px] text-black bg-white border-[1px] border-black rounded-[8px]"
            >
              {{ $t('Iphone') }}
            </button>
            <svg
              v-if="$i18n.locale == 'en'"
              class="absolute bottom-0 hidden -translate-x-20 -translate-y-5 left-full lg:flex"
              width="187"
              height="75"
              viewBox="0 0 187 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.88215 68.1085C3.61438 77.4761 148.372 62.3051 112.593 37.8993C54.4308 -1.77393 143.742 18.7644 176.218 9.57715"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                d="M164.38 19.5645C168.315 16.4607 176.94 10.1979 179.957 9.97757"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                d="M180.012 9.93828C173.537 8.91429 168.995 7.59122 163.87 2.35207"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
            <svg
              v-else
              class="absolute bottom-0 hidden translate-x-40 right-full lg:flex"
              width="238"
              height="82"
              viewBox="0 0 238 82"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M231.703 74.8294C234.95 84.3259 49.136 63.7499 94.0265 40.5435C166.999 2.82006 53.4579 20.1686 11.5579 9.74073"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                d="M27.0762 20.2129C21.9253 16.949 10.6563 10.3382 6.78728 10.0057"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                d="M6.71594 9.96365C14.9654 9.17319 20.7297 8.011 27.0956 2.9352"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>
        <div
          class="relative hidden mx-auto lg:block w-[353.31px] lg:w-[679.76px] lg:h-[613.15px] h-[444.44px]"
        >
          <nuxt-img class="object-cover mx-auto" src="/Frame 17.png" />
        </div>
        <div>
          <nuxt-img class="block lg:hidden" src="/Frame 17 1.png" alt />
        </div>
      </div>
      <h1
        class="font-[600] text-[60px] md:text-[50px] mx-auto lg:leading-[120px] leading-[77px] lg:max-w-[751px] max-w-[357.66px] text-center md:text-left px-2 text-[#0A2533]"
      >
        {{ $t('Work') }}
      </h1>
    </div>
    <div
      class="flex flex-col md:flex-row relative justify-center md:gap-x-[48px] lg:gap-x-[120px]"
    >
      <div class="relative z-30">
        <Gradient />
        <nuxt-img class="relative z-30" src="/Rectangle 8.png" alt />
      </div>
      <div
        class="mt-[91px] mx-auto md:mx-0 relative z-30 gap-y-[18px] max-w-[564px] flex flex-col font-[500] text-[#0A2533] md:text-[24px] lg:text-[30px] md:leading-[38px] lg:leading-[73px]"
      >
        <span>
          {{ $t('Remark') }}
          <span class="text-[40px] font-[600]">+</span>
        </span>
        <span>
          {{ $t('Famous') }}
          <span class="text-[40px] font-[600]">+</span>
        </span>
        <span>
          {{ $t('Leading') }}
          <span class="text-[40px] font-[600]">=</span>
        </span>
        <span>{{ $t('ecom') }}</span>

        <div class="flex gap-x-[17px] mt-[27px] relative">
          <button
            class="text-[14px] leading-[16.44px] font-[500] px-[20px] py-[15px] text-white bg-black rounded-[8px]"
          >
            {{ $t('Android') }}
          </button>
          <button
            class="text-[14px] leading-[16.44px] font-[500] px-[20px] py-[15px] text-black bg-transparent border-[1px] border-black rounded-[8px]"
          >
            {{ $t('Iphone') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Gradient from './Gradient.vue'
import AOS from '@/mixins/aos.js'
export default {
  components: { Gradient },
  mixins: [AOS],
}
</script>
<style>
.track {
  position: absolute;

  white-space: nowrap;
  will-change: transform;
  animation: marquee 12s linear infinite;
}

@keyframes marquee {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-1%);
  }
}
@keyframes marquee2 {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-200%);
  }
}
.glass {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px;

  background: linear-gradient(
    269.86deg,
    rgba(255, 255, 255, 0.01) 0.12%,
    rgba(255, 255, 255, 0.005) 0.13%
  );
  backdrop-filter: blur(65px);
  border-radius: 20px;
}
</style>
