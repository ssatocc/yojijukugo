<template>
  <h1>
    <ruby>
      {{ yojijukugo }}
      <rt>{{ yojijukugo_furi }}</rt>
    </ruby>
  </h1>
  <h3>{{ description }}</h3>
  <h3>{{ description_en }}</h3>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      node_env: '',
      yojijukugo: '日進月歩',
      yojijukugo_furi: 'にっしんげっぽ',
      description: 'たえまなく、どんどん進歩すること。',
      description_en: 'Continually make progress.'
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
