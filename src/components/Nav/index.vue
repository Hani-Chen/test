<!--
 * @Author: Gianni
 * @Date: 2022-07-03 11:38:09
 * @LastEditTime: 2022-07-29 16:41:43
 * @LastEditors: Gianni
 * @Description: 导航栏
-->
<template>
  <div
    class="module module-nav"
    :class="{ 'header-scrolled': headerScrolled.value }"
  >
    <!-- 导航栏列表 -->
    <div class="nav-list">
      <!-- 作品 -->
      <div class="nav-item">
        <router-link to="/">
          <div class="nav-item-inner">
            <span class="nav-item-name">Home</span>
            <span class="nav-item-name">首页</span>
          </div>
        </router-link>
      </div>
      <!-- 作品 -->
      <div class="nav-item">
        <router-link to="/about">
          <div class="nav-item-inner">
            <span class="nav-item-name">About</span>
            <span class="nav-item-name">关于我</span>
          </div>
        </router-link>
      </div>
      <!-- 作品 -->
      <div class="nav-item">
        <router-link to="/works">
          <div class="nav-item-inner">
            <span class="nav-item-name">Works</span>
            <span class="nav-item-name">我的作品</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";

export default defineComponent({
  name: "Nav",
  setup() {
    const headerScrolled = reactive({
      value: false,
    });
    onMounted(() => {
      // 监听滚动条位置
      window.addEventListener("scroll", scrollTop, true);
    });
    // 监听页面滚动
    const scrollTop = () => {
      let scroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      headerScrolled.value = scroll > 100;
    };
    return {
      headerScrolled,
    };
  },
});
</script>

<style lang="scss" src="./index.scss"></style>
