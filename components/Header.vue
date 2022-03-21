<template>
  <div class="container mx-auto">
    <div
      class="flex justify-around flex-col md:flex-row xl:gap-x-[120px] md:gap-x-[50px] 2xl:gap-x-[219px]"
    >
      <div class="relative flex flex-col mx-auto my-auto md:mx-0">
        <h1
          :class="
            $i18n.locale == 'ar'
              ? 'text-[40px] md:text-right lg:leading-[103px] lg:text-[70px]'
              : 'text-[50px] lg:text-[80px] md:text-left lg:leading-[73px]'
          "
          class="text-center text-[30px] md:mx-0 leading-[45px] font-[600] text-[#2C3A4B] 2xl:max-w-[610px] lg:max-w-[516px] md:max-w-[381px]"
        >
          <span class="relative whitespace-nowrap">
            {{ $t('ecommerceFirst') }}
            <svg
              v-if="$i18n.locale == 'en'"
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
            <svg
              v-if="$i18n.locale == 'ar'"
              class="absolute -top-2 -left-5 w-[30px] h-[22px] lg:w-10 lg:h-[30px] hidden md:flex"
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
          <br />
          {{ $t('ecommerceSecond') }}
        </h1>
        <p
          :class="
            $i18n.locale == 'ar'
              ? 'md:text-right lg:leading-[52.47px] lg:text-[28px]'
              : 'lg:text-[18px] md:text-left lg:leading-[21.13px]'
          "
          class="text-[18px] mt-[20px] xl:mt-[20px] mx-auto md:mx-0 text-center md:mt-0 leading-[30px] font-[500] my-2 xl:max-h-[151.89px] text-[#394452] xl:max-w-[342.38px] max-w-[360.37px] md:max-w-[342.38px]"
        >
          {{ $t('StartLive') }}
        </p>
        <div class="flex mx-auto md:mx-0 md:mt-[34px] gap-x-[12px]">
          <nuxt-link
            to="/business"
            class="bg-black font-[500] leading-[15px] my-auto lg:leading-[18.78px] rounded-[8px] text-[13px] lg:text-[16px] px-[20px] py-[12px] lg:py-[15px] text-white"
            >{{ $t('StartLiveButton') }}</nuxt-link
          >
        </div>
        <svg
          v-if="$i18n.locale == 'en'"
          class="absolute hidden lg:flex lg:bottom-10 lg:-right-28 xl:top-1/2 xl:-right-32 2xl:right-0 2xl:top-3/4"
          width="232"
          height="125"
          viewBox="0 0 232 125"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.6391 101.99C24.1842 110.473 52.2183 115.953 73.095 107.323C104.588 94.3047 125.977 63.3648 123.519 50.5586C121.061 37.7524 106.934 37.2405 106.765 48.1957C106.557 61.6822 134.926 75.2034 174.892 43.5955C174.892 43.5955 205.187 16.1831 210 5.74376"
            stroke="#1E1E27"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M206.487 26.1758C207.726 19.3951 210.883 5.14794 213.599 2.40529"
            stroke="#1E1E27"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M213.619 2.31475C206.564 6.4994 201.12 8.74691 191.912 7.02237"
            stroke="#1E1E27"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>

        <svg
          v-if="$i18n.locale == 'ar'"
          class="absolute hidden lg:flex lg:bottom-10 lg:-left-20 xl:top-1/2 xl:-left-32 2xl:-left-20"
          width="226"
          height="67"
          viewBox="0 0 226 67"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M224.009 44.9053C214.063 54.8894 188.382 65.6248 165.998 62.7022C132.232 58.2934 103.632 36.3181 102.723 24.7898C101.815 13.2615 115.333 9.7837 118.305 19.1571C121.965 30.6962 98.0211 48.4112 51.3014 29.8572C51.3014 29.8572 15.0016 12.827 7.67427 4.89549"
            stroke="#1E1E27"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M16.3086 21.6899C13.3728 16.1322 6.66913 4.57392 3.34131 2.80235"
            stroke="#1E1E27"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M3.2995 2.72828C11.1894 4.80528 17.0255 5.56499 25.4797 2.10354"
            stroke="#1E1E27"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div
        :class="$i18n.locale == 'ar' ? '-rotate-[20deg]' : ''"
        class="mt-[22px] md:mt-0 lg:my-0 mx-auto md:mx-0 w-fit lg:mx-0"
      >
        <nuxt-img
          class="object-cover lg:h-[613.15px] lg:w-[343.31px] w-[267.04px] h-[443.36px]"
          src="/phoneright.png"
          alt
        />
      </div>
    </div>
    <div
      class="pt-[87px] flex-col md:flex-row px-2 gap-y-[30px] md:gap-y-0 flex md:justify-between lg:justify-center text-center lg:gap-x-[150px] pb-[163px]"
    >
      <div class="mx-auto w-fit md:mx-0">
        <img
          class="w-24 h-24 mx-auto mb-4 select-none"
          src="/under-control.svg"
          alt="Products under control"
        />

        <span
          class="text-[#0A2533] text-[18px] lg:text-[22px] leading-[40px] md:max-w-[197px] lg:max-w-[241px] font-[600] mt-[25.9px] mb-[12px]"
          >{{ $t('Products') }}</span
        >
        <p
          class="text-center max-w-[219px] lg:max-w-[281px] font-[500] md:text-[14px] lg:text-[18px] leading-[24px] text-[#394452]"
        >
          {{ $t('ProductsInfo') }}
        </p>
      </div>
      <div class="mx-auto w-fit md:mx-0">
        <img
          class="w-24 h-24 mx-auto mb-4 select-none"
          src="/influencer-marketing.svg"
          alt="influencre marketing"
        />

        <span
          class="text-[#0A2533] text-[18px] lg:text-[22px] leading-[40px] md:max-w-[177px] lg:max-w-[241px] font-[600] mt-[25.9px] mb-[12px]"
          >{{ $t('InfluencerMarketing') }}</span
        >
        <p
          class="text-center max-w-[172px] lg:max-w-[220px] font-[500] text-[14px] lg:text-[18px] leading-[24px] text-[#394452]"
        >
          {{ $t('InfluencerInfo') }}
        </p>
      </div>
      <div class="mx-auto w-fit md:mx-0">
        <img
          class="w-24 h-24 mx-auto mb-4 select-none"
          src="/happy-clients.svg"
          alt="influencre marketing"
        />

        <span
          class="text-[#0A2533] text-[18px] lg:text-[22px] leading-[40px] md:max-w-[117px] lg:max-w-[241px] font-[600] mt-[25.9px] mb-[12px]"
          >{{ $t('HappyClients') }}</span
        >
        <p
          class="text-center max-w-[196.39px] lg:max-w-[333px] font-[500] text-[14px] lg:text-[18px] leading-[24px] text-[#394452]"
        >
          {{ $t('Clientsinfo') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from '@/mixins/aos.js'
export default {
  mixins: [AOS],
  methods: {
    test() {
      console.log('Test')
    },
  },
}
</script>

<style></style>
