<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <button v-on:click="request">読み込み</button>
    <div>{{ ajaxdata }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data: function() {
    return {
      ajaxdata: ''
    }
  },
  methods: {
    get_ajax(url) {
      return axios.get(url)
      .then((res) => {
        this.ajaxdata = res.data;
        delete this.ajaxdata['time'];
        console.log('axios end');
      });
    },
    request() {
      console.log('request start');
      this.get_ajax('http://api.thni.net/jzip/X0401/JSON/064/0941.js')
      .then((ret) => {
        console.log('request axios end');
      });
      console.log('request end');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
