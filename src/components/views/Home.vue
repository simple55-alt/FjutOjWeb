<template>
  <div class="index-body">
    <div class="header-announcement">
      <Carousel></Carousel>
    </div>
    <div class="home-info-body">
      <HomeInfo></HomeInfo>
    </div>
    <div class="border-body">
      <Border></Border>
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/views/Home/CarouselGraph'
import HomeInfo from '@/components/views/Home/HomeInfo'
import Border from '@/components/views/Home/Border'

export default {
  components: {
    Carousel,
    HomeInfo,
    Border
  }

}
</script>

<style>
.index-body {
  width: 80%;
  margin: auto;
  min-height: 800px;
}

.header-announcement {
  width: 100%;
  margin: auto;
  margin-bottom: 20px;
}

.home-info-body {
  float: left;
  margin-bottom: 10px;
  width: 70%;
}

.border-body {
  float: right;
  width: 28%;
  margin-left: 20px;
  min-height: 400px;
}
</style>
