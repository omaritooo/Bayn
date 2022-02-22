<template>
    <div class="bg-white">
        <Hire />
        <Improve />
        <Business2 />
        <Footer />
    </div>
</template>

<script>
import Business2 from "../components/Busine/Business2.vue";
import Improve from "../components/Busine/Improve.vue";
import Hire from "../components/Busine/Hire.vue";
export default {
    components: { Business2, Improve, Hire }
}
</script>

<style>
html {
    font-family: "Raleway", sans-serif;
}
</style>