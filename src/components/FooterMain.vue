<template>
  <footer>
    <p>{{ copyright }}</p>
  </Footer>
</template>

<script>
export default {
  name: 'FooterMain',
  data() {
    return { copyright: '© 2025 Amentor' };
  }
};
</script>

<style scoped>
footer {
    text-align: center;
    padding-top: 56px;
    background-color: white;
    color: black;
}
</style>