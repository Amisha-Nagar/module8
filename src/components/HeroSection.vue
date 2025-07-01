<template>
  <section class="section-hero">
    <div class="hero-content">
        <div>
             <h1>{{ title }}</h1>
             <p>{{ message }}</p>
        </div>
         <div class="hero-illustration">
             <img src="../assets/hero_illustration.svg" alt="Illustration of mountains and flowers">
        </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  props: { 
    title: String,
    message: String
 },
};
</script>

<style scoped>

.section-hero {
    width: 100%;
    padding: 24px 24px;
    margin: 0;
    border-radius: 0;
    background: #E5F0ED;
}

 .hero-content {
    display: flex;
    gap: 16px;
    margin: 0;
    flex-direction: row;
    align-items: center;
    text-align: left;
    padding: 48px 48px;
}

  .hero-illustration {
      display: flex;
      padding-right: 48px;
      justify-content: flex-end; 
      align-items: center;
      width: 800px;
}
</style>