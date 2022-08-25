<template>
  <a-carousel class="contCarousel" arrows dots-class="slick-dots slick-thumb">

    <div class="contImg" v-for="item in ip" :key="item.id">
<!--      <span href="" class="bgImg">-->
      <img style="  filter: drop-shadow(5px 5px 5px #333);" class="carouselImg bgImg" :src="item.sprites.front_shiny" :alt="item.name"/>
<!--        </span>-->
    </div>
    <template #customPaging="props">
      <a >
        <img :src="getImgUrl(props.i-1)" :alt="getImgName(props.i-1)"/>
        <!--                <img :src=" fetchSomething()" alt="img"/>-->
      </a>
    </template>
<!--    <div v-for="item in ip" :key="item">-->
<!--      <img :src="getImgUrl(item.id - 1)" :alt="item.name"/>-->
<!--    </div>-->
  </a-carousel>
</template>
<script>
import {defineComponent} from 'vue';

// const baseUrl =
//   'https://raw.githubusercontent.com/vueComponent/ant-design-vue/main/components/carousel/demo/';
export default defineComponent({
  name: 'CarouselComponent',
  props: {
    ip: {
      type: Array,
      default() {
        return []
      },
    }
  },
  setup(props) {
    // eslint-disable-next-line no-console
    // console.log(props.ip)
    const getImgUrl = (i) => {
      // eslint-disable-next-line no-console
      // console.log('xxxxxxxxx>',props.ip[0])
        // .sprites.back_default)
      // eslint-disable-next-line no-console
      // console.log("iiiiiiiiiiiiiiii>",i)
      // console.log("imgxxxxxxxxx>",this.fetchSomething())
      // return `${baseUrl}abstract0${i + 1}.jpg`;
      // return props.ip[(i + 1)].sprites.back_default;
      // if((i+1)%7<0) {
        return props.ip[( i+ 1)%7].sprites.back_default;
      // }
    };
    const getImgName = (i) => {

      // console.log('yyyyyyyyy>',(i+1)%7)
        // if((i+1)%7<0) {
          return props.ip[( i+ 1)%7].name;
        // }
    };


    return {
      getImgUrl,
      getImgName,
    };
  },
  data(){
    return {
      img:[]
      // this.fetchSomething(),
    }
  },
  computed: {
    img2: {
      get() {
        return this.img
        // const toto = this.fetchSomething()
        //    // eslint-disable-next-line no-console
        //    console.log(toto)
        //    return toto
      },

      set(value) {
        this.img = value
        // const toto = this.fetchSomething()
        // eslint-disable-next-line no-console
        // console.log(toto)
        // return toto
      }
    },
  },
  // beforeMount() {
  //   this.fetchSomething()
  // },
  methods: {
     fetchSomething() {
      // const urlMap = this.ip.results.map((el) => Promise.resolve(this.$axios.$get(el.url)))
// new Promise((resolve, reject) =>
      // return await this.$axios.$get('http://icanhazip.com')
      // return res;
      // Promise.all(urlMap).then(res => {
      //   this.ip = res;
      // })
      // const arrUrl = await Promise.all(urlMap)
      // this.img2 = arrUrl
      // this.
      // eslint-disable-next-line no-console
      // console.log('xxxxxxxxxxxx>', arrUrl[0].sprites.back_default)
      // console.log('xxxxxxxxxxxx>', this.ip[0].sprites.back_default)
      // this.img =  toto.map((pok) => pok.sprites.back_default)
      // })
// })
//       this.img = arrUrl
//       return arrUrl
    },
  }
})
;
</script>
<style>

.slick-list {
  text-align: center;
  /*height: 160px;*/
  /*line-height: 160px;*/
  background: aliceblue;
  overflow: hidden;
  justify-content: center !important;
  align-items: center !important;

}
</style>
<style scoped>
.contCarousel {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  /*background: #364d79;*/
  /*border: 1px solid #000;*/
}
.contImg {
  width: 30% !important;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /*background: #364d79;*/
  /*color: #fff;*/
  text-align: center;
  font-size: 30px;
  /*background-image: url('https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png');*/
  /*background-size: 100% 100%;*/
  /*background-repeat: no-repeat;*/
  /*background-position: center;*/
}
.bgImg {
  /*width: 50%;*/
  height: 30% !important;
  background-image: url("https://c.pxhere.com/photos/99/fb/blurred_background_colors_daylight_environment_forest_landscape_leaves_nature-1563687.jpg!d");
  background-repeat: no-repeat;
  background-clip: inherit;
  background-size: cover;
  margin-top:20px !important;
  padding-top:80px !important;
  /*opacity: 0.5;*/
  /*filter: blur(8px);*/
  /*-webkit-filter: blur(8px);*/
  /*background: #fff;*/
  /*border-radius: 4px;*/
  /*overflow: hidden;*/
  /*display: flex;*/
  /*align-items: center;*/
  /*justify-content: center;*/
  /*margin: 0;*/
}
.carouselImg {
  width: 50%;
  height: auto;
  object-fit: cover;
  z-index: 2;
  filter: drop-shadow(5px 5px 5px #222);
  /*width:200px;*/
  /*height:220px;*/
}
/* For demo */
.ant-carousel :deep(.slick-dots) {
  position: relative;
  height: auto;
}

.ant-carousel :deep(.slick-slide img) {
  border: 5px solid #fff;
  display: block;
  margin: auto;
  max-width: 80%;
}

.ant-carousel :deep(.slick-arrow) {
  display: none !important;
}

.ant-carousel :deep(.slick-thumb) {
  bottom: 0px;
}

.ant-carousel :deep(.slick-thumb li) {
  width: 60px;
  height: 45px;
}

.ant-carousel :deep(.slick-thumb li img) {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
  display: block;
}

.ant-carousel :deep .slick-thumb li.slick-active img {
  filter: grayscale(0%);
}
</style>
