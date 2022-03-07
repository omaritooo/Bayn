<template>
    <div class="mx-auto gradiento"></div>
</template>

<script>
export default {

}
</script>

<style scoped>
.gradiento {
    @import mx-auto;
    width: 600px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgb(255, 255, 255);
    background: radial-gradient(
        21.73% 46.26% at 66% 52.48%,
        #d5e6ff 0%,
        #ffffff 100%
    );
    z-index: 10;
}
</style>