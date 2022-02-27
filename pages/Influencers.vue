<template>
    <div>
        <div class="relative">
            <div class="gradient"></div>
            <Navbar class="relative z-30" />
            <Infhead class="relative z-30" />
        </div>
        <Success />
        <Shoppable />
        <Commerce />
        <Paid />
        <Design />
        <div
            class="flex justify-start w-full px-2 md:flex-row flex-col md:gap-x-[59.8px] xl:gap-x-[92.7px] md:px-[34px] relative xl:px-[231px] py-[7.75rem] 2xl:px-[470px]"
        >
            <div class="grad"></div>
            <div class="relative z-50 flex flex-col text-center h-fit w-fit md:text-left">
                <!-- <h1 class="font-[600] md:text-[18px] w-full xl:text-[28px] text-[#D8315B]">FOR INFLUENCER</h1> -->
                <h2
                    class="xl: font-[600] md:leading-[45px] xl:leading-[60px] md:text-[38px] xl:text-[48px] text-[#0A2533]"
                >Using bayn is Easy</h2>
                <p
                    class="xl:mt-[20px] font-[500] md:mt-[10px] leading-[44px] md:text-[22px] xl:text-[29px] text-[#0A2533] xl:max-w-[497.92px] md:max-w-[366.56px]"
                >We’ve designed Bayn so that anyone can do it. Literally anyone.</p>
                <div class="flex flex-col w-fit md:gap-y-[7px] xl:gap-y-[10px] mt-[20px]">
                    <p
                        class="font-[500] md:leading-[32px] xl:leading-[32px] md:max-w-[364.57px] lg:max-w-[479px] text-[18px] text-[#0A2533]"
                    >1 - Download the app & request your business account</p>
                    <p
                        class="font-[500] leading-[32px] md:max-w-[300px] xl:max-w-[300px] text-[18px] text-[#0A2533]"
                    >2 - Get approved by bayn in no time</p>
                    <p
                        class="font-[500] leading-[32px] md:max-w-[364.57px] xl:max-w-[438px] text-[18px] text-[#0A2533]"
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
            <div
                class="relative w-[277.06px] h-[460.16px] mx-auto md:mx-0 mt-[52px] md:mt-0 xl:w-[350.31px] xl:h-[613.15px] z-50"
            >
                <img src="/Rectangle 12.png" class="object-cover mx-auto md:mx-0 md:mt-0" alt />
            </div>
        </div>
        <footer-2 />
    </div>
</template>

<script>
import Footer2 from '~/components/Footer2.vue'
import Paid from '~/components/Paid.vue'
import Design from '~/components/Design.vue'
import Infhead from '~/components/Infhead.vue'
export default {
    components: { Footer2, Design, Paid, Infhead },
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
