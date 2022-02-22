<template>
  <div class="bg-white">
    <div class="">
      <div class="z-20 gradient"></div>
      <Navbar class="relative z-30" />
      <Head class="relative z-30" />
    </div>
    <Sell />
    <Videos />
    <Shoppable />
    <Hire />
    <Improve />
    <Business2 />
    <Footer />
  </div>
</template>

<script>
import Business2 from '../components/Busine/Business2.vue'
import Improve from '../components/Busine/Improve.vue'
import Hire from '../components/Busine/Hire.vue'
import Shoppable from '../components/Busine/Shoppable.vue'
import Videos from '../components/Busine/Videos.vue'
import Sell from '../components/Busine/Sell.vue'
import Head from '../components/Busine/Head.vue'

export default {
  components: { Business2, Improve, Hire, Shoppable, Videos, Sell, Head },
}
</script>

<style>
html {
  font-family: 'Raleway', sans-serif;
}
.gradient {
  position: absolute;
  width: 100%;
  height: 887.07px;
  left: 0px;
  top: 0px;

  background: radial-gradient(
    88.65% 49.53% at 70.42% 5.43%,
    #d5e6ff 0%,
    #ffffff 100%
  );
}
</style>