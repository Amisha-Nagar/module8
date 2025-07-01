<template>
  <div>
    <SectionParagraph title="Get in touch with me" message="Send an to amisha@gmail.com with the following:" 
    listitem1="A short message about what kind of mentorship you are looking for. Expect a reply to your email within 2 days to schedule a coffee chat." 
    listitem2="or, if you're looking for design feedback, send me your portfolio, CV, and LinkedIn profile. You'll receive it within 2 weeks"/>
    <FooterMain/>

  </div>
</template>

<script>

import SectionParagraph from '@/components/SectionParagraph.vue';
import FooterMain from '@/components/FooterMain.vue';


export default {
  components: {
    SectionParagraph,
    FooterMain    
  }
};
</script>