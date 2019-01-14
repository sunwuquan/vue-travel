<template>
  <div>
    <div class="search">
      <input type="text" placeholder="输入城市名或拼音" class="search-input" v-model="searchInput">
    </div>
    <div class="search-content" ref="search" v-show="searchInput">
      <ul>
        <li class="search-item border-bottom" v-for="item in list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import {mapActions} from 'vuex'
export default {
  name: 'Search',
  props: {
    citys: Object
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  data () {
    return {
      searchInput: '',
      list: [],
      timer: null
    }
  },
  watch: {
    searchInput () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.searchInput) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.citys) {
          this.citys[i].forEach((value) => {
            if (value.spell.indexOf(this.searchInput) > -1 || value.name.indexOf(this.searchInput) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapActions(['changeCity'])
  }
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
  .search-content
    overflow hidden
    position absolute
    z-index 1
    background #eee
    top 1.58rem
    left 0
    right: 0
    bottom 0
    .search-item
      line-height .62rem
      padding-left .2rem
      color #666
      background #ffffff
</style>
