<template>
  <div class="tab-container">
    <el-tabs
      v-model="activeTab"
      type="card"
      class="tabs"
      @tab-click="handleTabClick"
      @tab-remove="handleTabRemove"
    >
      <el-tab-pane
        v-for="tab in tabs"
        :key="tab.name"
        :label="tab.label"
        :name="tab.name"
        :closable="tab.closable"
      >
        <!-- 使用具名插槽自定义标签内容 -->
        <template #label>
          <span class="custom-tab-label">
            <el-icon size="30" color="#ccc" v-if="tab.name === 'default'"
              ><House
            /></el-icon>
            <span v-else>{{ tab.label }}</span>
            
          </span>
        </template>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { House } from "@element-plus/icons-vue";

const route = useRoute();
const router = useRouter();

// 默认标签页：大屏展示
const tabs = ref([
  {
    name: "default",
    label: "大屏展示",
    path: "/homepage/show",
    closable: false,
  },
]);

const activeTab = ref("default");

// 监听路由变化，添加对应的标签页
watch(
  () => route.fullPath,
  (newPath) => {
    // 查找是否已存在对应标签页
    const existingTab = tabs.value.find((tab) => tab.path === newPath);

    if (!existingTab && newPath !== "/") {
      // 获取路由信息中的标签名称
      let tabLabel = "未知页面";

      // 遍历匹配路由获取标签名称
      router.options.routes.forEach((rootRoute) => {
        if (rootRoute.children) {
          rootRoute.children.forEach((child) => {
            if (child.children) {
              // 三级路由的情况
              child.children.forEach((subChild) => {
                if (
                  route.path.includes(`/${child.path}/${subChild.path}`)
                ) {
                  tabLabel = subChild.label || "未命名";
                }
              });
            } else {
              // 二级路由的情况
              if (
                route.path.includes(`/${child.path}`) &&
                child.path !== ""
              ) {
                tabLabel = child.label || "未命名";
              }
            }
          });
        }
      });

      // 添加新的标签页
      tabs.value.push({
        name: newPath,
        label: tabLabel,
        path: newPath,
        closable: true,
      });
    }

    // 设置当前激活的标签页
    activeTab.value = existingTab ? existingTab.name : newPath;
  },
  { immediate: true }
);

// 处理标签页点击事件
const handleTabClick = (tab) => {
  const tabInfo = tabs.value.find((t) => t.name === tab.paneName);
  if (tabInfo) {
    router.push(tabInfo.path);
  }
};

// 处理标签页关闭事件
const handleTabRemove = (tabName) => {
  const tabIndex = tabs.value.findIndex((tab) => tab.name === tabName);

  if (tabIndex !== -1 && tabs.value[tabIndex].closable) {
    const removedTab = tabs.value[tabIndex];
    tabs.value.splice(tabIndex, 1);

    // 如果关闭的是当前激活的标签页，则跳转到默认标签页或其他标签页
    if (activeTab.value === tabName) {
      if (tabs.value.length > 0) {
        // 如果还有其他标签页，跳转到相邻标签页
        const nextTabIndex = Math.min(tabIndex, tabs.value.length - 1);
        const nextTab = tabs.value[nextTabIndex];
        activeTab.value = nextTab.name;
        router.push(nextTab.path);
      } else {
        // 没有其他标签页则跳转到默认页面
        activeTab.value = "default";
        router.push("/homepage/show");
      }
    }
  }
};
</script>

<style scoped>
.tab-container {
  width: 100%;
  height: 40px;
}

.tabs {
  height: 40px;
}

.tabs :deep(.el-tabs__header) {
  margin: 0;
}

.tabs :deep(.el-tabs__nav-wrap) {
  height: 40px;
}

.tabs :deep(.el-tabs__nav-scroll) {
  height: 40px;
}

.tabs :deep(.el-tabs__nav) {
  height: 40px;
}

.tabs :deep(.el-tab-pane) {
  height: 40px;
  line-height: 40px;
}

.custom-tab-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 !important;
}

.custom-close-icon {
  border-radius: 50%;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transform-origin: 100% 50%;
}
</style>