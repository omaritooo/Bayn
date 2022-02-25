<template>
  <div class="bg-white overflox-x-hidden">
    <div class="relative">
      <div class="z-10 gradient"></div>
      <Navbar class="relative z-30" />
      <Header class="relative z-30" />
    </div>
    <Live />
    <Customers class="relative z-40" />
    <Reach class="relative z-30" />
    <Platform />
    <Business />
    <Influencer />
    <Footer />
  </div>
</template>

<script>
export default {}
</script>
<style >
html {
  font-family: "Raleway", sans-serif;
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

