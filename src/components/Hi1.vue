<template>
  <div class="hi">
    {{msg}}-{{$route.params.key}}
    <button @click="goHome">回到首页</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '我是hi1啦'
    }
  },
  methods:{
    goback(){
      this.$router.go(-1);
    },
    goHome(){
      this.$router.push('/');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hi{color:red;margin-top:20px;text-align:center;}
</style>
