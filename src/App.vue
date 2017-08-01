<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>
      <router-link to="/">hello啊sir</router-link>|
      <router-link to="/hi">hi啥子hi啊</router-link>|
      <router-link to="/chuancan/123456/哈哈">url传个参数看看</router-link>
      <router-link to="/goparams/33333/love">url传个参数看看</router-link>
      <router-link to="/home">alias别名</router-link>
      
    </p>
    <transition name="fade">
      <router-view ></router-view>
    </transition>
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

.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
