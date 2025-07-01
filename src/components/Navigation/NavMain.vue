<template>
  <header>
    <div class="navigation-bar">
        <h1 id="logo">Amentor</h1>

      <nav class="nav-menu">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>


<style scoped>

/* Navigation bar */
.navigation-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 24px;
    padding-right: 24px;
    border-bottom: 2px lightgray;
}

nav ul {
    display: flex;
    gap: 48px;
    list-style: none;
    margin: 0;
    padding: 0;
}

nav ul a {
    color: black;
    text-decoration: none;
}

nav li {
    padding: 0;
    display: block;
}

.no-underline {
  text-decoration: none;
}

nav a.router-link-active {
  font-weight: bold;
  color: #076445; 
  text-decoration: underline;
}


</style>
