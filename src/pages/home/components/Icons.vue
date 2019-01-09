<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icons-img">
            <img class="icons-content" :src="item.imgUrl" alt="">
          </div>
          <p class="icons-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'Icons',
  props: {
    iconsList: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconsList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~@/assets/styles/varibles.styl"
  @import "~@/assets/styles/mixins.styl"
  .icons >>> .swiper-container
    height 0
    padding-bottom 50%
  .icons
    margin-top .1rem
    .icon
      width 25%
      padding-bottom 25%
      height 0
      float left
      position relative
      overflow hidden
      .icons-img
        position absolute
        top 0
        box-sizing border-box
        padding .1rem
        left 0
        right 0
        bottom .44rem
        .icons-content
          height 100%
          display block
          margin 0 auto
      .icons-desc
        position absolute
        left 0
        right 0
        bottom 0
        text-align center
        line-height .44rem
        height .44rem
        color $darkColorText
        ellipsis()
</style>
