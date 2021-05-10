<template>
    <div>
        <div class="logout">
        <h1>Thank You for visiting our site</h1>
        <h2>Please Visit Again</h2>
        <h2>I hope you enjoy our service</h2>
        <h2>Now, please click on logout button below to logout</h2>
        </div>
        <div class="btn">
        <router-link to='/login'>
      <v-btn primary>Log Out</v-btn></router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'logout',
  data() {
    return {};
  },
};
</script>

<style scoped>
.logout{
    text-align: center;
    margin-top: 100px;
    background-color: silver;
}
.btn{
    margin-top: 50px;
    text-align: center;
    border: 1px light blue;
}
</style>
