<template>
  <div
    class="flex justify-center md:flex-row flex-col md:gap-x-[59.8px] xl:gap-x-[92.7px] relative my-[7.75rem]"
  >
    <div class="grad"></div>
    <div class="relative z-50 flex flex-col text-center h-fit w-fit md:text-left">
      <h1 class="font-[600] md:text-[18px] w-full xl:text-[28px] text-[#D8315B]">FOR INFLUENCER</h1>
      <h2
        class="xl:mt-[40px] font-[600] leading-[45px] xl:leading-[60px] text-[38px] xl:text-[48px] text-[#0A2533]"
      >Using bayn is Easy</h2>
      <p
        class="xl:mt-[20px] font-[500] md:mt-[10px] leading-[32px] lg:leading-[44px] text-[22px] xl:text-[29px] text-[#0A2533] xl:max-w-[497.92px] md:max-w-[366.56px]"
      >We’ve designed Bayn so that anyone can do it. Literally anyone.</p>
      <div class="flex flex-col mx-auto md:mx-0 w-fit md:gap-y-[7px] xl:gap-y-[20px] mt-[20px]">
        <p
          class="font-[500] text-left md:leading-[32px] xl:leading-[32px] md:max-w-[364.57px] lg:max-w-[479px] text-[18px] text-[#0A2533]"
        >1 - Download the app & request your business account</p>
        <p
          class="font-[500] text-left leading-[32px] md:max-w-[300px] xl:max-w-[300px] text-[18px] text-[#0A2533]"
        >2 - Get approved by bayn in no time</p>
        <p
          class="font-[500] text-left leading-[32px] md:max-w-[364.57px] xl:max-w-[438px] text-[18px] text-[#0A2533]"
        >3 - Start receiving requests from stores and get paid</p>
      </div>
      <div class="flex mx-auto mt-[20px] md:mx-0 gap-x-[14px] md:gap-x-[17px]">
        <button
          class="text-[14px] leading-[15.26px] md:leading-[16.44px] font-semibold px-[20px] md:py-[12px] xl:py-[15px] text-white bg-black rounded-[8px]"
        >Get Bayn for Android</button>
        <button
          class="text-[14px] leading-[16.44px] font-semibold px-[20px] py-[12px] xl:py-[15px] text-black bg-transparent border-[1px] border-black rounded-[8px]"
        >Get Bayn for Iphone</button>
      </div>
    </div>
    <div class="relative mx-auto md:mx-0 mt-[52px] md:mt-0 z-50">
      <img
        src="/Rectangle 12.png"
        class="object-cover mx-auto md:mx-0 md:mt-0 w-[277.06px] h-[460.16px] lg:w-[350.31px] lg:h-[613.15px]"
        alt
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    inf: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style scoped>
.grad {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0;
  z-index: 1;

  background: radial-gradient(
    24.06% 51.23% at 67.07% 51.6%,
    #deebff 0%,
    #ffffff 100%
  );
}

@media screen and (max-width: 1366px) {
  .grad {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0;
    z-index: 1;

    background: radial-gradient(
      16.34% 34.73% at 70.71% 51.81%,
      #deebff 0%,
      #ffffff 100%
    );
  }
}
</style>