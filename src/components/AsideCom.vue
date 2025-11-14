<script setup>
import {
  House,
  Memo,
  DataAnalysis,
  OfficeBuilding,
  Help,
  Money,
} from "@element-plus/icons-vue";
import routes from "@/router/children";

// 定义组件
const components = {
  House,
  Memo,
  DataAnalysis,
  OfficeBuilding,
  Help,
  Money,
};

// 注册所有图标组件
Object.keys(components).forEach((key) => {
  const component = components[key];
  component.name = key;
});

// 获取图标组件
const getIconComponent = (iconName) => {
  return components[iconName] || House; // 默认使用 House 图标
};
</script>

<template>
  <el-menu
    router
    :unique-opened="true"
    :collapse-transition="false"
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
  >
    <el-sub-menu v-for="item in routes" :key="item.name" :index="'/' + item.path">
      <template #title>
        <el-icon>
          <component :is="getIconComponent(item.icon)" />
        </el-icon>
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item v-for="child in item.children" :key="child.name" :index="`/${item.path}/${child.path}`">{{ child.label }}</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>