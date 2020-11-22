<template>
  <div id="app">
    <nav class="indigo">
      <div class="nav-wrapper container">
        <a href="#" class="brand-logo center">
          Cloud<i class="material-icons">cloud</i>
        </a>
        <a href="#modal-login" class="right">
          <i class="material-icons">login</i>
        </a>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </div>
    </nav>
    <div class="container" style="height:30px;">
    </div>
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: {
  },
  mounted(){

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
    
.input-field input[type=text]:focus {
    border-bottom: 1px solid #003a8c !important;
    box-shadow: 0 1px 0 0 #002766 !important;
}    

input[type=text]:not(.browser-default):focus:not([readonly])+label{
    color: #003a8c;
}
    
.progress {
    background-color: #597ef7;
}  
.progress .determinate {
    background-color: #10239e;    
}
.progress .indeterminate {
    background-color: #10239e;
}
</style>
