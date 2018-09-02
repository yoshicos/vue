<template>
  <div class="pageA">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <router-link v-bind:to="{ name: 'page-B', params: { sendMsg: 'from A to B jumped' }}">Goto Page B</router-link>
      </li>
      <li>
        <button v-on:click="jumpB">Goto Page B</button>
      </li>
      <li>{{ $route.params.sendMsg }}</li>
      <li>
        <router-link to="/">return Top</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'pageA',
  data () {
    return {
      msg: 'Welcome to pageA on router'
    }
  },
  methods: {
    jumpB () {
      this.$router.push({ name: 'page-B', params: { sendMsg: 'from A to B button jumped' }})
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
