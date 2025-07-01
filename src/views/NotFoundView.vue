<template>
  <div class="not-found">
    <h1>404: Page Not Found</h1>
    <p>The page you're looking for doesn't exist</p>
    <div class="gap">
        <router-link class="btn" to="/">Go back Home</router-link>
    </div>
  </div>
</template>

<script>
export default { name: 'NotFoundView' }
</script>

<style scoped>
.not-found {
    background: rgb(255, 228, 228);
    text-align: center;
    padding: 48px 48px;
}

.btn {
  background-color: white; 
  color: black;
  padding: 16px 16px;
  border: none;
  border-radius: 20px;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  font-family: "Lora", sans-serif;
  transition: background-color 0.3s ease-in-out;
  margin-top: 24px;
}

.btn:hover {
  background-color: rgb(42, 42, 42); 
  box-shadow: 0px 4px 4px 0px rgba(4, 35, 25, 0.50);
}

.gap {
    margin-top: 48px;
}
</style>