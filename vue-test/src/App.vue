<template>
  <div id="app">
  	<transition name="router-fade" mode="out-in">
  	<keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import 'assets/common.css';
@import '../node_modules/vue-directive-image-previewer/dist/assets/style.css';
html,body{
  margin: 0;
}
#app {
 
}
</style>
