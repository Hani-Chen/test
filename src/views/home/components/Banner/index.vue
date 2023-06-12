<template>
  <div class="banner-wrap">
    <Swiper
      class="banner-container"
      @slideChange="onSlideChange"
      @transitionEnd="transitionEnd"
      v-bind="swiperOption"
    >
      <SwiperSlide
        class="banner-item"
        v-for="(item, index) in bannerList"
        :key="index"
      >
        <div
          class="banner-shade"
        >
          <img
            mode="aspectFill"
            class="banner-item-img"
            :src="item.url"
            alt=""
          />
        </div>
      </SwiperSlide>
    </Swiper>
    <!-- </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.min.css";
import SwiperCore, { EffectFade, Autoplay } from "swiper/core";
SwiperCore.use([EffectFade, Autoplay]);

export default defineComponent({
  components: { Swiper, SwiperSlide },

  setup() {
    onMounted(() => {
      initBannerShade();
    });

    const isActiveIndex = ref(0);
    const shadeSize = ref(["0", "1", "2", "3"]);
    const initBannerShade = () => {
      // // 监听窗口尺寸变化 - 获取窗口宽高
      // window.addEventListener("resize", (e) => {
      //   // const { innerWidth, innerHeight } = e.target;
      //   // console.log("e :>> ", innerWidth, innerHeight);
      //   shadeSize.value = [
      //     innerHeight / 2 + "px",
      //     innerWidth / 2 + "px",
      //     innerHeight / 2 + "px",
      //     innerWidth / 2 + "px",
      //   ];
      // });
    };
    // banner数据
    const bannerList = [
      {
        id: 0,
        url: "http://cdn.chenhuafeng.cn/img/1.jpg",
      },
      {
        id: 0,
        url: "http://cdn.chenhuafeng.cn/img/2.jpg",
      },
      {
        id: 0,
        url: "http://cdn.chenhuafeng.cn/img/3.jpg",
      },
      {
        id: 0,
        url: "http://cdn.chenhuafeng.cn/img/4.jpg",
      },
      {
        id: 0,
        url: "http://cdn.chenhuafeng.cn/img/5.jpg",
      },
    ];
    const onSlideChange = () => {
      console.log("123 :>> ", 123);
    };
    const transitionEnd = () => {
      // isActiveIndex.value = true;
      console.log("123 :>> ", 123);
    };
    const swiperOption = reactive({
      loop: true, //首尾循环
      // //不想自动滚动，只需注释掉autoplay属性即可
      // autoplay: {
      //   delay: 3000,
      //   stopOnLastSlide: false, //true表示滚动到最后一页后停止滚动
      //   disableOnInteraction: false, //true：交互后，不继续滚动
      // },

      // grabCursor: true, //true：鼠标为抓手
    });
    return {
      bannerList,
      onSlideChange,
      swiperOption,
      shadeSize,
      isActiveIndex,
      transitionEnd,
    };
  },
});
</script>

<style lang="scss" src="./index.scss"></style>
