<template>
  <div class="flex-col page">
    <div class="flex-col header space-y-22">
      <div class="flex-row justify-between items-center">
        <span class="text">9:41</span>
        <div class="flex-row space-x-4">
          <img
            class="image"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234009834185347774.png"
          />
          <img
            class="image_2"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234009834150509331.png"
          />
          <img
            class="image_3"
            src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/60c325b4767e240013341755/60c321886d32e90012f09dc4/16551312074193639540.png"
          />
        </div>
      </div>
      <span class="self-center text_2">FF办公空间</span>
    </div>
    <div class="flex-col flex-auto group">
      <van-swipe :autoplay="3000" class="swiper-pO81HWNv">
        <van-swipe-item v-for="item in switch_pO8">
          <img
            class="image_4"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234010093791214053.png"
          />
        </van-swipe-item>
      </van-swipe>
      <div class="flex-row equal-division">
        <div class="flex-col items-center equal-division-item space-y-6">
          <img
            class="image_5"
            src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/60c325b4767e240013341755/60c321886d32e90012f09dc4/16551312356205125204.png"
          />
          <span class="font_1">地图找楼</span>
        </div>
        <div class="flex-col items-center equal-division-item space-y-6">
          <img
            class="image_5"
            src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/60c325b4767e240013341755/60c321886d32e90012f09dc4/16551312356216119962.png"
          />
          <span class="font_1">核心商圈</span>
        </div>
        <div class="flex-col items-center equal-division-item space-y-6">
          <img
            class="image_5"
            src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/60c325b4767e240013341755/60c321886d32e90012f09dc4/16551312356222324005.png"
          />
          <span class="font_1">全景参观</span>
        </div>
        <div class="flex-col items-center equal-division-item space-y-6">
          <img
            class="image_5"
            src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/60c325b4767e240013341755/60c321886d32e90012f09dc4/16551312356230545511.png"
          />
          <span class="font_1">咨询热线</span>
        </div>
      </div>
      <div class="flex-col group_1">
        <span class="self-start text_3">热推空间</span>
        <div class="flex-col">
          <div class="flex-row group_2 list-item space-x-16" :key="i" v-for="(item, i) in list_kKiRF4c6">
            <img
              class="image_6"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234010093853079242.png"
            />
            <div class="flex-col flex-auto space-y-29">
              <div class="flex-col items-start space-y-8">
                <span class="font_2">维新软件科学园</span>
                <span class="font_3">深圳市南山区中心路3331号</span>
              </div>
              <div class="flex-row justify-end items-baseline space-x-3-reverse">
                <span class="font_4">¥1,870</span>
                <span class="font_3">起/工位/月</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        switch_pO8: [1, 2, 3],
        list_kKiRF4c6: [null, null, null],
      };
    },

    methods: {},
  };
</script>

<style scoped lang="css">
  .page {
    background-color: #ffffff;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
  .header {
    padding: 0.88rem 0.88rem 0.5rem 2.19rem;
    height: 5.38rem;
  }
  .space-y-22 > *:not(:first-child) {
    margin-top: 1.38rem;
  }
  .text {
    color: #000000;
    font-size: 0.94rem;
    font-family: 'Helvetica';
    line-height: 1.13rem;
    letter-spacing: -0.019rem;
  }
  .space-x-4 > *:not(:first-child) {
    margin-left: 0.25rem;
  }
  .image {
    width: 1.06rem;
    height: 0.69rem;
  }
  .image_2 {
    width: 1rem;
    height: 0.69rem;
  }
  .image_3 {
    width: 1.53rem;
    height: 0.72rem;
  }
  .text_2 {
    color: #000000;
    font-size: 1.13rem;
    font-family: 'PingFangSC-Semibold';
    font-weight: 600;
    line-height: 1.56rem;
  }
  .group {
    padding: 0.63rem 1.19rem 1.38rem;
    overflow-y: auto;
  }
  .image_4 {
    border-radius: 0.5rem;
    width: 20.94rem;
    height: 9.38rem;
  }
  .equal-division {
    margin-top: 1.69rem;
  }
  .equal-division-item {
    flex: 1 1 5.25rem;
    padding: 0.25rem 0;
  }
  .space-y-6 > *:not(:first-child) {
    margin-top: 0.38rem;
  }
  .image_5 {
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
  }
  .font_1 {
    font-size: 0.81rem;
    font-family: 'PingFangSC-Regular';
    line-height: 1.13rem;
    color: #000000;
  }
  .group_1 {
    margin-top: 1.44rem;
  }
  .text_3 {
    color: #000000;
    font-size: 0.94rem;
    font-family: 'PingFangSC-Semibold';
    font-weight: 600;
    line-height: 1.31rem;
  }
  .group_2 {
    padding: 0.75rem 0 1rem;
  }
  .image_6 {
    border-radius: 0.25rem;
    width: 6.25rem;
    height: 6.25rem;
  }
  .space-y-29 > *:not(:first-child) {
    margin-top: 1.81rem;
  }
  .space-y-8 > *:not(:first-child) {
    margin-top: 0.5rem;
  }
  .font_2 {
    font-size: 0.94rem;
    font-family: 'PingFangSC-Regular';
    line-height: 1.31rem;
    color: #000000;
  }
  .font_3 {
    font-size: 0.81rem;
    font-family: 'PingFangSC-Regular';
    line-height: 1.13rem;
    color: #888888;
  }
  .space-x-3-reverse > *:not(:last-child) {
    margin-right: 0.19rem;
  }
  .font_4 {
    font-size: 1.06rem;
    font-family: 'PingFangSC-Regular';
    line-height: 1.5rem;
    color: #000000;
  }
  .list-item:not(:last-of-type) {
    border-bottom: solid 0.063rem #dddddd;
  }
  .space-x-16 > *:not(:first-child) {
    margin-left: 1rem;
  }
</style>