<template>
  <div class="container mx-auto">
    <div
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="200"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="true"
      class="my-[89px] py-8 relative container mx-auto flex flex-col md:flex-row lg:gap-x-[93px] justify-center"
    >
      <div class="relative z-30 mt-[15px] lg:w-fit md:mt-0 mx-auto md:mx-0 order-last">
        <div class="w-[277px] relative z-20 h-[441px] lg:w-[421px] lg:h-[654px]">
          <img class="mx-auto md:mx-0" src="/Bayn Website/Frame 2222.png" />
        </div>
        <Gradient />
        <!-- <img
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="450"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        class="absolute top-[43%] -left-[2%] scale-75 lg:scale-100 lg:-left-2 lg:top-[53%] 2xl:left-0 2xl:top-[49%]"
        src="/Rectangle 1281.png"
        alt
      />
      <svg
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-delay="500"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        class="absolute top-[66%] -left-[3%] scale-75 lg:scale-100"
        width="122"
        height="116"
        viewBox="0 0 122 116"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M120.783 114.684C111.38 113.973 89.963 111.525 68.637 101.197C64.1856 99.0444 41.9087 87.9162 32.8444 70.106C27.1275 58.8761 30.5406 52.9869 31.6623 51.3233C33.9893 47.873 39.4255 43.0067 44.4382 43.8745C49.7478 44.8123 52.5386 51.8609 52.5866 56.432C52.6025 58.0362 52.3475 66.5454 41.3581 70.4653C32.2365 73.7164 18.5213 72.8283 10.5033 68.4677C-6.01767 59.5065 1.75828 36.1884 13.7473 22.584C23.8726 11.0908 38.529 4.80352 47.4463 1.66563"
          stroke="#1E1E27"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
        />
        </svg>-->
      </div>

      <div class="relative z-30 mx-auto md:mx-0 md:my-auto">
        <svg
          class="mx-auto md:mx-0"
          width="113"
          height="113"
          viewBox="0 0 113 113"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M56.4524 56.987L46.0689 62.2492L48.0524 51.1036L39.6406 43.211L51.2489 41.5894L56.4406 31.4492L61.6324 41.5894L73.2406 43.211L64.8288 51.1036L66.8123 62.2492L56.4524 56.987Z"
            stroke="#1E1E27"
            stroke-width="4.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M93.7747 20.248H19.1081C16.5307 20.248 14.4414 22.3374 14.4414 24.9147V71.5814C14.4414 74.1587 16.5307 76.248 19.1081 76.248H93.7747C96.3521 76.248 98.4414 74.1587 98.4414 71.5814V24.9147C98.4414 22.3374 96.3521 20.248 93.7747 20.248Z"
            stroke="#1E1E27"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M34.041 93.0488H78.841"
            stroke="#1E1E27"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M42.4414 76.248V93.048"
            stroke="#1E1E27"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M70.4414 76.248V93.048"
            stroke="#1E1E27"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h1
          class="mx-auto md:mx-0 mt-[17px] lg:mt-[27px] lg:max-w-[473px] max-w-[196px] text-[38px] leading-[45px] lg:text-[55px] lg:leading-[72px] font-[600] text-[#0A2533] text-center md:text-left"
        >{{ $t('ShoppableVideos') }}</h1>
        <p
          class="text-[24px] leading-[32px] font-[500] text-[#394452] max-w-[497.85px] mt-[14px]"
        >{{ $t('ShoppableVideosInfo') }}</p>
        <div
          class="mt-[24px] md:mx-0 flex gap-x-[15px] gap-y-[15px] flex-wrap md:max-w-[300px] lg:max-w-[437px]"
        >
          <div
            class="px-[20px] py-[10px] bg-transparent rounded-[8px] text-[#56545D] text-[14px] leading-[16.44px] font-[600] border-[1px] border-[#F1F1F1] w-fit"
          >{{ $t('VideoShopping') }}</div>
          <div
            class="px-[20px] py-[10px] bg-transparent rounded-[8px] text-[#56545D] text-[14px] leading-[16.44px] font-[600] border-[1px] border-[#F1F1F1] w-fit"
          >{{ $t('Unboxing') }}</div>
          <div
            class="px-[20px] py-[10px] bg-transparent rounded-[8px] text-[#56545D] text-[14px] leading-[16.44px] font-[600] border-[1px] border-[#F1F1F1] w-fit"
          >{{ $t('Reviews') }}</div>
          <div
            class="px-[20px] py-[10px] bg-transparent rounded-[8px] text-[#56545D] text-[14px] leading-[16.44px] font-[600] border-[1px] border-[#F1F1F1] w-fit"
          >{{ $t('ShoppableVideos') }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default
  {

  }
</script>

<style scoped>
</style>