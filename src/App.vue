<template>
  <div id="app">
    <button @click="handleDialog">弹窗</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    handleDialog () {
      this.$dialog({
        width: '700px',
        height: '300px',
        title: '今日热点',
        name: 'HelloWorld'
      });
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
