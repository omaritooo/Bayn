<template >
  <div
    :class="$i18n.locale == 'ar' ? 'font-arabic' : ''"
    :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
    class="bg-white !overflox-x-hidden"
  >
    <div class="relative">
      <div class="z-10 gradient"></div>
      <Navbar class="relative z-20" />
      <Header class="relative z-20" />
    </div>
    <!-- <Live /> -->
    <Commerce />
    <Videos />
    <Shoppable />
    <Hire />
    <!-- <Customers class="relative z-40" /> -->
    <!-- <Reach class="relative z-30" /> -->
    <Platform />
    <!-- <Business />
    <Influencer />-->
    <Improve />
    <Business2 />
    <Footer />
  </div>
</template>

<script>
import Commerce from "~/components/Commerce.vue";
import Videos from "~/components/Busine/Videos.vue";
import Shoppable from "~/components/Busine/Shoppable.vue";
import Hire from "~/components/Busine/Hire.vue";
import Improve from "~/components/Busine/Improve.vue";
import Business2 from "~/components/Busine/Business2.vue";
export default { components: { Commerce, Videos, Shoppable, Hire, Improve, Business2 } }
</script>
<style >
html {
  font-family: "Raleway", sans-serif;
}
.gradient {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;

  background: radial-gradient(
    88.65% 49.53% at 70.42% 5.43%,
    #d5e6ff 0%,
    #ffffff 100%
  );
}

@media screen and (min-width: 320px) and (max-width: 480px) {
  .gradient {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;

    background: radial-gradient(
      88.65% 49.53% at 70.42% 5.43%,
      #d5e6ff 0%,
      #ffffff 100%
    );
  }
}

@media screen and (min-width: 481px) and (max-width: 768px) {
  .gradient {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;

    background: radial-gradient(
      88.65% 49.53% at 70.42% 5.43%,
      #d5e6ff 0%,
      #ffffff 100%
    );
  }
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .gradient {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;

    background: radial-gradient(
      88.65% 49.53% at 70.42% 5.43%,
      #d5e6ff 0%,
      #ffffff 100%
    );
  }
}
@media screen and (min-width: 1025px) and (max-width: 1200px) {
  .gradient {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;

    background: radial-gradient(
      88.65% 49.53% at 70.42% 5.43%,
      #d5e6ff 0%,
      #ffffff 100%
    );
  }
}
</style>

