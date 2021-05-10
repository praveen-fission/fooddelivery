<template>
  <div>
    <div class="sidenav">
      <a><router-link to="/">Home</router-link></a>
      <a><router-link to='/welcome'>Welcome</router-link></a>
      <a><router-link to='/login'>Login</router-link></a>
      <a><router-link to='/testing'>Testing</router-link></a>
      <!-- <a><router-link to="/about">About</router-link></a> -->
      <!-- <a><router-link to='/dashboard'>Dashboard</router-link></a>
      <a><router-link to='/register'>Register</router-link></a>
      <a><router-link to='/userdetails'>UserDetails</router-link></a>
      <a><router-link to='/registerone'>RegisterOne</router-link></a> -->
      <!-- <a><router-link to='/testing'>Testing</router-link></a> -->
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>

<style scoped lang="scss">
$widthy: 10%;
$fonty: 25px;
$lefty: -15px;

.sidenav {
  height: 100%;
  width: $widthy;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #dccceb;
  overflow-x: hidden;
  padding-top: 20px;
}
.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: $fonty;
  color: #818181;
  display: block;
  margin-left: $lefty;
}
.sidenav a:hover {
  color: #f1f1f1;
}
@media screen and (max-width: 700px) {
  .sidenav {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidenav a {float: left;}
  div.content {margin-left: 0;}
}

@media screen and (max-width: 400px) {
  .sidenav a {
    text-align: center;
    float: none;
  }
}
</style>
