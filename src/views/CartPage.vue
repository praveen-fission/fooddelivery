<template>
    <div class="cart">
        <h2>This is Cart Page</h2>
        <v-btn @click="totalamount()">Total amount</v-btn> <hr/>
        <div class="check1">Price of food items : {{this.total}}  <hr/> </div>
        <div class="check2">GST : {{this.gst}} <hr/> </div>
        <div class="check3">Delivery Charges: {{this.deliverycharges}} <hr/> </div>
        <div class="check4">Discount: {{this.discount}} <hr/> </div>

<h1><strong>Overall Price : </strong></h1>
<h1><strong>
  {{(this.total + (this.gst*this.total)/100) + this.deliverycharges - this.discount}}</strong></h1>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Cart-Page',
  data() {
    return {
      add: 0,
      sub: 0,
      total: 0,
      gst: 20,
      deliverycharges: 50,
      discount: 10,
    };
  },
  computed: {
    ...mapGetters(['listoflogindetails', 'getcount1', 'getdecount1', 'getcount2',
      'getdecount2', 'getcount3', 'getdecount3', 'gettotal']),
  },
  methods: {
    ...mapActions(['settotalAction']),
    totalamount() {
      const add = (this.getcount1 + this.getcount2 + this.getcount3);
      const sub = (this.getdecount1 + this.getdecount2 + this.getdecount3);
      window.console.log(add);
      window.console.log(sub);
      this.total = add + sub;
      window.console.log(this.total);
      // this.$store.getters.gettotal = (add - sub);
      // window.console.log(this.$store.getters.gettotal);
      this.settotalAction.commit(this.total);
    },
  },
};
</script>

<style scoped>
.cart{
  text-align: center;
  margin-top: 50px;
  width: 600px;
  height: 500px;
  margin-left: 450px;
  border: 1px lightblue;
}
.check1{
  margin-top: 20px;
  margin-bottom: 20px;
}
.check2{
  margin-top: 20px;
  margin-bottom: 20px;
}
.check3{
  margin-top: 20px;
  margin-bottom: 20px;
}
.check4{
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
