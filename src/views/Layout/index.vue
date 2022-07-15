<template>
  <div class="layout-container">
    <router-view></router-view>

    <!-- 标签导航栏 -->
    <van-tabbar class="layout-tabbar"  route>
      <van-tabbar-item to="/home">
        <i slot="icon" class="toutiao toutiao-shouye"></i>
        <span class="text">首页</span>
      </van-tabbar-item>

      <van-tabbar-item to="/search">
        <i slot="icon" class="toutiao toutiao-sousuo"></i>
        <span class="text">找房</span>
      </van-tabbar-item>
      <van-tabbar-item to="/cs">
        <i slot="icon" class="toutiao toutiao-yuedu"></i>
        <span class="text">资讯</span>
      </van-tabbar-item>
      <van-tabbar-item to="/my">
        <i slot="icon" class="toutiao toutiao-wode"></i>
        <span class="text">我的</span>
      </van-tabbar-item>
    </van-tabbar>

    <!-- /标签导航栏 -->
  </div>
</template>

<script>
export default {
  name: 'layout'
}
</script>

<style lang="less" scoped>
.layout-container {
  .layout-tabbar {
    i.toutiao {
      font-size: 40px;
    }
    span.text {
      font-size: 20px;
    }
  }
}
</style>
