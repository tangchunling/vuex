<template>
  <div>
    <div style="height: 55px">
      <mt-search v-model="value" placeholder="搜索"></mt-search>      
    </div>
    <ul>
      <li>
          <router-link to='/type/tuijian'>推荐</router-link>
      </li>
      <li>
          <router-link to='/type/miaosha'>秒杀</router-link>
      </li>
      <li>
          <router-link to='/type/renqi'>人气</router-link>
      </li>
      <li>
          <router-link to='/type/renqi'>分类</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'head',
  data () {
    return {
      value: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul li{width: 25%;text-align: center;float: left}
  ul li a{display: block;padding: 10px 0;}
</style>
