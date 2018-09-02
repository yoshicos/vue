<template>
  <div class="NotFound">
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  data () {
    return {
      msg: '404 FileNotFound'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
