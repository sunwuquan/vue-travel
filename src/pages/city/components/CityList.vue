<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentcity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item in hotcityList" :key="item.id" @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) in citys" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" @click="handleCityClick(list.name)" v-for="list in item" :key="list.id">{{list.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import {mapState, mapActions} from 'vuex'
export default {
  name: 'CityList',
  computed: {
    ...mapState({
      currentcity: 'city'
    })
  },
  props: {
    hotcityList: Array,
    citys: Object,
    letter: String
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapActions(['changeCity'])
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>
<style lang="stylus" scoped>
  .border-topbottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .border-bottom
  &:before
    border-color #ccc
  .list
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    .title
      line-height .54rem
      background #eee
      font-size .26rem
      padding-left .2rem
      color #666
    .button-list
      padding .1rem .6rem .1rem .1rem
      overflow hidden
      .button-wrapper
        width 33.33%
        float left
        .button
          text-align center
          margin .1rem
          padding .1rem 0
          border-radius .06rem
          border .02rem solid #ccc
    .item-list
      .item
        line-height .76rem
        color #666
        padding-left .2rem
</style>
