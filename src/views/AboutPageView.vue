<template>
  <div>
    <nav>
      <router-link to="/aboutme">About me</router-link>
      <router-link to="/aboutus">About Amentor</router-link>
      </nav>
    <router-view />
  </div>
</template>

<script>
export default { name: 'AboutPage' }
</script>


<style scoped>
nav {
  padding: 16px;
  background: #076445;
  display: flex;
  justify-content: center;
}

nav a {
  color: white;
  margin: 16px;
  text-decoration: none;
}

nav a.router-link-active {
  text-decoration: underline;
}
</style>