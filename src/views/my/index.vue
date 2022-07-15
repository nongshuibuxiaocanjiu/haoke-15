<template>
  <div class="search-container">
    <div class="header" v-if="user">
      <img src=http://liufusong.top:8080/img/avatar.png alt="" />
      <div class="box">
        <div class="toux">
          <img src="@/assets/微信图片_20220714122756.png" alt="" />
          <div class="nickname">
            <p>{{ userInfo.nickname }}</p>
          </div>
          <van-button
            type="primary"
            class="toux-btn"
            @click="onLogout"
            clickable
            >退出</van-button
          >
          <p class="personal">
            编辑个人资料 <i class="toutiao toutiao-youjiantou1"></i>
          </p>
        </div>
      </div>
    </div>
    <div class="header" v-else>
      <img src="@/assets/微信图片_20220714122742.png" alt="" />
      <div class="box">
        <div class="toux">
          <img src="@/assets/微信图片_20220714122756.png" alt="" />
          <p>游客</p>
          <van-button type="primary" class="toux-btn" @click="btn('/login')"
            >去登录</van-button
          >
        </div>
      </div>
    </div>

    <!-- <div class="main">

      <div class="top">
        <div class="top-nav">
          <i 
          class="toutiao toutiao-shoucang"
          ></i>
          <span>我的收藏</span>
        </div>
        <div class="top-nav">
          <i class="toutiao toutiao-shouye"></i>
          <span>我的出租</span>
        </div>
        <div class="top-nav">
          <i class="toutiao toutiao-lishi"></i>
          <span>看房记录</span>
        </div>
      </div>
      <div class="bottom">
        <div class="top-nav">
          <i class="toutiao toutiao-yinhangqia-xianxing"></i>
          <span>成为房主</span>
        </div>
        <div class="top-nav">
          <i class="toutiao toutiao-wode"></i>
          <span>个人资料</span>
        </div>
        <div class="top-nav">
          <i class="toutiao toutiao-kefu"></i>
          <span>联系我们</span>
        </div>
      </div>
    </div> -->
    <div class="main">
      <van-grid :border="false" :column-num="3">
        <van-grid-item @click="onCollect('/collect')">
          <i class="toutiao toutiao-shoucang"></i>
          <span>我的收藏</span>
        </van-grid-item>
        <van-grid-item @click="onCollect('/rent')">
          <i class="toutiao toutiao-shouye"></i>
          <span>我的出租</span>
        </van-grid-item>
        <van-grid-item>
          <i class="toutiao toutiao-lishi"></i>
          <span>看房记录</span>
        </van-grid-item>
        <van-grid-item>
          <i class="toutiao toutiao-yinhangqia-xianxing"></i>
          <span>成为房主</span>
        </van-grid-item>
        <van-grid-item>
          <i class="toutiao toutiao-wode"></i>
          <span>个人资料</span>
        </van-grid-item>
        <van-grid-item>
          <i class="toutiao toutiao-kefu"></i>
          <span>联系我们</span>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="img-box">
      <img src="http://liufusong.top:8080/img/profile/join.png" alt="" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getUser } from '@/apis/user'

export default {
  name: 'my-index',
  data () {
    return {
      userInfo: [] // 用户信息
    }
  },
  created () {
    if (this.user) {
      this.loadUserInfo()
    }
    // console.log(this.userInfo)
    // console.log(this.$store)
  },
  methods: {
    btn (targetPath) {
      this.$router.push({
        path: targetPath
      })
    },
    onLogout () {
      this.$dialog
        .confirm({
          title: '提示',
          message: '是否确认退出'
        })
        .then(() => {
          this.$store.commit('setUser', null)
        })
        .catch(() => {
          // on cancel
        })
    },
    async loadUserInfo () {
      try {
        const { data } = await getUser()
        console.log(data)
        this.userInfo = data.body
      } catch (err) {
        console.log(err, '失败')
        this.$toast('获取数据失败，请稍后重试')
      }
    },
    onCollect (targetPath) {
      // console.log(11)
      this.$router.push({
        path: targetPath
      })
    }
  },
  computed: {
    ...mapState(['user'])
  }
}
</script>

<style lang="less" scoped>
.search-container {
  /deep/.personal {
    position: relative;
    top: 0;
    left: -30px;
    width: 200px !important;
  }
  .nickname {
    position: relative;
    top: 0;
    left: -30px;
    width: 200px;
  }
  // main 样式
  /deep/ .van-grid-item__content {
    font-size: 35px !important;
    .toutiao {
      font-size: 35px;
      margin-bottom: 10px;
    }
  }
  // 头部
  .header {
    position: relative;
    width: 100%;
    height: 600px;
    overflow: hidden;
    img {
      width: 100%;
    }
    .box {
      position: absolute;
      background: #fff;
      width: 85%;
      height: 330px;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      box-shadow: 0 0 10px 3px #ddd;
      margin: 100px auto 0;
      text-align: center;
      font-size: 13px;

      .toux {
        position: relative;
        transform: translateY(-50%);
        border-radius: 50%;
        width: 130px;
        height: 130px;
        border: 10px solid #f5f5f5;
        display: inline-block;
        box-shadow: 0 4px 4px #bdbdbd;
        p {
          margin-top: 40px;
          margin-bottom: 30px;
        }
        .toux-btn {
          // font-size: 14px;
          position: relative;
          top: 0;
          left: -20px;
          width: 180px;
          border-radius: 10px;
          height: 60px;
        }
      }
    }
  }
  .img-box {
    // margin-top: 20px;
    width: 700px;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
}
</style>
