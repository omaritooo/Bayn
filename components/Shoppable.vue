<template>
      <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="200"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            class="relative pt-[89px] pb-[160px] px-[39px] md:px-4 lg:px-0 flex flex-col md:flex-row md:gap-x-[82px] lg:gap-x-[114px] justify-center"
      >
            <div class="gradi"></div>
            <div
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-delay="400"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="true"
                  class="max-w-[277px] mt-[30px] md:mt-0 order-last md:order-first relative z-30 lg:w-full max-h-[460.35px] lg:h-full"
            >
                  <img class="relative z-30 object-cover rotate-[20deg]" src="/Rectangle 14.png" />
            </div>
            <div class="relative z-30 my-auto">
                  <svg
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="450"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="true"
                        class="mx-auto md:mx-0"
                        width="113"
                        height="112"
                        viewBox="0 0 113 112"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                  >
                        <path
                              d="M56.4522 56.3377L46.0687 61.6L48.0522 50.4544L39.6404 42.5618L51.2487 40.9402L56.4404 30.8L61.6322 40.9402L73.2404 42.5618L64.8287 50.4544L66.8122 61.6L56.4522 56.3377Z"
                              stroke="#1E1E27"
                              stroke-width="4.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                        />
                        <path
                              d="M93.7738 19.6H19.1071C16.5298 19.6 14.4404 21.6893 14.4404 24.2666V70.9333C14.4404 73.5106 16.5298 75.6 19.1071 75.6H93.7738C96.3511 75.6 98.4404 73.5106 98.4404 70.9333V24.2666C98.4404 21.6893 96.3511 19.6 93.7738 19.6Z"
                              stroke="#1E1E27"
                              stroke-width="5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                        />
                        <path
                              d="M34.0404 92.4H78.8404"
                              stroke="#1E1E27"
                              stroke-width="5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                        />
                        <path
                              d="M42.4404 75.6V92.4"
                              stroke="#1E1E27"
                              stroke-width="5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                        />
                        <path
                              d="M70.4404 75.6V92.4"
                              stroke="#1E1E27"
                              stroke-width="5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                        />
                  </svg>

                  <h1
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="500"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="true"
                        class="mt-[36px] max-w-[315px] text-center md:text-left md:max-w-[473px] text-[60px] lg:text-[90px] leading-[80px] lg:leading-[103px] font-[600] text-[#0A2533]"
                  >
                        Shoppable
                        Videos
                  </h1>
                  <div
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="550"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="true"
                        class="flex gap-x-[15px] gap-y-[5px] flex-wrap md:max-w-[300px] lg:max-w-full"
                  >
                        <div
                              class="px-[20px] py-[10px] bg-transparent rounded-[8px] text-[#56545D] text-[14px] leading-[16.44px] font-[600] border-[1px] border-[#F1F1F1] w-fit"
                        >Video shopping</div>
                        <div
                              class="px-[20px] py-[10px] bg-transparent rounded-[8px] text-[#56545D] text-[14px] leading-[16.44px] font-[600] border-[1px] border-[#F1F1F1] w-fit"
                        >Unboxing</div>
                        <div
                              class="px-[20px] py-[10px] bg-transparent rounded-[8px] text-[#56545D] text-[14px] leading-[16.44px] font-[600] border-[1px] border-[#F1F1F1] w-fit"
                        >Reviews</div>
                        <div
                              class="px-[20px] py-[10px] bg-transparent rounded-[8px] text-[#56545D] text-[14px] leading-[16.44px] font-[600] border-[1px] border-[#F1F1F1] w-fit"
                        >Shoppable videos</div>
                  </div>
            </div>
      </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.gradi {
      position: absolute;
      width: 100%;
      z-index: 20;
      height: 100%;
      left: 0px;
      top: 0;

      background: radial-gradient(
            21.55% 45.87% at 65.87% 50%,
            #d5e6ff 0%,
            #ffffff 100%
      );
}
@media screen and (max-width: 1366px) {
      .gradi {
            display: none;
      }
}
</style>