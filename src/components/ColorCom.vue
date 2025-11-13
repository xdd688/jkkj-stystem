<template>
  <el-drawer
    v-model="drawerVisible"
    title="配色方案"
    direction="rtl"
    size="20%"
  >
    <div class="color-palette">
      <div 
        v-for="(scheme, index) in colorSchemes" 
        :key="index"
        class="color-item"
        @click="selectColorScheme(scheme)"
      >
        <div class="color-preview">
          <div class="left-section">
            <div class="logo-sample" :style="{ backgroundColor: scheme.logo }"></div>
            <div class="aside-sample" :style="{ backgroundColor: scheme.aside }"></div>
          </div>
          <div class="right-section">
            <div class="header-sample" :style="{ backgroundColor: scheme.header }"></div>
            <div class="main-sample"></div>
          </div>
        </div>
      </div>
    </div>
  </el-drawer>
</template>

<script>
export default {
  name: "ColorCom",
  data() {
    return {
      drawerVisible: false,
      colorSchemes: [
        // 蓝色系
        { aside: "#409EFF", logo: "#337ecc", header: "#53a8ff" },
        { aside: "#53a8ff", logo: "#1e6dc4", header: "#7bc1ff" },
        { aside: "#1e6dc4", logo: "#0d4d8c", header: "#4f89f3" },
        
        // 绿色系
        { aside: "#67C23A", logo: "#529b2e", header: "#85ce61" },
        { aside: "#85ce61", logo: "#5da734", header: "#a3e076" },
        { aside: "#5da734", logo: "#3f7a22", header: "#7bc151" },
        
        // 橙色系
        { aside: "#E6A23C", logo: "#b88230", header: "#ebb563" },
        { aside: "#ebb563", logo: "#d18d27", header: "#f7c98a" },
        { aside: "#d18d27", logo: "#a86c1a", header: "#e8b15c" },
        
        // 红色系
        { aside: "#F56C6C", logo: "#c45656", header: "#f78989" },
        { aside: "#f78989", logo: "#e64c4c", header: "#ffa8a8" },
        { aside: "#e64c4c", logo: "#b32b2b", header: "#f57373" },
        
        // 灰色系
        { aside: "#909399", logo: "#75787c", header: "#a6a9ad" },
        { aside: "#a6a9ad", logo: "#7d8085", header: "#c8c9cc" },
        { aside: "#7d8085", logo: "#5a5d61", header: "#9a9ca0" },
      ]
    };
  },
  methods: {
    openDrawer() {
      this.drawerVisible = true;
    },
    selectColorScheme(scheme) {
      this.$emit('color-change', scheme);
      this.drawerVisible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.color-palette {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 80px);
  gap: 12px;
  padding: 12px;
}

.color-item {
  cursor: pointer;
  overflow: hidden;
  padding: 4px;

  
  &:hover {
    transform: scale(1.1);
    border:0.5px solid #42936c;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
}

.color-preview {
  display: flex;
  height: 100%;
}

.left-section {
  width: 33.33%;
  display: flex;
  flex-direction: column;
  
  .logo-sample {
    height: 25%;
  }
  
  .aside-sample {
    height: 75%;
  }
}

.right-section {
  width: 66.67%;
  display: flex;
  flex-direction: column;
  
  .header-sample {
    height: 25%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }
  
  .main-sample {
    height: 75%;
    background-color: #ccc;
  }
}
</style>