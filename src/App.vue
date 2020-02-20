<template>
  <div id="app">
    <router-link exact active-class="font-bold" to="/">Home</router-link>
        <router-link active-class="font-bold" to="/users">Users</router-link>
         <router-link active-class="font-bold" to="/employees">Employees</router-link>
         <router-link active-class="font-bold" to="/holder">Holder</router-link>


        <router-view></router-view> 

  </div>
</template>

<script>

export default {
  name: 'app',
  
  data() {
    return {}
  }

}
</script>

<style src="./assets/css/tailwind.css"></style>
