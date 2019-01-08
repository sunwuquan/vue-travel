<template>
  <div class="header">
    <div class="header-left"><span class="iconfont back-icon">&#xe624;</span></div>
    <div class="header-input" contenteditable="true"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
    <div class="header-right">城市<span class="iconfont arrow-icon">&#xe64a;</span></div>
  </div>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style scoped lang="stylus">
@import "~@/assets/styles/varibles.styl"
  .header
    display flex
    line-height .86rem
    color #fff
    background $bgColor
    .header-left
      width .64rem
      float left
      .back-icon
        display block
        text-align center
        font-size .4rem
    .header-input
      flex 1
      color #ccc
      height .64rem
      line-height .64rem;
      background #ffffff
      border-radius .1rem
      margin-top .12rem
      padding-left .2rem
      height .64rem;
      margin-left .2rem
    .header-right
      width 1.24rem;
      text-align center
      float right
      .arrow-icon
        font-size .24rem
</style>
