<script>
import { getUndateListFn } from "@/api/user";
export default {
  name: "HomeTime",
  data() {
    return {};
  },
  mounted() {
    getUndateListFn().then((res) => {
      console.log(res);
    });
  },
};
</script>

<template>
  <div>时间线</div>
</template>
