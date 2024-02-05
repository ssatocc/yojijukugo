<template>
  <h1>{{ node_env }}</h1>
  <h3>{{ node_env }}</h3>
  <h3>{{ node_env }}</h3>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      node_env: ''
    }
  },
  mounted() {
    this.node_env = process.env.NODE_ENV
    this.init()
  },
  methods: {
    async init() {
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
