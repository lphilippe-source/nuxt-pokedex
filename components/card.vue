<template>
  <a-card hoverable style="width: 250px;height:340px" class="container">
    <template #cover>
      <img alt="example" :src="cover"/>
    </template>
    <a-card-meta title="Europe Street beat">
      <template #description>www.instagram.com</template>
    </a-card-meta>
  </a-card>
</template>
<script>

const CardComponent = {
  name: 'CardComponent',
  // props: {
  //   type: Object,
  //   default: {
  //     cover: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
  //     title: 'Europe Street beat',
  //     description: 'www.instagram.com'
  //   }
  // }
  props: {
    // type: String,
    cover: String,
   // default:
   //    cover: {
   //      type: String,
        // default: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'

      // title: {
      //   type: String,
      //   default: 'Europe Street beat'
      // },
      // description: {
      //   type: String,
      //   default: 'www.instagram.com'
      // }
    // }
  }
}
export default CardComponent
// eslint-disable-next-line no-console
// console.log('dataCard---->', CardComponent)
// console.log('dataCard---->',cover)

</script>
<style>
.container {
  width: 100%;
  align-content: center;
  justify-content: center;
}
</style>
