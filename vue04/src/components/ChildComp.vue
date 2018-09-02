<template>
  <div class="child">
    <h2>{{ val }}</h2>
  </div>
</template>

<script>
export default {
  name: 'childcomp',
  props: ['val'],
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
  color: #ed0408
}
</style>
