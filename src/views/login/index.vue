<template>
  <div class="login-container">
    <van-nav-bar
      class="app-nav-bar"
      title="注册/登录"
      left-arrow
      @click-left="$router.back()"
    />
    <!--登录表单-->
    <van-cell-group>
      <van-field
        v-model="user.mobile"
        icon-prefix="toutiao"
        left-icon="shouji"
        placeholder="请输入手机号"
      />
      <van-field
        v-model="user.code"
        clearable
        icon-prefix="toutiao"
        left-icon="yanzhengma"
        placeholder="请输入验证码"
        >  <template #button>
              <van-button
                class="send-btn"
                size="small"
                round
              >发送验证码</van-button>
            </template>
      </van-field>
    </van-cell-group>
    <!--登录表单-->
    <div class="login-btn-wrap">
      <van-button
        class="login-btn"
        type="info"
        block
        @click="onlogin"
      > 登录 </van-button>
    </div>
  </div>
</template>

<script>

import { login } from '@/api/user'
import { Toast } from 'vant'

export default {
  name: 'LoginIndex',
  comments: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '', // 手机号
        code: ''// 验证码
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onlogin () {
      Toast.loading({
        message: '加载中...', // 登录提示文案
        forbidClick: true, // 禁止背景点击
        duration: 0
      })
      // 找到数据接口
      // 封装请求方法
      // 请求调用登录
      try {
        const res = await login(this.user)
        console.log(res)
        Toast.success('登陆成功')
      } catch (err) {
        console.log(err)
        Toast.success('登陆失败，手机号或验证码错误')
      }
      // 处理响应结果
    }
  }
}
</script>
<style scoped lang="less">
.login-container{
  .send-btn {
    width: 78px;
    height: 23px;
    background-color: #ededed;
    .van-button__text{
      font-size: 11px;
      color: #666666;
    }
  }
  .login-btn-wrap{
    padding: 26px 16px;
    .login-btn{
      background-color: #6db4fb;
      border: none;
      .van-button__text{
        font-size: 15px;
      }
    }
  }
}
</style>
