<template>
  <div class="rent-container">
    <van-nav-bar title="房屋管理" @click-left="BackToPage">
      <template #left>
        <van-icon name="arrow-left" class="left-arrow" />
      </template>
    </van-nav-bar>
    <collectItem
      v-for="(item, index) in list"
      :key="index"
      @click="gethouses"
      :collect="item"
    >
    </collectItem>
  </div>
</template>
<!-- 我的出租 -->
<script>
import collectItem from '@/components/collect-item'
import { gethouses } from '@/apis/area'

export default {
  name: 'rent-container',
  data () {
    return {
      list: []
    }
  },
  methods: {
    BackToPage () {
      this.$router.back()
    },
    async gethouses () {
      const { data } = await gethouses()
      console.log(data)
      this.list = data.body.list
      console.log(this.list)
    }
  },
  components: {
    collectItem
  },
  created () {
    this.gethouses()
  }
}
</script>

<style lang="less" scoped>
.rent-container {
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
