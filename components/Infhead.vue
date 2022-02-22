<template>
    <div class="relative overflow-x-hidden">
        <!-- <div class="text-[160px] leading-[73px]">
            <div class="track">Bayn For Influencers, Bayn for Influencer,</div>
            <div class="track2">Bayn for Influencer, Bayn for Influencer,</div> 
        </div>-->
        <Marquee
            class="absolute z-10 top-[10%] max-w-[1920px] text-[160px] h-[279.81px]"
            :duration="15"
            :repeat="3"
        >
            <span
                class="text-[160px] text-[#0A2533] w-[2159.4px] overflow-x-hidden h-[179.81px] py-2 leading-[73px]"
            >Bayn For Influencers, Bayn for Influencer,</span>
        </Marquee>
        <div class="px-[355px] relative z-30 flex flex-col gap-y-[96px] pt-[14px] pb-[142px]">
            <div class="flex gap-x-[202px] pt-[20px] pb-[64px]">
                <div class="flex mb-[85px] flex-col self-end">
                    <p
                        class="max-w-[541.68px] font-[500] text-[#394452] text-[18px] leading-[35px]"
                    >
                        Join our network of
                        live commerce influencers
                        , Receive requests from stores and earn rewards
                        while presenting the products you promote
                    </p>
                    <div class="flex gap-x-[17px] mt-[27px]">
                        <button
                            class="text-[14px] leading-[16.44px] font-[500] px-[20px] py-[15px] text-white bg-black rounded-[8px]"
                        >Get Bayn for Android</button>
                        <button
                            class="text-[14px] leading-[16.44px] font-[500] px-[20px] py-[15px] text-black bg-transparent border-[1px] border-black rounded-[8px]"
                        >Get Bayn for Iphone</button>
                    </div>
                    <svg
                        class="absolute top-[42.5%] left-[38%]"
                        width="187"
                        height="76"
                        viewBox="0 0 187 76"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.20337 68.7524C3.93561 78.12 148.694 62.9491 112.914 38.5432C54.752 -1.13001 144.064 19.4083 176.54 10.2211"
                            stroke="black"
                            stroke-width="3"
                            stroke-linecap="round"
                        />
                        <path
                            d="M164.701 20.2085C168.636 17.1046 177.262 10.8418 180.279 10.6215"
                            stroke="black"
                            stroke-width="3"
                            stroke-linecap="round"
                        />
                        <path
                            d="M180.334 10.5822C173.858 9.55818 169.316 8.23511 164.191 2.99596"
                            stroke="black"
                            stroke-width="3"
                            stroke-linecap="round"
                        />
                    </svg>
                </div>
                <div class="relative self-end">
                    <div class="absolute glass top-1/3 border-[1px] border-white -left-1/4">
                        <div class="flex justify-between w-full">
                            <svg
                                class="my-auto"
                                width="69"
                                height="26"
                                viewBox="0 0 69 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M67.0081 11.4041C63.2639 11.2096 60.2004 9.44287 57.6556 7.62748C57.2504 7.33572 56.8128 7.01154 56.3751 6.68736C55.5971 6.12005 54.8353 5.53655 54.2356 5.16375C53.7493 4.85578 53.0361 4.45056 52.2419 4.28847C51.3018 4.07775 49.9888 4.15879 48.9515 5.22857C48.1573 6.05522 47.9303 7.04396 47.8655 7.74094C47.8007 8.43792 47.8817 9.11869 47.979 9.686C48.1573 10.7234 48.5301 11.9066 48.838 12.9116C48.8542 12.9764 48.8867 13.0574 48.9029 13.1223C49.2595 14.2731 49.5512 15.2781 49.7133 16.1371C49.7619 16.3803 49.535 16.5748 49.3081 16.5099C48.8218 16.3803 48.2221 16.1695 47.4603 15.8616C44.7372 14.7107 41.2523 12.6684 37.5081 10.464L37.3946 10.3992C33.7314 8.24342 29.8251 5.94176 26.6157 4.64506C25.0435 4.01291 23.3415 3.47803 21.7693 3.47803C20.9588 3.47803 20.0349 3.62389 19.1597 4.09395C18.2358 4.59642 17.5388 5.35825 17.1173 6.31457C16.4528 7.78958 16.5825 9.36182 16.7608 10.4964C16.9391 11.6148 17.2794 12.7981 17.5712 13.7706C17.5874 13.8193 17.6036 13.8679 17.6198 13.9165C17.6522 14.0138 17.6847 14.111 17.7009 14.2083C17.7495 14.4028 17.555 14.5649 17.3767 14.4676C17.3281 14.4352 17.2794 14.419 17.2308 14.3866C16.777 14.1272 16.2583 13.8192 15.6586 13.4951C12.3357 11.6311 7.52173 9.26458 1.36237 9.13491H0.357422V14.7107H1.26511C6.06293 14.8242 9.92063 16.6558 13.0003 18.3739C13.3893 18.5847 13.7945 18.8278 14.1998 19.0547C15.2695 19.6706 16.3393 20.2866 17.1984 20.6756C17.8143 20.9511 18.641 21.2591 19.5487 21.2915C20.6022 21.324 21.7531 20.9836 22.6121 19.9786C23.8602 18.536 23.763 16.7044 23.6333 15.7157C23.4874 14.6135 23.147 13.3978 22.8553 12.4091L22.8391 12.3605C22.5311 11.2745 22.2718 10.383 22.1421 9.60495C22.1097 9.39424 22.0935 9.23215 22.0773 9.10248C22.6121 9.16732 23.4226 9.39424 24.5572 9.84809C27.3127 10.9665 30.8462 13.025 34.6229 15.2456C34.7363 15.3105 34.866 15.3915 34.9795 15.4564C38.5292 17.5473 42.2734 19.7517 45.3369 21.0484C46.893 21.6968 48.5625 22.2478 50.1023 22.2965C50.8965 22.3127 51.8204 22.1992 52.6957 21.7616C53.6358 21.2915 54.349 20.5135 54.7705 19.541C55.435 18.0173 55.2729 16.3478 55.0622 15.1808C54.8839 14.2245 54.6084 13.2195 54.349 12.3118C54.3328 12.247 54.4139 12.1822 54.4625 12.2308C57.2504 14.2083 61.3675 16.7369 66.6839 16.9962C67.2026 17.0286 67.6727 17.0286 68.0293 17.0124V11.4366C67.8024 11.4203 67.4296 11.4204 67.0081 11.4041ZM18.2682 16.8179C18.2682 16.8179 18.2682 16.8017 18.2682 16.7855C18.2682 16.8179 18.2682 16.8179 18.2682 16.8179Z"
                                    fill="#1F1F1F"
                                />
                                <path
                                    d="M27.1499 25.9916C28.8843 25.9916 30.2782 24.5652 30.2782 22.8146C30.2782 21.0479 28.8681 19.6377 27.1499 19.6377C25.4318 19.6377 24.0216 21.0641 24.0216 22.8146C24.0054 24.5652 25.4156 25.9916 27.1499 25.9916Z"
                                    fill="#1F1F1F"
                                />
                                <path fill="#1F1F1F" />
                                <path
                                    d="M64.9488 25.9916C66.6831 25.9916 68.0771 24.5652 68.0771 22.8146C68.0771 21.0479 66.6669 19.6377 64.9488 19.6377C63.2144 19.6377 61.8205 21.0641 61.8205 22.8146C61.8042 24.5652 63.2144 25.9916 64.9488 25.9916Z"
                                    fill="#1F1F1F"
                                />
                                <path
                                    d="M34.476 25.9916C36.2103 25.9916 37.6043 24.5652 37.6043 22.8146C37.6043 21.0641 36.1941 19.6377 34.476 19.6377C32.7416 19.6377 31.3477 21.0641 31.3477 22.8146C31.3477 24.5652 32.7578 25.9916 34.476 25.9916Z"
                                    fill="#1F1F1F"
                                />
                            </svg>
                            <div>now</div>
                        </div>
                        <div
                            class="font-[600] mt-[13px] text-[14px] leading-[16.94px] text-black"
                        >New Live Stream Request</div>
                        <div
                            class="font-[400] max-w-[324.36px] mt-[4px] text-[14px] leading-[16.94px] text-black"
                        >H&M Stores KSA send you a live stream new agreement to check details</div>
                    </div>
                    <div class="absolute glass bottom-[15%] border-[1px] border-white -right-1/4">
                        <div class="flex justify-between w-full">
                            <svg
                                class="my-auto"
                                width="69"
                                height="26"
                                viewBox="0 0 69 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M67.0081 11.4041C63.2639 11.2096 60.2004 9.44287 57.6556 7.62748C57.2504 7.33572 56.8128 7.01154 56.3751 6.68736C55.5971 6.12005 54.8353 5.53655 54.2356 5.16375C53.7493 4.85578 53.0361 4.45056 52.2419 4.28847C51.3018 4.07775 49.9888 4.15879 48.9515 5.22857C48.1573 6.05522 47.9303 7.04396 47.8655 7.74094C47.8007 8.43792 47.8817 9.11869 47.979 9.686C48.1573 10.7234 48.5301 11.9066 48.838 12.9116C48.8542 12.9764 48.8867 13.0574 48.9029 13.1223C49.2595 14.2731 49.5512 15.2781 49.7133 16.1371C49.7619 16.3803 49.535 16.5748 49.3081 16.5099C48.8218 16.3803 48.2221 16.1695 47.4603 15.8616C44.7372 14.7107 41.2523 12.6684 37.5081 10.464L37.3946 10.3992C33.7314 8.24342 29.8251 5.94176 26.6157 4.64506C25.0435 4.01291 23.3415 3.47803 21.7693 3.47803C20.9588 3.47803 20.0349 3.62389 19.1597 4.09395C18.2358 4.59642 17.5388 5.35825 17.1173 6.31457C16.4528 7.78958 16.5825 9.36182 16.7608 10.4964C16.9391 11.6148 17.2794 12.7981 17.5712 13.7706C17.5874 13.8193 17.6036 13.8679 17.6198 13.9165C17.6522 14.0138 17.6847 14.111 17.7009 14.2083C17.7495 14.4028 17.555 14.5649 17.3767 14.4676C17.3281 14.4352 17.2794 14.419 17.2308 14.3866C16.777 14.1272 16.2583 13.8192 15.6586 13.4951C12.3357 11.6311 7.52173 9.26458 1.36237 9.13491H0.357422V14.7107H1.26511C6.06293 14.8242 9.92063 16.6558 13.0003 18.3739C13.3893 18.5847 13.7945 18.8278 14.1998 19.0547C15.2695 19.6706 16.3393 20.2866 17.1984 20.6756C17.8143 20.9511 18.641 21.2591 19.5487 21.2915C20.6022 21.324 21.7531 20.9836 22.6121 19.9786C23.8602 18.536 23.763 16.7044 23.6333 15.7157C23.4874 14.6135 23.147 13.3978 22.8553 12.4091L22.8391 12.3605C22.5311 11.2745 22.2718 10.383 22.1421 9.60495C22.1097 9.39424 22.0935 9.23215 22.0773 9.10248C22.6121 9.16732 23.4226 9.39424 24.5572 9.84809C27.3127 10.9665 30.8462 13.025 34.6229 15.2456C34.7363 15.3105 34.866 15.3915 34.9795 15.4564C38.5292 17.5473 42.2734 19.7517 45.3369 21.0484C46.893 21.6968 48.5625 22.2478 50.1023 22.2965C50.8965 22.3127 51.8204 22.1992 52.6957 21.7616C53.6358 21.2915 54.349 20.5135 54.7705 19.541C55.435 18.0173 55.2729 16.3478 55.0622 15.1808C54.8839 14.2245 54.6084 13.2195 54.349 12.3118C54.3328 12.247 54.4139 12.1822 54.4625 12.2308C57.2504 14.2083 61.3675 16.7369 66.6839 16.9962C67.2026 17.0286 67.6727 17.0286 68.0293 17.0124V11.4366C67.8024 11.4203 67.4296 11.4204 67.0081 11.4041ZM18.2682 16.8179C18.2682 16.8179 18.2682 16.8017 18.2682 16.7855C18.2682 16.8179 18.2682 16.8179 18.2682 16.8179Z"
                                    fill="#1F1F1F"
                                />
                                <path
                                    d="M27.1499 25.9916C28.8843 25.9916 30.2782 24.5652 30.2782 22.8146C30.2782 21.0479 28.8681 19.6377 27.1499 19.6377C25.4318 19.6377 24.0216 21.0641 24.0216 22.8146C24.0054 24.5652 25.4156 25.9916 27.1499 25.9916Z"
                                    fill="#1F1F1F"
                                />
                                <path fill="#1F1F1F" />
                                <path
                                    d="M64.9488 25.9916C66.6831 25.9916 68.0771 24.5652 68.0771 22.8146C68.0771 21.0479 66.6669 19.6377 64.9488 19.6377C63.2144 19.6377 61.8205 21.0641 61.8205 22.8146C61.8042 24.5652 63.2144 25.9916 64.9488 25.9916Z"
                                    fill="#1F1F1F"
                                />
                                <path
                                    d="M34.476 25.9916C36.2103 25.9916 37.6043 24.5652 37.6043 22.8146C37.6043 21.0641 36.1941 19.6377 34.476 19.6377C32.7416 19.6377 31.3477 21.0641 31.3477 22.8146C31.3477 24.5652 32.7578 25.9916 34.476 25.9916Z"
                                    fill="#1F1F1F"
                                />
                            </svg>
                            <div>now</div>
                        </div>
                        <div
                            class="font-[600] mt-[13px] text-[14px] leading-[16.94px] text-black"
                        >New Live Stream Request</div>
                        <div
                            class="font-[400] max-w-[324.36px] mt-[4px] text-[14px] leading-[16.94px] text-black"
                        >H&M Stores KSA send you a live stream new agreement to check details</div>
                    </div>
                    <!-- <span>H&M Stores KSA send you a live stream new agreement to check details</span> -->

                    <img src="/Rectangle 1.png" />
                </div>
            </div>
            <h1 class="font-[600] text-[90px] leading-[120px] max-w-[751px] text-[#0A2533]">
                Work that fits into
                your lifestyle
            </h1>
        </div>
        <div class="flex relative justify-center gap-x-[120px]">
            <div class="gradie"></div>

            <div class="relative z-30">
                <img class="relative z-30" src="/Rectangle 8.png" alt />
            </div>
            <div
                class="mt-[91px] relative z-30 max-w-[564px] flex flex-col font-[500] text-[#0A2533] text-[30px] leading-[73px]"
            >
                <svg
                    class="absolute right-[28%] top-12"
                    width="47"
                    height="51"
                    viewBox="0 0 47 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M29.4226 33.5832C24.8723 35.6848 15.3806 40.5353 13.817 43.1248"
                        stroke="black"
                        stroke-width="3"
                        stroke-linecap="round"
                    />
                    <path
                        d="M13.757 43.156C15.7788 36.9195 16.6579 32.2709 14.3103 25.328"
                        stroke="black"
                        stroke-width="3"
                        stroke-linecap="round"
                    />
                    <path
                        d="M24.0293 1.52344C25.2769 8.37421 25.3978 25.5372 15.9004 39.3827"
                        stroke="black"
                        stroke-width="3"
                        stroke-linecap="round"
                    />
                </svg>
                <svg
                    class="absolute top-[19%] right-[19%]"
                    width="45"
                    height="50"
                    viewBox="0 0 45 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M32.5188 23.7247C32.0891 28.7185 31.5983 39.3664 33.0725 42.0078"
                        stroke="black"
                        stroke-width="3"
                        stroke-linecap="round"
                    />
                    <path
                        d="M33.0698 42.0754C28.655 37.2287 25.053 34.1614 17.8592 32.7597"
                        stroke="black"
                        stroke-width="3"
                        stroke-linecap="round"
                    />
                    <path
                        d="M2 12.521C8.56862 14.8325 23.5356 23.233 30.8547 38.3437"
                        stroke="black"
                        stroke-width="3"
                        stroke-linecap="round"
                    />
                </svg>
                <svg
                    class="absolute bottom-[53%] -right-8"
                    width="43"
                    height="40"
                    viewBox="0 0 43 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M4.56232 14.9204C6.97784 13.6414 11.6674 9.08092 11.1016 1.07117M14.0048 21.1377C20.5108 16.951 27.5611 13.1528 32.6861 12.3553"
                        stroke="black"
                        stroke-width="3"
                    />
                    <path
                        d="M16.5092 32.377C19.1583 30.6034 26.4837 28.1344 34.5925 32.447"
                        stroke="black"
                        stroke-width="3"
                    />
                </svg>

                <span>
                    Your remarkable content
                    <span class="text-[40px] font-[600]">+</span>
                </span>
                <span>
                    World-famous products
                    <span class="text-[40px] font-[600]">+</span>
                </span>
                <span>
                    Our leading live commerce platform
                    <span class="text-[40px] font-[600]">=</span>
                </span>
                <span>The future of ecommerce and influence</span>

                <div class="flex gap-x-[17px] mt-[27px]">
                    <button
                        class="text-[14px] leading-[16.44px] font-[500] px-[20px] py-[15px] text-white bg-black rounded-[8px]"
                    >Get Bayn for Android</button>
                    <button
                        class="text-[14px] leading-[16.44px] font-[500] px-[20px] py-[15px] text-black bg-transparent border-[1px] border-black rounded-[8px]"
                    >Get Bayn for Iphone</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

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
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 20px;
}
.gradie {
    position: absolute;
    width: 100%;
    z-index: 20;
    height: 100%;
    left: 0px;
    top: 0;

    background: radial-gradient(
        21.73% 46.26% at 66% 52.48%,
        #d5e6ff 0%,
        #ffffff 100%
    );
    transform: matrix(-1, 0, 0, 1, 0, 0);
}
</style>