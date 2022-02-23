<template>
    <div
        class="flex px-2 md:flex-row flex-col gap-x-[50px] xl:justify-center md:justify-between xl:gap-x-[92.7px] py-[7.75rem] md:px-[34px] relative xl:px-[231px] 2xl:px-[470px]"
    >
        <div class="grad"></div>
        <div class="flex text-center md:text-left relative z-50 flex-col gap-y-[40px]">
            <h1
                v-if="inf"
                class="font-[600] md:text-[18px] xl:text-[28px] text-[#D8315B]"
            >FOR INFLUENCER</h1>
            <div class="flex flex-col">
                <h2
                    class="font-[600] md:leading-[45px] xl:leading-[60px] md:text-[38px] xl:text-[48px] text-[#0A2533]"
                >Using bayn is Easy</h2>
                <div class>
                    <p
                        class="font-[500] leading-[44px] md:text=[22px] xl:text-[29px] text-[#0A2533] max-w-[497.92px]"
                    >We’ve designed Bayn so that anyone can do it. Literally anyone.</p>
                </div>
                <div class="px-2 mx-auto text-left">
                    <p
                        class="font-[500] leading-[32px] md:max-w-[364.57px] xl:max-w-[459px] text-[18px] text-[#0A2533]"
                    >1 - Download the app & request your business account</p>
                    <p
                        class="font-[500] leading-[32px] md:max-w-[300px] xl:max-w-[300px] text-[18px] text-[#0A2533]"
                    >2 - Get approved by bayn in no time</p>
                    <p
                        class="font-[500] leading-[32px] md:max-w-[364.57px] xl:max-w-[438px] text-[18px] text-[#0A2533]"
                    >3 - Start receiving requests from stores and get paid</p>
                </div>
            </div>
            <div class="flex mx-auto md:mx-0 gap-x-[14px] md:gap-x-[17px]">
                <button
                    class="text-[14px] leading-[15.26px] md:leading-[16.44px] font-semibold px-[20px] py-[15px] text-white bg-black rounded-[8px]"
                >Get Bayn for Android</button>
                <button
                    class="text-[14px] leading-[16.44px] font-semibold px-[20px] py-[15px] text-black bg-transparent border-[1px] border-black rounded-[8px]"
                >Get Bayn for Iphone</button>
            </div>
        </div>
        <div class="relative z-50">
            <img
                src="/Rectangle 12.png"
                class="md:mx-0 mx-auto mt-[52px] md:mt-0 max-w-[277.06px] xl:max-h-[613.15px] md:max-h-[460.16px]"
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
            default: true
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