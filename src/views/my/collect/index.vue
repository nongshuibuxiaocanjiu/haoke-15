<template>
  <div class="collections-container">
    <van-nav-bar title="收藏列表" @click-left="BackToPage">
      <template #left>
        <van-icon name="arrow-left" class="left-arrow" />
      </template>
    </van-nav-bar>
    <!-- <div class="main"
     @click="onCollectList"
     v-for="(item,index) in allCollect"
     :key="index"
     
     >
      <div class="left">
        <img :src="item.houseImg" alt="" />
      </div>
      <div class="right">
        <h1>{{item.title}}</h1>
        <span>{{item.desc}}</span>
        <i>{{item.tags[0]}}</i>
        <p><i>{{item.price}}</i> 元/月</p>
      </div>
    </div> -->
    <collectItem
      v-for="(collect, index) in allCollect"
      :key="index"
      :collect="collect"
    ></collectItem>
  </div>
</template>
<!-- 我的收藏 -->
<script>
import { getCollectList } from '@/apis/user'
import collectItem from '@/components/collect-item'
export default {
  name: 'collections-container',
  data () {
    return {
      houseList: {},

      allCollect: []
    }
  },
  components: {
    collectItem
  },
  created () {
    this.onCollectList()
  },
  methods: {
    BackToPage () {
      this.$router.back()
    },
    async onCollectList () {
      try {
        const { data } = await getCollectList()
        // console.log(data)
        this.allCollect = data.body
        console.log(this.allCollect)
      } catch (err) {
        console.log('请求失败', err)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.collections-container {
  /deep/ .van-nav-bar__content {
    background-color: #45b974;
  }
  /deep/.van-nav-bar__title {
    color: #fff;
  }
  /deep/.left-arrow {
    color: #fff;
  }
}
</style>
