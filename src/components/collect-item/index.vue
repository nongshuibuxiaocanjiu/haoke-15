<template>
  <div class="main" @click="goTOxiangq">
    <div class="left">
      <img :src="collect.houseImg" alt="" />
    </div>
    <div class="right">
      <h1>{{ collect.title }}</h1>
      <span>{{ collect.desc }}</span>
      <i>{{ collect.tags[0] }}</i>
      <p>
        <i>{{ collect.price }}</i> 元/月
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    collect: {
      type: Object,
      required: true
    }
  },
  methods: {
    goTOxiangq () {
      console.log(11)
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  display: flex;
  height: 240px;
  position: relative;
  box-sizing: border-box;
  justify-content: space-around;
  padding-top: 36px;
  border-bottom: 2px solid #e5e5e5;
  .left {
    width: 214px;
    height: 160px;
    background-color: pink;
    img {
      width: 100%;
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    //   overflow: hidden;
    width: 100%;
    height: 85%;
    //   line-height: 44px;
    margin-left: 20px;
    //   background-color: blue;
    h1 {
      font-size: 14px;
    }
    span {
      font-size: 12px;
      margin-bottom: 5px;
    }
    i {
      font-size: 12px;

      // background-color: #e4f5f8;
    }
    p {
      font-size: 15px;
      color: red;
      i {
        font-size: 30px;
      }
    }
  }
}
</style>
