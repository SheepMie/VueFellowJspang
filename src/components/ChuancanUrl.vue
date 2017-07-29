<template>
  <div class="hi">
    {{msg}}-{{$route.params.newid}}-{{$route.params.topic}}
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '我是url啦'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hi{color:red;margin-top:20px;text-align:center;}
</style>
