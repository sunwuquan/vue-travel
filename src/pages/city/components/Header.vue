<template>
  <div class="header">
    城市选择
    <router-link tag="div" to="/" class="header-left"><span class="iconfont back-icon">&#xe624;</span></router-link>
  </div>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style lang="stylus" scoped>
  @import "~@/assets/styles/varibles.styl"
  .header
    overflow: hidden
    height .86rem
    line-height .86rem
    text-align center
    color #fff
    font-size .32rem
    background $bgColor
    position relative
    .header-left
      position absolute
      width .64rem
      top 0
      left 0
      .back-icon
        display block
        text-align center
        font-size .4rem
</style>
