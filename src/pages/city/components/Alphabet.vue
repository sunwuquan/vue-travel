<template>
  <ul class="list">
    <li class="item" v-for="(item, key) in citys" :key="key">{{key}}</li>
  </ul>
</template>
<script>
export default {
  name: 'Alphabet',
  props: {
    citys: Object
  }
}
</script>
<style lang="stylus" scoped>
  @import "~@/assets/styles/varibles.styl"
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    right 0
    top 1.58rem
    bottom 0
    text-align center
    width .4rem
    .item
      line-height .4rem
      color $bgColor
</style>
