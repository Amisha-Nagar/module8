<template>
  <div id="app">
    <NavigationNavMain />
    <router-view />
  </div>
</template>

<script>
import NavigationNavMain from './components/Navigation/NavMain.vue';
export default {
  name: 'App',
  components: {
    NavigationNavMain
  }
};
</script>

