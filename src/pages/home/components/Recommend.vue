<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Recommend',
  props: {
    recommendList: Array
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~@/assets/styles/mixins.styl"
  .title
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem
  .item
    display flex
    height 2rem
    overflow hidden
    .item-img
      width 2rem
      height 2rem
      padding .1rem
    .item-info
      flex 1
      min-width 0
      padding .1rem
      .item-title
        margin-top .2rem
        height .44rem
        line-height .44rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .4rem
        color #ccc
        ellipsis()
      .item-button
        background #ff9300
        padding 0 .2rem
        border-radius .06rem
        margin-top .2rem
</style>
