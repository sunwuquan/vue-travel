<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :citys="citys" :hotcityList="hotcityList"></city-list>
    <city-alphabet :citys="citys"></city-alphabet>
  </div>
</template>
<script>
import axios from 'axios'
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/CityList.vue'
import CityAlphabet from './components/Alphabet.vue'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      hotcityList: [],
      citys: {}
    }
  },
  methods: {
    getDate () {
      axios.get('/api/citys.json').then(this.getCitySuss)
    },
    getCitySuss (res) {
      res = res.data
      if (res.ret) {
        const data = res.data
        this.hotcityList = data.hotCities
        this.citys = data.cities
        console.dir(data)
      }
    }
  },
  created () {
    this.getDate()
  }
}
</script>
<style lang="stylus" scoped></style>
