<template>
  <div class="login-container">
    <van-nav-bar title="账号登录" @click-left="BackToPage">
      <template #left>
        <van-icon name="arrow-left" class="left-arrow" />
      </template>
    </van-nav-bar>

    <van-form @submit="onSubmit">
      <van-field
        class="field"
        v-model="user.username"
        name="用户名"
        placeholder="请输入账号"
      />
      <van-field
        class="field"
        v-model="user.password"
        type="password"
        name="密码"
        placeholder="请输入密码"
      >
      </van-field>
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
    <div class="zhuce">还没有账号，去注册~</div>
  </div>
</template>

<script>
import { login } from '@/apis/user'

export default {
  name: 'login-container',
  data () {
    return {
      user: {
        username: 'hzhmqd',
        password: '123456',
        userFormRules: {
          // mobile: [
          //   {
          //     required: true,
          //     message: '手机号不能为空'
          //   },
          //   {
          //     // pattern 正则
          //     pattern: /^[a-zA-Z0-9]{5,8}$/,
          //     message: '手机号格式错误'
          //   }
          // ],
          // code: [
          //   {
          //     required: true,
          //     message: '请填写用户名'
          //   },
          //   {
          //     pattern: /^\d{6}$/,
          //     message: '验证码格式错误'
          //   }
          // ]
        }
      }
    }
  },
  methods: {
    BackToPage () {
      this.$router.back()
    },
    async onSubmit () {
      this.$toast.loading({
        message: '登录中...',
        forbidClick: true, // 禁用背景点击
        duration: 0 // 持续事件，默认是2000
        // 如果为0就持续展示
      })
      try {
        if (
          this.user.username.length === 0 ||
          this.user.password.length === 0
        ) {
          // console.log(11)
          return this.$toast.fail('账号密码不能为空')
        }

        const { data } = await login(this.user)
        console.log('登录成功', data)
        this.$store.commit('setUser', data.body)
        //
        if (data.status === 400) {
          return this.$toast.fail('账号或密码错误')
        }

        this.$toast.success('登录成功')

        this.$router.back()
      } catch (err) {
        console.log('登录失败', err)
        this.$toast.fail('登录失败，请稍后再试')

        // this.$toast.fail('登录失败，请稍后重试')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  /deep/ .van-nav-bar__content {
    background-color: #45b974;
    height: 92px;
    margin-bottom: 42px;
  }
  /deep/.van-nav-bar__title {
    color: #fff;
  }
  .left-arrow {
    color: #fff;
  }
  .van-button--info {
    background-color: #45b974;
    border: none;
  }
  /deep/.field {
    height: 120px;
  }
  .zhuce {
    padding-top: 10px;
    font-size: 20px;
    text-align: center;
  }
}
</style>
