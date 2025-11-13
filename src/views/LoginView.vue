<script>
import { computed, onMounted } from "vue";
import md5 from "md5";
import { ElMessage } from "element-plus";
import { ElLoading } from "element-plus";
import { loginFn } from "../api/user";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      formData: {
        userAccount: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapMutations(['updataUserInfo']),
    async loginSubmitClick() {
      // console.log(this.formData);
      //    加载中
      // const loading = ElLoading.service({
      //   lock: true,
      //   text: "数据加载中。。。",
      //   background: "rgba(0, 0, 0, 0.3)",
      // });
      // setTimeout(() => {
      //   loading.close();
      // }, 2000);

      // if (this.formData.userAccount.length < 5) {
      //   ElMessage.error("账号不得小于5位");
      //   return;
      // }
      // if (!/^[A-Za-z0-9]{6,}$/.test(this.formData.password)) {
      //   ElMessage.error("密码不正确");
      //   return;
      // }

      // md5加密
      // console.log(md5("@#$%^" + this.formData.password + ")(*&^)"));
      const res = await loginFn(this.formData);
      console.log(res.data);
      if (res.data.code == 0) {
        this.updataUserInfo(res.data.data)
        ElMessage.success("登陆成功");
        this.$router.push("/");
      } else {
        ElMessage.error(res.data.description);
      }
    },
  },
  computed: {},
};
</script>

<template>
  <div class="login-big">
    <div class="login-right">
      <img
        src="https://ad3.muchengine.com/static2/picture/shape1.png "
        alt=""
      />
    </div>
    <div class="login-main">
      <img src="https://ad3.muchengine.com/static2/picture/bg34-1.png" alt="" />
    </div>
    <div class="login-form">
      <el-input
        clearable
        v-model="formData.userAccount"
        placeholder="请输入账号"
      ></el-input>
      <el-input
        clearable
        show-password
        v-model="formData.password"
        placeholder="请输入密码"
      ></el-input>
      <a>努力，奋斗，坚持</a>
      <el-button type="primary" @Click="loginSubmitClick">登录</el-button>
    </div>
  </div>
</template>
<style lang="scss"scoped>
html,
body,
#app {
  height: 100%;
}
body {
  margin: 0;
}
.login-big {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.login-right img {
  width: 100%;
  height: auto;
}
.login-form {
  height: 500px;
  width: 440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  background-color: rgb(197, 238, 238);
  margin-right: 300px;
  box-sizing: border-box;
  a {
    color: #797676;
    margin-bottom: 16px;
  }
}
.el-input {
  height: 50px;
  width: 416px;
  border-radius: 10px;
  margin-bottom: 16px;
  font-size: 20px;
}
.el-button {
  height: 54px;
  width: 416px;
  border-radius: 10px;
  margin-bottom: 16px;
}
</style>
