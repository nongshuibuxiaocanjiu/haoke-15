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
            label="北京"
            placeholder="请输入小区或地址"
          >
            <template #left-icon>
              <span class="toutiao toutiao-xiajiantou"></span>
            </template>
          </van-field>
        </van-cell-group>
        <div>
          <span class="toutiao toutiao-ditu"></span>
        </div>
      </div>
      <div>
        <span class="toutiao toutiao-sousuo"></span>
      </div>
      <!-- <i class="toutiao toutiao-"></i> -->
    </div>
    <div class="main">
      <!--  -->
      <van-grid>
        <van-grid-item icon="photo-o" text="整租">
          <template #icon>
            <div class="toux">
              <span class="toutiao toutiao-shouye"></span>
            </div>
          </template>
        </van-grid-item>
        <van-grid-item icon="photo-o" text="合租">
          <template #icon>
            <div class="toux">
              <span class="toutiao toutiao-wode"></span>
            </div>
          </template>
        </van-grid-item>

        <van-grid-item icon="photo-o" text="地图找房">
          <template #icon>
            <div class="toux">
              <span class="toutiao toutiao-ditu1"></span>
            </div>
          </template>
        </van-grid-item>

        <van-grid-item icon="photo-o" text="去出租">
          <template #icon>
            <div class="toux">
              <span class="toutiao toutiao-zufang"></span>
            </div>
          </template>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="zufang">
      <div class="top">
        <h2>租房小组</h2>
        <span>更多</span>
      </div>
      <div class="bottom">
        <div class="gong">
          <div class="top one">
            <div class="left">
              <img src="@/assets/微信图片_20220714122756.png" alt="" />
            </div>
            <div class="right">
              <p>家住回龙观</p>
              <p>归属的感觉</p>
            </div>
          </div>
          <div class="top">
            <div class="left">
              <img src="" alt="" />
            </div>
            <div class="right">
              <p>家住回龙观</p>
              <p>归属的感觉</p>
            </div>
          </div>
        </div>
        <div class="gong">
          <div class="top one kx">
            <div class="left">
              <img src="" alt="" />
            </div>
            <div class="right">
              <p>家住回龙观</p>
              <p>归属的感觉</p>
            </div>
          </div>
          <div class="top kx">
            <div class="left">
              <img src="" alt="" />
            </div>
            <div class="right">
              <p>家住回龙观</p>
              <p>归属的感觉</p>
            </div>
          </div>
        </div>
      </div>
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
  .toutiao-xiajiantou {
    position: relative;
    top: 0;
    left: 100px;
  }
  /deep/.van-cell {
    margin-top: 50px;
    padding: 15px 10px;
  }
  .toutiao-ditu {
    position: absolute;
    top: 60px;
    right: -86px;
    color: #fff;
    font-size: 60px;
  }
  .toutiao-sousuo {
    position: absolute;
    top: 70px;
    left: 200px;
    color: #ccc;
    font-size: 40px;
  }
  .main {
    margin-bottom: 20px;
    .toux {
      background-color: #f3fbf7;
      border-radius: 50%;
      width: 90px;
      height: 90px;
      text-align: center;
      line-height: 80px;
      margin-bottom: 10px;
    }
    .toutiao {
      font-size: 60px;
      color: #38ae60;
      border-radius: 200px;
    }
    /deep/.van-grid-item__text {
      font-size: 30px;
    }
  }
  .zufang {
    .top {
      display: flex;
      padding: 0 30px;
      justify-content: space-between;
      h2 {
        margin: 0;

        font-size: 40px;
      }
      span {
        color: #666;
        font-size: 35px;
      }
    }
    .bottom {
      .gong {
        display: flex;
        background-color: #fdfdfd;
        .top {
          flex: 1;
          // background-color: pink;
          // background-color: #fff;
          margin: 0 20px;
        }
        .one {
          margin-right: 0;
        }
        .kx {
          margin-top: 20px;
        }
        .left {
          width: 120px;
          height: 120px;
          img{
            width: 100%;
          }
        }
        .right {
          font-size: 20px;
        }
      }
    }
  }
}
</style>
