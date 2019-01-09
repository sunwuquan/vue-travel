<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :swiper="swiperList"></home-swiper>
    <home-icons :iconsList="iconsList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>
<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeWeekend from './components/Weekend.vue'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      swiperList: [],
      iconsList: [],
      recommendList: [],
      weekendList: [],
      city: ''
    }
  },
  methods: {
    getDate () {
      axios.get('/api/index.json').then(this.getInfoSucc)
    },
    getInfoSucc (res) {
      var repont = res.data
      if (repont.ret) {
        var data = repont.data
        console.dir(data)
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconsList = data.iconsList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  created () {
    this.getDate()
  }
}
</script>
<style scoped>
</style>
