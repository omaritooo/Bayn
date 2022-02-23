<template>
    <div class="flex justify-center gap-x-[92.7px] py-[7.75rem] relative px-80">
        <div class="grad"></div>
        <div class="flex relative z-50 flex-col gap-y-[40px] w-fit">
            <h1 v-if="inf" class="font-[600] w-fit text-[28px] text-[#D8315B]">FOR INFLUENCER</h1>
            <div class="flex flex-col w-fit gap-y-[20px]">
                <h2 class="font-[600] text-[48px] w-fit text-[#0A2533]">Using bayn is Easy</h2>
                <div class="w-fit">
                    <p
                        class="font-[500] text-[29px] text-[#0A2533] max-w-[497.92px]"
                    >We’ve designed Bayn so that anyone can do it. Literally anyone.</p>
                </div>
                <p
                    class="font-[500] w-fit text-[18px] text-[#0A2533]"
                >1 - Download the app & request your business account</p>

                <p
                    class="font-[500] text-[18px] w-fit text-[#0A2533]"
                >2 - Get approved by bayn in no time</p>
                <p
                    class="font-[500] text-[18px] w-fit text-[#0A2533]"
                >3 - Start receiving requests from stores and get paid</p>
            </div>
            <div class="flex gap-x-[17px]">
                <button
                    class="text-[14px] leading-[16.44px] font-semibold px-[20px] py-[15px] text-white bg-black rounded-[8px]"
                >Get Bayn for Android</button>
                <button
                    class="text-[14px] leading-[16.44px] font-semibold px-[20px] py-[15px] text-black bg-transparent border-[1px] border-black rounded-[8px]"
                >Get Bayn for Iphone</button>
            </div>
        </div>
        <div class="relative z-50">
            <img src="/Rectangle 12.png" class="w-full h-full" alt />
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
</style>