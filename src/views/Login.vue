<template>
    <div>
        <Sidebar />
        Login page
        <v-form v-model="valid" class="formclass">
    <v-container>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="20"
            label="Enter name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >

        <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Normal with hint text"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>

          </v-col>
        <!-- <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            :counter="30"
            label="Password"
            required
          ></v-text-field>
        </v-col> -->

        <!-- <v-col
          cols="12"
          md="4"
        > -->

        <!-- <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Normal with hint text"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field> -->
          <!-- <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            required
          ></v-text-field> -->
        <!-- </v-col> -->
        <a><router-link to='/homepage'>
      <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="testingdata"
    >
      Login
    </v-btn>
        </router-link> </a>
    </v-container>
  </v-form>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Sidebar from '../components/Sidebar.vue';
// import HomePage from '../views/HomePage.vue';

export default {
  data: () => ({
    valid: false,
    show1: false,
    firstname: '',
    password: 'Password',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    rules: {
      required: (value) => !!value || 'Required.',
      min: (v) => v.length >= 8 || 'Min 8 characters',
    },
    //   email: '',
    //   emailRules: [
    //     v => !!v || 'E-mail is required',
    //     v => /.+@.+/.test(v) || 'E-mail must be valid',
    //   ],
  }),
  components: {
    Sidebar,
  },
  methods: {
    ...mapActions(['setlogindetailsAction']),
    ...mapGetters(['listofloggedinusers']),
    testingdata() {
      const userdata = {
        name: this.firstname,
        password: this.password,
      };
      window.console.log(`${userdata.name} and ${userdata.password}`);
      // the below if statement checks only for 1st user(ted),
      // we have to write a loop to iterate through every user
      if (userdata.name === this.$store.state.loggedinusers[0]) {
        this.setlogindetailsAction(userdata);
        window.console.log('He is registered');
      } else {
        window.console.log('not registered');
        alert('You have to register first');
      }
    },
  },
};
alert('You have to register first');;;;;;;
</script>

<style scoped>
.formclass{
    margin-left: 650px;
}
</style>
