<template>
    <section class="section-block">
         <h2>{{title}}</h2>
         <div class="section-body">
         <p>{{message}}</p>
         <ul class="custom-markers">
           <li>{{listitem1}}</li>
           <li>{{listitem2}}</li>
        </ul>
          </div>
    </section>
</template>

<script>
export default {
  name: 'SectionParagraph',
  props: { 
    title: String,
    message: String,
    listitem1: String,
    listitem2: String
 },
};
</script>

<style scoped>

.section-body {
    width: 100%;
    margin: 0;
    border-radius: 0;
    align-items: center;
    text-align: left;
    background: white;
    padding-right: 24px;
}

.section-block {
    width: 100%;
    margin: 0;
    border-radius: 0;
    background: white;
    gap: 24px;
    flex-direction: row;
    align-items: center;
    text-align: center;
    padding: 48px 48px;
}

ul.custom-markers li {
    list-style: none;      
    position: relative;
    padding-left: 36px;
}

ul.custom-markers li::before {
    content: "📌";          
    position: absolute;
    left: 0;
}
</style>