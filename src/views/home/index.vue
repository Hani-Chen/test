<!--
 * @Author: Gianni
 * @Date: 2022-07-05 10:06:12
 * @LastEditTime: 2022-12-18 17:11:02
 * @LastEditors: HuaFeng
 * @Description: 首页
-->
<template>
  <div class="page-wrap">
    <!-- 首页banner -->
    <Banner />
    <!-- 作品推荐 -->
    <WorksRecommend />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
// 引入banner组件
import Banner from "./components/Banner/index.vue";

export default defineComponent({
  components: { Banner },
  setup() {
    const data = reactive({
      test: "11111",
    });
    return {
      ...toRefs(data),
      hello() {
        alert("hello vue3");
      },
    };
  },
});
</script>

<style scoped lang="scss" src="./index.scss"></style>
