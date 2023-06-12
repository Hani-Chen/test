<template>
  <Nav />
  <router-view />
</template>
<script lang="ts"  name="App">
import { defineComponent } from "vue";
// 引入导航栏组件
import Nav from "@/components/Nav/index.vue";

export default defineComponent({
  components: { Nav },
});
</script>
<style lang="scss" src="./styles/index.scss"></style>
