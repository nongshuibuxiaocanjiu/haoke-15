<template>
  <div class="search-container">
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
      :height="210"
    >
      <van-swipe-item>
        <img src="http://liufusong.top:8080/img/swiper/1.png" alt="" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="http://liufusong.top:8080/img/swiper/2.png" alt="" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="http://liufusong.top:8080/img/swiper/3.png" alt="" />
      </van-swipe-item>
    </van-swipe>
    <div class="header">
      <div class="header-main">
        <van-cell-group>
          <van-field
            v-model="value1"
            label="文本"
            placeholder="显示图标"
          />
          
        </van-cell-group>
      </div>
      <i class="toutiao toutiao-"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search-container',
  data () {
    return {
      value1: ''
    }
  }
}
</script>

<style lang="less" scoped>
.search-container {
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px; // line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
    img {
      width: 100%;
      height: 100%;
    }
  }
  /deep/ .header-cell {
    position: fixed;
    top: 30px;
    left: 0;
  }
  .header {
    display: flex;
    padding: 0 10px;
    position: fixed;
    top: 0;
    left: 20px;
  }
}
</style>
