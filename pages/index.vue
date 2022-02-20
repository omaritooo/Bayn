<template>
  <div class="overflox-x-hidden bg-[#E5E5E5]">
    <div class="relative overflow-x-hidden overflow-y-hidden">
      <div class="z-10 gradient"></div>
      <Navbar class="relative z-30" />
      <Header class="relative z-30" />
    </div>
    <Live />
    <Customers />
    <Reach />
    <Platform />
    <Business />
    <Influencer />
    <Footer />
  </div>
</template>

<script>
export default {}
</script>
<style scoped>
html {
  font-family: "Raleway", sans-serif;
}
.gradient {
  position: absolute;
  width: 1910px;
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

