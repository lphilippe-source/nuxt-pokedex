<template>
  <div>
   <HeaderComponent/>
    <NavigationMenuComponent/>
  <nuxt/>
<FooterComponent/>
  </div>
</template>
<script>
import HeaderComponent from '../components/header.vue'
import FooterComponent from '../components/footer.vue'
import NavigationMenuComponent from "@/components/navigationMenu";
export default{
  name:"DefaultLayout",
  components:{
    HeaderComponent,
    FooterComponent,
    NavigationMenuComponent
  },
  }
</script>
