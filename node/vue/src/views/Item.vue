<template>
  <div>
    <Row style="height: 100px" align="middle">
      <!--      <h1> itemId:[{{ itemId }}]</h1>-->
      <Col span="8" offset="8">
        <h1> title </h1>
      </Col>
    </Row>
    <Row class="user-row" style="height: 40px;margin-bottom: 10px;background-color: aquamarine;padding: 5px">
      <Col span="1" offset="21" style="background-color: rgba(225,5,56,0.15);">
        <Icon type="logo-octocat" size="25"/>
      </Col>
      <Icon type="ios-cart-outline" size="25"/>
    </Row>

    <Row style="background-color: #e2eae2;height: 400px">
      <Col v-if="loading" class="demo-spin-col" span="8" offset="8" style="background-color: coral">
        <Spin fix>
          <Icon type="ios-loading" size=18 class="demo-spin-icon-load"></Icon>
          <div>Loading</div>
        </Spin>
      </Col>

      <Col v-if="item" span="4" offset="4">
<!--        <img src="item.photo" height="180" width="180">-->
        <img src="../../images/logo.png" height="180" width="180">
      </Col>
      <Col v-if="item" span="8" style="height: auto;background-color: coral">
        <div style="background-color: brown;display: block">
          <h1>{{ item.name }}</h1>
        </div>

        <div style="background-color: #05ef1a">
          <Form :label-width="80" :label-position="left">
            <FormItem label="价格">
              <Input v-model="item.price" readonly style="width: 150px;"/>
            </FormItem>

            <FormItem label="库存">
              <Input v-model="item.count" readonly style="width: 150px;"/>
            </FormItem>

            <FormItem label="购买数量">
              <InputNumber v-model="amount" controls-outside :max="item.count" :min="1"></InputNumber>
            </FormItem>
            <FormItem>
              <Button type="primary" to="/test">立即购买</Button>
            </FormItem>
          </Form>

        </div>



      </Col>
    </Row>

  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    // item: Object
    itemId: String
  },
  data: function () {
    return {
      loading: false,
      item: null,
      amount: 1
    }
  },
  created() {
    this.fetchItemDetail();
  },
  methods: {
    fetchItemDetail() {
      this.loading = true;
      // todo fetch item detail from backend
      setTimeout(() => {
        this.item = {id: 1, name: 'item1', count: 100, price: 100,};
        this.loading = false;
      }, 1000);

    },
  }
}
</script>

<style scoped>
.demo-spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
  from { transform: rotate(0deg);}
  50%  { transform: rotate(180deg);}
  to   { transform: rotate(360deg);}
}
</style>