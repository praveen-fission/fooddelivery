// This page is just for testing purpose
<template>
    <div>
        <Sidebar />
        <div class="sideclass">
        </div>
        <div class="headerclass">
        <v-toolbar dark color="#162130" style="height:10vh;">
      <v-toolbar-title class="white--text">
        <div class="mamae">
          <!-- <img class="logo" src="https://vuetifyjs.com/apple-touch-icon-180x180.png" width="50px"> -->
          <!-- <img class="logo" src="../src/assests/cartlogo.png" width="40px" height="40px"> -->
          <!-- <v-img
          :src="require('../assets/cartlogo.png')"
          class="my-3"
          contain
          height="40"
          width="40"
        /> -->
        </div>
      </v-toolbar-title>

      <v-toolbar-items>
        <router-link to='/myaccount'>
        <v-btn text>My Account</v-btn></router-link>
        <v-btn text class="left">
            <v-img
          :src="require('../assets/cartlogo.png')"
          class="my-3"
          contain
          height="40"
          width="40"
        />
            Go to Cart</v-btn>
            <h1 class="middle">Welcome</h1>
      </v-toolbar-items>

      <v-spacer></v-spacer>
      <v-btn text>Log Out</v-btn>
       </v-toolbar>
        </div>
        <v-container class="grey lighten-5">
    <v-row
      class="mb-6"
    >
      <v-col
        sm="5"
        md="6"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <v-img
          :src="require('../assets/rest1.jpg')"
          class="my-3"
          contain
          height="400"
          width="100%"
        /> Name: Apennine Peninsula <br/>
        Rating : 4.7 (3.7k votes) <br/>
        Cuisine: Italian
        <!-- <v-btn class="btn"
  elevation="2"
>Explore</v-btn> -->
<div class="text-center">
    <v-dialog
      v-model="dialog"
      width="900"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
          class="btn"
        >
          Explore
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Food Items
        </v-card-title>

        <v-card-text>
          Italian Pasta<v-btn class="btn"
  elevation="2" @click="incrementbyCost1()"
>+1</v-btn> Price:{{this.getcount1-(-this.getdecount1)}}
Total Price: <strong>{{this.getcount1}} {{this.getdecount1}}</strong>
<v-btn class="btn1" @click="decrementbyCost1()">-1</v-btn>
<hr/>
        </v-card-text>

        <v-card-text>
          Fresh tomato soup<v-btn class="btn"
  elevation="2" @click="incrementbyCost2()"
>+1</v-btn> Price:{{this.getcount2-(-this.getdecount2)}}
Counter: <strong>{{this.getcount2}} {{this.getdecount2}}</strong>
<v-btn class="btn1" @click="decrementbyCost2()">-1</v-btn>
 <hr/>
        </v-card-text>

        <v-card-text>
          Italian cheese Pizza<v-btn class="btn"
  elevation="2" @click="incrementbyCost3()"
>+1</v-btn> Price:{{this.getcount3-(-this.getdecount3)}}
Counter: <strong>{{this.getcount3}} {{this.getdecount3}}</strong>
<v-btn class="btn1" @click="decrementbyCost3()">-1</v-btn>
 <hr/>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Check out
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import Sidebar from '../components/Sidebar.vue';

export default {
  name: 'Welcome',
  components: {
    Sidebar,
  },
  data() {
    return {
      dialog: false,
      count1: 200,
      decount1: 200,
      count2: 150,
      decount2: 150,
      count3: 70,
      decount3: 70,
    };
  },
  computed: {
    ...mapGetters(['getcount1', 'getdecount1', 'getcount2', 'getdecount2', 'getcount3', 'getdecount3']),
  },
  methods: {
    ...mapActions(['setcountAction1', 'setdecountAction1', 'setcountAction2', 'setdecountAction2', 'setcountAction3', 'setdecountAction3']),
    incrementbyCost1() {
      window.console.log('increment by cost function is excuted');
      window.console.log(this.count1);
      this.setcountAction1(this.count1);
      // this.$store.dispatch(setcountAction, this.count);
    },
    decrementbyCost1() {
      window.console.log('decrement function is executed');
      this.setdecountAction1(this.decount1);
    },
    incrementbyCost2() {
      window.console.log('decrement function is executed');
      this.setcountAction2(this.count2);
    },
    decrementbyCost2() {
      window.console.log('decrement function is executed');
      this.setdecountAction2(this.decount2);
    },
    incrementbyCost3() {
      window.console.log('decrement function is executed');
      this.setcountAction3(this.count3);
    },
    decrementbyCost3() {
      window.console.log('decrement function is executed');
      this.setdecountAction3(this.decount3);
    },
  },
};
</script>

<style scoped>
.sideclass{
    margin-left: 500px;
}
.headerclass{
    margin-left: 150px;
}
.left{
    margin-left: 40px;
}
.middle{
    text-align: center;
    margin-left: 250px;
}
.btn{
    margin-left: 300px;
}
.btn1{
  margin-left: 30px;
}
</style>
