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
import axios from 'axios'

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      nodeEnv: '',
      baseUrl: '',
      yojijukugo: '',
      yojijukugoFuri: '',
      description: '',
      descriptionEn: ''
    }
  },
  mounted() {
    this.nodeEnv = process.env.NODE_ENV
    this.baseUrl = this.nodeEnv === 'production' ? '' : 'http://127.0.0.1:5000'
    this.init()
  },
  methods: {
    async init() {
      try {
        const resp = await axios.get(this.baseUrl + '/api/yojijukugo')
        this.yojijukugo = resp.data.yojijukugo
        this.yojijukugoFuri = resp.data.yojijukugo_furi
        this.description = resp.data.description
        this.descriptionEn = resp.data.description_en
      } catch (error) {
        alert(error)
      }
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
