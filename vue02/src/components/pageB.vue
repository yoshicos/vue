<template>
  <div class="pageB">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <router-link v-bind:to="{ name: 'page-A', params: { sendMsg: 'from B to A returned' }}">Goto Page A</router-link>
      <li>{{ $route.params.sendMsg }}</li>
      </li>
      <li>
        <router-link to="/">return Top</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'pageB',
  data () {
    return {
      msg: 'Welcome to pageB on router'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
