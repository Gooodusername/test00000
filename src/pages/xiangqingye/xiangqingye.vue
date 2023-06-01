<template>
  <div class="flex-col page">
    <div class="flex-col header">
      <div class="flex-row justify-between items-center group">
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
      <div class="flex-row justify-center items-center relative section">
        <img
          class="image_4 pos"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234009834202809352.png"
        />
        <span class="font_1">空间详情</span>
      </div>
    </div>
    <div class="flex-col flex-auto group_2">
      <div class="flex-col space-y-16">
        <div class="flex-col items-start space-y-4">
          <span class="text_2">维新软件科学园</span>
          <span class="font_2">深圳市南山区中心路3331号</span>
        </div>
        <img
          class="image_5"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234009955010780805.png"
        />
      </div>
      <div class="flex-col group_3 space-y-16">
        <span class="self-start font_1">简介</span>
        <span class="font_2 text_3">
          FF办公空间之维新软件科学园，全新一站式办公空间与生活中心。地处深圳湾超级总部基地，与深圳宝安机场这样的国际化交通枢纽链接，使这处办公空间尽享得天独厚的地理优势，助您的事业通达全球。
        </span>
      </div>
      <div class="flex-col group_4 space-y-12">
        <span class="self-start font_1">价格</span>
        <span class="self-start text_4">专属办公室</span>
        <div class="flex-row justify-between">
          <span class="font_2">1 ~ 4 人</span>
          <div class="flex-row space-x-3">
            <span class="font_2">¥2,240</span>
            <span class="font_3">起/工位/月</span>
          </div>
        </div>
        <div class="flex-row justify-between">
          <span class="font_2">5 ~ 10 人</span>
          <div class="flex-row space-x-3">
            <span class="font_2">¥2,180</span>
            <span class="font_3">起/工位/月</span>
          </div>
        </div>
        <div class="flex-row justify-between">
          <span class="font_2">10+ 人</span>
          <div class="flex-row space-x-3">
            <span class="font_2">¥2,120</span>
            <span class="font_3">起/工位/月</span>
          </div>
        </div>
      </div>
      <div class="flex-col justify-start items-center self-center button"><span class="text_5">预约参观</span></div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {};
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
    padding-bottom: 0.19rem;
    height: 5.69rem;
  }
  .group {
    padding: 0.88rem 0.88rem 0.63rem 2.19rem;
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
  .section {
    padding: 0.63rem 1.56rem;
    background-color: #ffffff;
  }
  .image_4 {
    width: 0.63rem;
    height: 1.13rem;
  }
  .pos {
    position: absolute;
    left: 1.56rem;
    top: 50%;
    transform: translateY(-50%);
  }
  .font_1 {
    font-size: 1.13rem;
    font-family: 'PingFangSC-Semibold';
    line-height: 1.56rem;
    font-weight: 600;
    color: #000000;
  }
  .group_2 {
    padding: 0.81rem 1.25rem 1.19rem;
    overflow-y: auto;
  }
  .space-y-4 > *:not(:first-child) {
    margin-top: 0.25rem;
  }
  .text_2 {
    color: #000000;
    font-size: 1.5rem;
    font-family: 'PingFangSC-Semibold';
    font-weight: 600;
    line-height: 2.06rem;
  }
  .font_2 {
    font-size: 0.81rem;
    font-family: 'PingFangSC-Regular';
    line-height: 1.13rem;
    color: #000000;
  }
  .image_5 {
    border-radius: 0.5rem;
    width: 20.94rem;
    height: 12.5rem;
  }
  .group_3 {
    margin-right: 0.44rem;
    margin-top: 2rem;
  }
  .space-y-16 > *:not(:first-child) {
    margin-top: 1rem;
  }
  .text_3 {
    line-height: 1.5rem;
    text-align: left;
  }
  .group_4 {
    margin-top: 2.38rem;
  }
  .space-y-12 > *:not(:first-child) {
    margin-top: 0.75rem;
  }
  .text_4 {
    color: #000000;
    font-size: 0.94rem;
    font-family: 'PingFangSC-Semibold';
    font-weight: 600;
    line-height: 1.31rem;
  }
  .space-x-3 > *:not(:first-child) {
    margin-left: 0.19rem;
  }
  .font_3 {
    font-size: 0.81rem;
    font-family: 'PingFangSC-Regular';
    line-height: 1.13rem;
    color: #888888;
  }
  .button {
    margin-top: 1.5rem;
    padding: 0.63rem 0;
    background-color: #006eff;
    border-radius: 0.25rem;
    width: 10.44rem;
  }
  .text_5 {
    color: #ffffff;
    font-size: 1.06rem;
    font-family: 'PingFangSC-Regular';
    line-height: 1.5rem;
  }
</style>