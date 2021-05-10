<template>
    <div>
        <div class="myacc">
        <h1>This is my account page</h1>
        <h2>Where user can change his username and password</h2>
        </div>
        <!-- <div class="testing">
          {{this.loggedinusers.name}} {{this.loggedinusers.password}}
        </div> -->
        <!-- <v-btn @click="displaydata()">Get name and password</v-btn>
         <div class="testingname">
          {{this.listoflogindetails.name}}
        </div>

        <div class="testingpassword">
          {{this.listoflogindetails.password}}
        </div> -->

        <div>
          <v-form v-model="valid" class="formclass">
    <v-container>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field class="nameclass"
            v-model="firstname"
            :rules="nameRules"
            :label="this.listoflogindetails.name"
            :counter="20"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >

        <v-text-field class="passwordclass"
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            hint="At least 8 characters"
            :label="this.listoflogindetails.password"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>

          </v-col>

        <router-link to='/login'>
      <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="displaydata"
    >
      Change Credentials
    </v-btn>
        </router-link>
    </v-container>
  </v-form>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'MyAccount',
  data: () => ({
    valid: false,
    show1: false,
    firstname: '',
    password: '',
    example: '',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    rules: {
      required: (value) => !!value || 'Required.',
      min: (v) => v.length >= 8 || 'Min 8 characters',
    },
  }),
  computed: {
    ...mapGetters(['listoflogindetails']),
  },
  methods: {
    ...mapActions(['setlogindetailsAction']),
    ...mapGetters(['listofloggedinusers']),
    displaydata() {
      // window.console.log(this.$store.getters.listofloggedinusers[0]);
      this.example = this.password;
      window.console.log('this is my account page');
      window.console.log(this.example);
      this.$store.getters.listoflogindetails.password = this.example;
      window.console.log(this.$store.getters.listoflogindetails.name);
      window.console.log(this.$store.getters.listoflogindetails.password);
      this.setlogindetailsAction(this.password);
      alert('Your password has changed successfully');
    },
  },
};
</script>

<style scoped>
.formclass{
  margin-left: 500px;
}
.formclass .nameclass{
  margin-top: 20px;
}
.formclass .passwordclass{
  margin-top: 50px;
}
.testingname{
  margin-left: 550px;
}
.testingpassword{
  margin-left: 550px;
}
.myacc{
  text-align: center;
}
</style>
