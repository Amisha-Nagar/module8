# my-vue-app

How I implemented Vue Router:
- I installed Vue CLI, then npm install and then npm run serve to see my view application. Then in the src folder I added router>index.js for create and import all the different views and routes, for the Home page, About page, and Contact page, with <router-link> used in the NavMain component.

What pages I created and how they are structured:
I created the following pages based off of the website I had created using html, css and js in my previous few assignments:
- Home: Which is the HomeView.vue
- About: Which is the AboutPage.vue, which has a secondary nav which the styles embedded in this view (has a nested routes for about me, i.e AboutMeView.vue and about Amentor, i.e AboutUsView.vue)
- Contact: Which is the ContactView.vue
- NotFoundView.vue: which contains the error 404 fallback

Inside the views, you will see some of the components that I created, namely:
- NavMain - main navigation used for Home, About and Contact and routing
- FooterMain - Footer used on all views
- HeroSection - Used on the HomeView
- And a few additional layout type components that I used in the other pages.

Any challenges or interesting insights from the process:
- Had a few errors when using npm run serve, mainly due to differing file names or missing imports.
- I found this assignment easier than the last one, especially after watching the tutorials and I kind of figured out that inside <template> tag is what you would add on html file and inside <style> tag is what you would add on an css file which made it so easy to create all the components and views, because I could just copy the html and css from my previous assignments.
- I also struggled with creating a mutli-use component for SectionBlock with option to have image on either left or right, or just replacing the image itself in the views because current the img is living within the component itself, so I know this is not best practice so I created two separate components to accomplish this and have two different images on the About Me vs About Amentor pages.

Why routing matters in single-page applications (SPAs):
I think its because that it allows for faster reload of a page.