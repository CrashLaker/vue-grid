<template>
  <div id="navbar-menu">
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
  </div>
</template>


<script>
export default {
  name: "Navbar-menu"
};
</script>