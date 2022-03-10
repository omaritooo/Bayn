<template>
    <div class="mx-auto gradiento"></div>
</template>

<script>
export default {

}
</script>

<style scoped>
.gradiento {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    filter: blur(14px);
    border-radius: 50%;
    background: radial-gradient(circle at center, #d5e6ff 0%, #ffffff 100%);
    background-position: left;
    z-index: 10;
}
</style>