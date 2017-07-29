<template>
  <div class="hi">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '我系hi2啦'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hi{color:red;margin-top:20px;text-align:center;}
</style>
