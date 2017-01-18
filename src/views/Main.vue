<template>
  <div>
    <Headnav></Headnav>
    <Goods></Goods>
  </div>
</template>

<script>
import Headnav from '../components/Head.vue'
import Goods from './Goods.vue'

export default {
  name: 'main',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{ Headnav, Goods }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
