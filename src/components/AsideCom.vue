<script>
import {
  House,
  Memo,
  DataAnalysis,
  OfficeBuilding,
  Help,
  Money,
} from "@element-plus/icons-vue";
import routes from "@/router/children";
export default {
  // props: ["collapse"],
  data() {
    return { routes };
  },
  methods: {},
  mounted() {
    // console.log(routes);
  },
  components: {
    House,
    Memo,
    DataAnalysis,
    OfficeBuilding,
    Help,
    Money,
  },
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
          <component :is="item.icon"></component>
        </el-icon>
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item v-for="child in item.children" :key="child.name"  :index="`/${item.path}/${child.path}`">{{ child.label }}</el-menu-item>
      
    </el-sub-menu>
    
  </el-menu>
</template>

<style lang="scss"></style>