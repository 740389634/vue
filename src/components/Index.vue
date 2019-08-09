<template>
  <div id="app">
<!--    <div v-for="(value, name, index) in bloor">-->
<!--      {{ index }}. {{ name }}: {{ value .g_name}}-->
<!--    </div>-->
    <div v-for="(va,k) in bloor">
      <span>{{va.g_name}}</span>

    </div>
<!--    <div v-for="(value, name, index) in arr">-->
<!--            {{ index }}. {{ name }}: {{ value .name}}-->
<!--          </div>-->
<!--    <span>{{bloor}}</span>-->
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: [],
      arr: 10,
      bloor:[]
    }
  },

  mounted () {
    axios
      .get('http://localhost/blog/public/show/show1')
      .then(response => (this.arr = response.data))
    axios
      .get('http://localhost/blog/public/show/goods_floor')
      .then(response => (this.bloor = response.data))
      .catch(function (error) { // 请求失败处理
        console.log(error);
      });
  }
}
</script>
<style scoped>

</style>
