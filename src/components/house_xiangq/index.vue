<template>
  <div class="house_xq-container">
    <div class="xunhuan">
      <van-nav-bar :title="this.list.community" @click-left="BackToPage">
        <template #left>
          <van-icon name="arrow-left" class="left-arrow" />
        </template>
      </van-nav-bar>
      <!-- 头部导航 -->
      <!-- <div>{{ $store.state.list }}</div> -->

      <div class="header">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" v-for="(item,index) in list.houseImg" :key="index"> 
          <van-swipe-item class="photo">
            <img :src="`http://liufusong.top:8080${item}`" alt="">
          </van-swipe-item>
          
        </van-swipe>
        <div class="h_main">
          <div class="h_libian top">
            <p>{{list.title}}</p>
            <span>{{list.tags[0]}}</span>
          </div>
        </div>
        <div class="h_main">
          <div class="h_libian mid">
            <div class="mid_mid">
              <h1>{{list.price}} /月</h1>
              <span>租金</span>
            </div>
            <div class="mid_mid">
              <h1>{{list.roomType}}</h1>
              <span>房型</span>
            </div>
            <div class="mid_mid">
              <h1>{{list.size}}平米</h1>
              <span>面积</span>
            </div>
          </div>
        </div>
        <div class="h_main">
          <div class="h_libian bottom">
            <div class="btn_btn">
              <p>装修: 精装</p>
              <p>楼层: {{list.floor}}</p>
            </div>
            <div class="btn_btn">
              <p>朝向: {{list.oriented[0]}}</p>
              <p>类型: 普通住宅</p>
            </div>
          </div>
        </div>
      </div>
      <div class="main">
        <div class="top">
          <p>小区：天山星城</p>
        </div>
        <div class="min">
          <img src="" alt="" />
        </div>
        <div class="bottom">
          <div class="by_top">
            <h1>房屋配套</h1>
          </div>
          <div class="bt_bottom">
            <van-grid :column-num="3">
              <van-grid-item
                v-for="value in 6"
                :key="value"
                icon="photo-o"
                text="文字"
              />
            </van-grid>
          </div>
        </div>
      </div>
      <div class="gaikuang">
        <div class="top">
          <h1>房源概况</h1>
        </div>
        <div class="bottom">
          <div class="bt_top">
            <div class="bt_top_img">
              <img src="@/assets/微信图片_20220714122756.png" alt="" />
            </div>
            <div class="bt_main">
              <p>王女士</p>
              <span>已认证房主</span>
              <!-- <div>{{ $store.state.Uid }}</div> -->
            </div>
            <div class="bt_buttom">
              <van-button plain type="primary">发送消息</van-button>
            </div>
          </div>

          <div class="bt_bottom">
            <p>
              1.周边配套齐全,地铁四号线陶然亭站,交通便利,公交云集,距离北京南站、西站都很近距离。2.小区规模大。配套全年,幼儿园,体育场,游泳馆,养老院,小学。3.人车分流,环境优美。4.精装两居室,居家生活方便,还有一个小书房,看房随时联系。
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部导航 -->
    <div class="footer">
      <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o">收藏</van-tabbar-item>
        <van-tabbar-item>在线咨询</van-tabbar-item>
        <van-tabbar-item>电话咨询</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<!-- 房屋详情 -->
<script>
// import { gethousesdata } from '@/apis/area'
export default {
  props: {
    houseList: Object
  },
  data () {
    return {
      active: 0,
      list: []
    }
  },
  created () {
    console.log(this.$store.state.list)
    this.list = this.$store.state.list
  },
  methods: {
    BackToPage () {
      this.$router.back()
    }
  }
}
</script>

<style lang="less" scoped>
.house_xq-container {
  .xunhuan {
    margin-bottom: 100px;
  }
  /deep/ .van-nav-bar__content {
    background-color: #45b974;
  }
  /deep/.van-nav-bar__title {
    color: #fff;
  }
  /deep/.left-arrow {
    color: #fff;
  }
  .header {
    .my-swipe .van-swipe-item {
      color: #fff;
      font-size: 20px;
      line-height: 150px;
      height: 400px;
      text-align: center;
      background-color: #39a9ed;
    }
    .h_main {
      // background-color: pink;
      height: 180px;

      padding: 0 20px;
      .h_libian {
        height: 100%;
        border-bottom: 3px solid #ccc;
      }
      .top {
        p {
          font-size: 40px;
        }
        span {
          font-size: 30px;
          background-color: #e4f5f8;
          padding: 3px 20px;
        }
      }
      .mid {
        display: flex;
        .mid_mid {
          flex: 1;
          text-align: center;
          font-size: 30px;
          h1 {
            color: red;
            font-size: 40px;
          }
          span {
            color: #666;
          }
        }
      }
      .bottom {
        display: flex;
        .btn_btn {
          flex: 1;
          p {
            font-size: 28px;
            padding-left: 30px;
            // margin-top: 20px;
          }
        }
      }
    }
  }
  .main {
    .top {
      font-size: 30px;
      padding-left: 30px;
    }
    .min {
      width: 100%;
      height: 290px;
      background-color: pink;
      img {
        width: 100%;
      }
    }
    .bottom {
      .by_top {
        h1 {
          font-size: 35px;
        }
        border-bottom: 3px solid #ccc;
      }
    }
  }
  .gaikuang {
    //
    .top {
      border-bottom: 3px solid #ccc;
      margin-bottom: 20px;
      h1 {
        font-size: 35px;
      }
    }
    .bottom {
      .bt_top {
        display: flex;
        // margin: 0 auto;
        align-items: center;

        .bt_top_img {
          width: 100px;
          margin-right: 15px;
          img {
            width: 100%;
          }
        }
      }
      .bt_main {
        font-size: 30px;
        p {
          margin: 0;
        }
        span {
          color: red;
        }
      }
      .bt_buttom {
        position: relative;
        top: 0;
        right: -270px;
      }
    }
    .bt_bottom {
      p {
        font-size: 30px;
      }
    }
  }

  // 底部导航栏
  .footer {
    /deep/.van-tabbar-item__text {
      font-size: 30px;
    }
  }
  .photo{
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
