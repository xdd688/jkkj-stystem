<script>
import AsideCom from "../components/AsideCom.vue";
import ColorCom from "../components/ColorCom.vue";
import {
  Fold,
  Expand,
  Orange,
  Tickets,
  MoreFilled,
  Rank,
  RefreshRight,
  HelpFilled,
  Bell,
  ArrowDown,
} from "@element-plus/icons-vue";
import { ref } from "vue";

export default {
  name: "App",
  components: {
    AsideCom,
    ColorCom,
    Fold,
    Expand,
    Orange,
    Tickets,
    MoreFilled,
    Rank,
    RefreshRight,
    HelpFilled,
    Bell,
    ArrowDown,
  },
  data() {
    return {
      input: ref(""),
      collapse: false,
      colorScheme: {
        aside: "rgb(91, 150, 64)",
        logo: "#4f89f3",
        header: "rgb(209, 226, 220)",
        note: "这是留言板",
      },
    };
  },
  mounted() {
    this.initThemeColor();
  },
  methods: {
    refreshPage() {
      window.location.reload();
    },
    loginClick() {
      this.$router.push("login");
    },
    logoutCilck() {
      this.$store.commit("updataUserInfo", {});
      this.$router.push("/login");
    },
    openColorDrawer() {
      this.$refs.colorCom.openDrawer();
    },
    handleColorChange(colorScheme) {
      this.colorScheme = { ...colorScheme };
      localStorage.setItem("themeColorScheme", JSON.stringify(colorScheme));
    },
    initThemeColor() {
      const saved = localStorage.getItem("themeColorScheme");
      if (saved) {
        try {
          this.colorScheme = JSON.parse(saved);
        } catch (e) {
          console.error("初始化主题色失败:", e);
        }
      }
    },
  },
  computed: {
    headerleft() {
      return this.collapse ? "Expand" : "Fold";
    },
    userName() {
      return this.$store.state.userInfo.userName;
    },
  },
};
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside
        :width="collapse ? '60px' : '220px'"
        :style="{ backgroundColor: colorScheme.aside }"
      >
        <div class="logo" :style="{ backgroundColor: colorScheme.logo }">
          <img src="../image/商标.png" alt="" />
          <span v-show="!collapse">云雀cid</span>
        </div>
        <AsideCom :collapse="collapse" />
      </el-aside>

      <el-container>
        <el-header :style="{ backgroundColor: colorScheme.header }">
          <div class="lefthead">
            <el-icon color="#fff" size="26" @click="collapse = !collapse">
              <component :is="headerleft" />
            </el-icon>
            <el-icon color="#fff" size="20" @click="refreshPage"
              ><HelpFilled
            /></el-icon>
            <el-icon color="#fff" size="20"><RefreshRight /></el-icon>
            <el-input
              v-model="input"
              clearable
              placeholder="请搜索...."
            ></el-input>
          </div>
          <div class="righthead">
            <el-icon color="#fff" size="20"><Bell /></el-icon>
            <el-icon color="#fff" size="20" @click="openColorDrawer"
              ><Orange
            /></el-icon>
            <el-icon color="#fff" size="20" @click=""><Tickets /></el-icon>
            <el-icon color="#fff" size="20"><Rank /></el-icon>
            <el-dropdown v-if="userName">
              <span class="el-dropdown-link">
                欢迎{{ userName }}
                <el-icon class="el-icon--right">
                  <arrow-down />
                </el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>基本资料</el-dropdown-item>
                  <el-dropdown-item>修改密码</el-dropdown-item>
                  <el-dropdown-item divided @click="logoutCilck"
                    >退出登录</el-dropdown-item
                  >
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <el-button v-else @click="loginClick"> 登 录 </el-button>
            <el-icon color="#fff" size="16"><MoreFilled /></el-icon>
          </div>
        </el-header>

        <el-main>
          <!-- 二级路由出口 -->

          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>

    <ColorCom ref="colorCom" @color-change="handleColorChange" />
  </div>
</template>

<style lang="scss">
html,
body,
#app,
.common-layout,
.el-container {
  height: 100%;
  margin: 0;
}

.el-aside,
.el-header,
.logo {
  transition: background-color 0.3s ease;
}

.el-header {
  height: 50px;
  display: flex;
  padding: 0 !important;
  height: 50px !important;
  justify-content: space-between;
  align-items: center;
  .lefthead {
    display: flex;
    align-items: center;
    justify-content: center;
    .el-icon {
      margin-left: 30px;
    }
    .el-input {
      width: 190px;
      height: 30px;
      margin-left: 30px;
    }
  }
  .righthead {
    display: flex;
    align-items: center;
    justify-content: center;
    // gap: 10px;
    .el-icon {
      margin-right: 30px;
    }
    .el-button {
      width: 60px;
      height: 30px;
    }
  }
}

.el-main {
  background-color: #ccc;
  padding: 0 !important;
}

.logo {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 40px;
    height: 40px;
    padding-right: 5px;
  }

  span {
    font-size: 16px;
    color: #ccc;
  }
}
</style>
