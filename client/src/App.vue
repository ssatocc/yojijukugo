<template>
  <h1>
    <ruby>
      {{ yojijukugo }}
      <rt>{{ yojijukugoFuri }}</rt>
    </ruby>
  </h1>
  <h3>{{ description }}</h3>
  <h3>{{ descriptionEn }}</h3>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      nodeEnv: '',
      yojijukugo: '日進月歩',
      yojijukugoFuri: 'にっしんげっぽ',
      description: 'たえまなく、どんどん進歩すること。',
      descriptionEn: 'Continually make progress.'
    }
  },
  mounted() {
    this.nodeEnv = process.env.NODE_ENV
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
