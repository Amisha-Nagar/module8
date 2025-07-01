<template>
  <section id="about" class="section-block">
        <div>
          <h2>{{title}}</h2>
        </div>
        <div class="section-content">
          <p>{{message}}</p>
          <img src="../assets/tom-ramain-BenZtI1M5MA-unsplash.jpg" 
          alt="Mountain">
        </div>
     </section>
</template>

<script>
export default {
  name: 'SectionBlockImgRight',
  props: { 
    title: String,
    message: String
 },
};
</script>

<style scoped>

.section-block {
    width: 100%;
    margin: 0;
    border-radius: 0;
    background: #E5F0ED;
    flex-direction: row;
    align-items: center;
    text-align: center;
    padding: 32px 48px;
}

.section-content {
    display: flex;
    margin: 0;
    text-align: left;
    flex-direction: row;
    align-items: center;
    padding-right: 56px;
    gap: 140px
}

img {
    width: auto;
    max-width: 300px;
    border-radius: 100%;
}
</style>