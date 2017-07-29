<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>
      <router-link to="/">hello啊sir</router-link>|
      <router-link to="/hi">hi啥子hi啊</router-link>|
      <router-link to="/chuancan/123456/哈哈">url传个参数看看</router-link>
      
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
