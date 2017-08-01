<template>
  <div class="hi">
    {{msg}}
    	
    <button @click="goback">后退</button>
  </div>
  
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '我系hi2啦'
    }
  },
  methods:{
    goback(){
      this.$router.go(-1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hi{color:red;margin-top:20px;text-align:center;}
</style>
