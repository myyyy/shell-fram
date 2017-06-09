
<template>
<nav class="col-sm-3 col-md-2 d-none d-sm-block bg-faded sidebar model example-1"　id="example-1">
  <!-- <div id="example-1">
  <button v-on:click="counter += 1">增加 1</button>
  <p>这个按钮被点击了 {{ counter }} 次。</p> -->
  <li v-for="item in models">
    <bottun v-bind:value="item._id" v-on:click="say('hi')">{{ item.name }}</bottun>
  </li>
  </div>
</nav>
</template>

<script>
var apiURL = 'http://127.0.0.1:9995/model/data/all'
export default {
  name: 'example-1',
  data: function () {
    return {
      counter: 0,
      models: null
    }
  },

  created: function () {
    this.fetchData()
  },

  watch: {
    currentBranch: 'fetchData'
  },

  filters: {
    truncate: function (v) {
      var newline = v.indexOf('\n')
      return newline > 0 ? v.slice(0, newline) : v
    },
    formatDate: function (v) {
      return v.replace(/T|Z/g, ' ')
    }
  },

  methods: {
    increment: function () {
      this.counter += 1
      this.$emit('increment')
    },
    fetchData: function () {
      var xhr = new XMLHttpRequest()
      var self = this
      xhr.open('GET', apiURL)
      xhr.onload = function () {
        self.models = JSON.parse(xhr.responseText)
        console.log(self.models[0].html_url)
      }
      xhr.send()
    },
    say: function (message) {
      alert(message)
    }
  }
}

</script>
