<template>
  <div class="container">
    <!--    <HeaderComponent/>-->
    <!--    <NavigationMenuComponent/>-->
    <CarouselComponent :ip="ip"/>
    <div class="news">
      <p class="list">
        <CardComponent class="card" v-for="cover in covers" :key="cover.cover" :cover="cover.cover"/>
      </p>
      <!--      <p class="list">-->
      <!--      <CardComponent  class="card" v-for="cover in covers" :key="cover.cover" :cover="cover.cover"/>-->
      <!--       </p>-->
      <!--      <p class="list">-->
      <!--        <CardComponent class="card" v-for="cover in covers" :key="cover.cover" :cover="cover.cover"/>-->
      <!--      </p>-->
      <!--      <p>{{ ip }}</p>-->
    </div>
    <!--    <FooterComponent/>-->
  </div>
</template>

<script>

// import HeaderComponent from '../components/header.vue'
import CarouselComponent from '../components/carousel.vue'
// import FooterComponent from '../components/footer.vue'
import CardComponent from '../components/card.vue'
import NavigationMenuComponent from '../components/navigationMenu.vue'


export async function fetchMethod($axios, url) {
  const result = await $axios.$get(url)
    .then((i) => {
      return i.results.map((el) => Promise.resolve($axios.$get(el.url)))
    })
  const ip = await Promise.all(result)
  // .then((ip)=>{
  //   // eslint-disable-next-line no-console
  console.log('ip---->', ip)
  //   this.addPokemonData(ip)

  // console.log('ip---->',this.pokemon)
  // })
  return {ip}
}

const index = {
  name: 'IndexPage',
  components: {
    // HeaderComponent,
    CarouselComponent,
    // FooterComponent,
    CardComponent,
    NavigationMenuComponent,
  },
  layout(context) {
    return 'DefaultLayout'
  },
  data() {
    return {
      covers: [
        {
          cover: "pok1.png",
          // title: 'Europe Street beat',
          // description: 'The Armor Pokémon Tyranitar Is Now Available in Pokémon UNITE'
        },
        {
          cover: "pok2.png",
          // title: 'Europe Street beat',
          // description: 'The Armor Pokémon Tyranitar Is Now Available in Pokémon UNITE'
        },
        {
          cover: "pok3.png",
          // title: 'Europe Street beat',
          // description: 'The Armor Pokémon Tyranitar Is Now Available in Pokémon UNITE'
        },
        {
          cover: "pok4.png",
          // title: 'Europe Street beat',
          // description: 'The Armor Pokémon Tyranitar Is Now Available in Pokémon UNITE'
        },
      ],
      ip: this.ip
    }
  },
  computed: {
    pokemon() {
      return this.$store.state.pokemon;
    },
  },
  methods: {
    addPokemonData() {
      console.log('thisIPxxxxxxxxxxxxxxxxxx>', this.ip)
      this.$store.commit('addPokemonData', this.ip)
    },
  },
  mounted() {
    this.addPokemonData()
  },
  // methods: {
  //   async fetchSomething() {
  //     const ip = await this.$axios.$get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=7')
  //     this.ip = ip
  //   }
  // },
  async asyncData({$axios}) {
    // }

    const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=7'
    return await fetchMethod($axios,url)
    //  props  () {
    //   return {
    //     cover: '~/static/pok1.png',
    //     title: 'Europe Street beat',
    //     description: 'The Armor Pokémon Tyranitar Is Now Available in Pokémon UNITE'
    //   }
    // }
  }
}

export default index
// eslint-disable-next-line no-console
// console.log('data---->', index)
</script>
<style>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /*justify-content: stretch;*/
  justify-content: center;
  align-items: center;
  /*border: 0;*/
  /*padding: 0;*/
  /*margin: 0;*/
}

.news {
  background-color: aliceblue;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
  /*justify-content: stretch;*/
  justify-content: center;
  align-items: flex-end;
  /*border: 2px solid rgb(100, 75, 0);*/
  border-radius: 1em;
  /*padding: 10%;*/
  margin-left: 10%;
  margin-right: 10%;
}

.list {
  /*background-color: darkgrey;*/
  width: 100%;
  /*height: 100%;*/
  display: flex;
  margin: auto;
  flex-direction: row;
  /*justify-content: stretch;*/
  /*justify-content:flex-end ;*/
  align-items: center;
  justify-content: center;
  /*border: 1px solid darkslategray;*/
  border-radius: 1em;
  /*padding: 10%;*/
  /*margin: 10%;*/
  padding-top: 3em;
  padding-bottom: 3em;
}

.card {
  align-items: center;
  justify-content: center;
}
</style>
