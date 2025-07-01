<template>
  <section id="about" class="section-block">
        <div>
          <h2>{{title}}</h2>
        </div>
        <div class="section-content">
          <img src="../assets/amishanagarprofilepicture.jpg" 
          alt="Headshot of Amisha Nagar">
          <p>{{message}}</p>
        </div>
     </section>
</template>

<script>
export default {
  name: 'SectionBlockImgLeft',
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
    max-width: 400px;
    border-radius: 100%;
}
</style>