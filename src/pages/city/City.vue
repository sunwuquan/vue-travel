<template>
  <div>
    <city-header></city-header>
    <city-search :citys="citys"></city-search>
    <city-list :citys="citys" :hotcityList="hotcityList" :letter="letter"></city-list>
    <city-alphabet :citys="citys" @change="handleLetterClick"></city-alphabet>
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
      citys: {},
      letter: ''
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
    },
    handleLetterClick (letter) {
      this.letter = letter
    }
  },
  created () {
    this.getDate()
  }
}
</script>
<style lang="stylus" scoped></style>
