<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <el-date-picker v-model="dtime" type="date" placeholder="日付を選択してください" v-bind:picker-options="pickerOptions" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      dtime: '',
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [{
          text: '今日',
          onClick (picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: '昨日',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: 'A week ago',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }]
      }
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
