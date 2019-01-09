<template>
  <div class="search">
    <input type="text" placeholder="输入城市名或拼音" class="search-input">
  </div>
</template>
<script>
export default {
  name: 'Search'
}
</script>
<style lang="stylus" scoped>
  @import "~@/assets/styles/varibles.styl"
  .search
    padding 0 .1rem
    height .72rem
    background $bgColor
    .search-input
      height .6rem
      line-height .6rem
      width 100%
      border-radius .06rem
      text-align center
      color #666
      box-sizing border-box
      padding 0 .1rem
</style>
