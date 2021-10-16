<template>
  <div style="background-color: #eeeeee;">
    <h1>{{ msg }}</h1>
    <Row>
      <Card class="Card">
        <div style="text-align:center">
          <img src="../../images/logo.png">
          <h3>A high quality UI Toolkit based on Vue.js</h3>
        </div>
      </Card>
    </Row>
  </div>
</template>

<script>
export default {
  name: "Test",
  props: {
    msg: String
  },
  data() {
    return {}
  },
  methods:{
    getItemDetailById(id) {
      return {item: id}
    }
  }

}
</script>

<style scoped>

</style>