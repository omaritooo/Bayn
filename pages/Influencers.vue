<template>
    <div>
        <div class="relative">
            <div class="gradient"></div>
            <Navbar class="relative z-30" />
            <Infhead class="relative z-30" />
        </div>
        <Success />
        <Shoppable />
        <Seller />
        <Paid />
        <Design />
        <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="200"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            class="flex md:flex-row flex-col justify-center gap-x-12 lg:gap-x-[10px] xl:gap-x-12 mx-auto container"
        >
            <!-- <div class="grad"></div> -->
            <div class="relative z-50 flex flex-col my-auto text-center h-fit w-fit md:text-left">
                <!-- <h1 class="font-[600] md:text-[18px] w-full xl:text-[28px] text-[#D8315B]">FOR INFLUENCER</h1> -->
                <h2
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="400"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    class="xl: font-[600] md:leading-[45px] xl:leading-[60px] md:text-[38px] xl:text-[48px] text-[#0A2533]"
                >{{ $t('usingBayn') }}</h2>
                <p
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="450"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    class="xl:mt-[20px] font-[500] md:mt-[10px] leading-[44px] md:text-[22px] xl:text-[29px] text-[#0A2533] xl:max-w-[600px] md:max-w-[366.56px]"
                >{{ $t('usingBaynInfo') }}</p>
                <div class="flex flex-col w-fit md:gap-y-[7px] xl:gap-y-[10px] mt-[20px]">
                    <p
                        data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="500"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="true"
                        class="font-[500] md:leading-[32px] xl:leading-[32px] md:max-w-[364.57px] lg:max-w-[479px] text-[18px] text-[#0A2533]"
                    >{{ $t('Download') }}</p>
                    <p
                        data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="550"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="true"
                        class="font-[500] leading-[32px] md:max-w-[300px] xl:max-w-[300px] text-[18px] text-[#0A2533]"
                    >{{ $t('Approved') }}</p>
                    <p
                        data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="600"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="true"
                        class="font-[500] leading-[32px] md:max-w-[364.57px] xl:max-w-[438px] text-[18px] text-[#0A2533]"
                    >{{ $t('Request') }}</p>
                </div>
                <div
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="400"
                    data-aos-duration="650"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    class="flex mx-auto mt-[20px] md:mx-0 gap-x-[14px] md:gap-x-[17px]"
                >
                    <button
                        class="text-[14px] leading-[15.26px] md:leading-[16.44px] font-semibold px-[20px] md:py-[12px] xl:py-[15px] text-white bg-black rounded-[8px]"
                    >{{ $t('Android') }}</button>
                    <button
                        class="text-[14px] leading-[16.44px] font-semibold px-[20px] py-[12px] xl:py-[15px] text-black bg-transparent border-[1px] border-black rounded-[8px]"
                    >{{ $t('Iphone') }}</button>
                </div>
            </div>
            <div
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="350"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                class="relative mx-auto md:mx-0 mt-[52px] md:mt-0 z-50"
            >
                <img
                    src="/Rectangle 12.png"
                    class="object-cover lg:w-[350.31px] lg:h-[613.15px] w-[277.06px] h-[460.16px] mx-auto md:mx-0 md:mt-0"
                    alt
                />
            </div>
        </div>
        <footer-2 />
    </div>
</template>

<script>
import AOS from '@/mixins/aos'
import Footer2 from '~/components/Footer2.vue'
import Paid from '~/components/Paid.vue'
import Design from '~/components/Design.vue'
import Infhead from '~/components/Infhead.vue'
import Seller from '~/components/Seller.vue'
export default {
    components: { Footer2, Design, Paid, Infhead, Seller },
    mixins: [AOS],
    data() {
        return {
            infe: false
        }
    },
}
</script>
<style>
html {
    font-family: "Raleway", sans-serif;
}
</style>
