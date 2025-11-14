<script setup>
import AsideCom from "../components/AsideCom.vue";
import ColorCom from "../components/ColorCom.vue";
import TabCom from "../components/TabCom.vue";
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
import { ref, computed, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";

// 定义响应式数据
const input = ref("");
const collapse = ref(false);
const colorCom = ref();

const router = useRouter();
const route = useRoute();
const store = useStore();

// 主题色方案
const colorScheme = ref({
  aside: "rgb(91, 150, 64)",
  logo: "#4f89f3",
  header: "rgb(209, 226, 220)",
  note: "这是留言板",
});

const headerIcon = computed(() => {
  return collapse.value ? Expand : Fold;
});

const userName = computed(() => {
  return store.state.userInfo.userName;
});

// 方法定义
const refreshPage = () => {
  window.location.reload();
};

const loginClick = () => {
  router.push("login");
};

const logoutClick = () => {
  store.commit("updataUserInfo", {});
  router.push("/login");
};

const openColorDrawer = () => {
  colorCom.value.openDrawer();
};

const handleColorChange = (newColorScheme) => {
  colorScheme.value = { ...newColorScheme };
  localStorage.setItem("themeColorScheme", JSON.stringify(newColorScheme));
};

const initThemeColor = () => {
  const saved = localStorage.getItem("themeColorScheme");
  if (saved) {
    try {
      colorScheme.value = JSON.parse(saved);
    } catch (e) {
      console.error("初始化主题色失败:", e);
    }
  }
};

// 生命周期钩子
onMounted(() => {
  initThemeColor();
});
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
            <!-- 确保 el-icon 正确包裹图标组件 -->
            <el-icon color="#fff" size="26" @click="collapse = !collapse">
              <component :is="headerIcon" />
            </el-icon>
            <el-icon color="#fff" size="20" @click="refreshPage">
              <HelpFilled />
            </el-icon>
            <el-icon color="#fff" size="20"><RefreshRight /></el-icon>
            <el-input
              v-model="input"
              clearable
              placeholder="请搜索...."
            ></el-input>
          </div>
          <div class="righthead">
            <el-icon color="#fff" size="20" @click="">
              <Bell />
            </el-icon>
            <el-icon color="#fff" size="20" @click="openColorDrawer">
              <Orange />
            </el-icon>
            <el-icon color="#fff" size="20" @click="">
              <Tickets />
            </el-icon>
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
                  <el-dropdown-item divided @click="logoutClick">
                    退出登录
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <el-button v-else @click="loginClick"> 登 录 </el-button>
            <el-icon color="#fff" size="16"><MoreFilled /></el-icon>
          </div>
        </el-header>

        <el-main>
          <!-- 标签页组件 -->
          <TabCom />

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
  background-color: #fff;
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
