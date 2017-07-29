<template>
  <div class="hi">
    {{msg}}
    <p>
        <router-link :to="{name:'Hi1',params:{key:'1818'}}">hi1你搞什么啊</router-link>
        <router-link to="/hi/hi2">hi2你是不是傻</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '你不要吓我啦'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hi{color:red;margin-top:20px;text-align:center;}
</style>
