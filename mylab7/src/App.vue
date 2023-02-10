<script>
  import { RouterLink, RouterView } from 'vue-router'
  import HelloWorld from './components/HelloWorld.vue'
  import { ref } from 'vue'
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
        rail: true,
      }
    },
  }
 
</script>


<template>
  <div style="padding-left: 0px;">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">STD-REG</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"> ระบบลงทะเบียน เพิ่ม-ถอนรายวิชา</a>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
   <div >
    <v-card>
      <v-layout>
        <v-navigation-drawer
          class="bg-dark"
          theme="dark"
          permanent
          style="margin-top:55px"
        >
          <v-list color="transparent">
            <RouterLink to="/">
              <v-list-item prepend-icon="mdi-view-dashboard" title="HOME"></v-list-item>
            </RouterLink>
            <RouterLink to="/register">
              <v-list-item prepend-icon="mdi-account-box" title="ลงทะเบียนเรียน"></v-list-item>
            </RouterLink>
            <RouterLink to="/subject">
              <v-list-item prepend-icon="mdi-gavel" title="รายละเอียดวิชาเรียน"></v-list-item>
            </RouterLink>
            
          </v-list>

          <template v-slot:append>
            <div class="pa-2">
              <v-btn block>
                Logout
              </v-btn>
            </div>
          </template>
        </v-navigation-drawer>
        <v-main style="padding-left:300px; padding-right: 30px; padding-top: 20px; padding-bottom: 30px;">
          <RouterView />
        </v-main>
      </v-layout>
    </v-card>
   </div>
  
</template>

<style scoped>
</style>

  <!-- <header>
    <div class="wrapper text-center">
      <HelloWorld msg="You did it!" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <div>
    
  </div> -->