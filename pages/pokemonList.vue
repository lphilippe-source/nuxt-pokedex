<template>
  <div>
<!--    <PaginationComponent @page="fetch()"/>-->
    <PaginationComponent @page="fetch"/>
    <div v-if="!pokemon?.ip">
      <template  v-for="item in 5"  >
        <a-skeleton :key="item" active />
      </template>
    </div>
    <div v-for="item in pokemon?.ip" :key="item.id">
      <a-descriptions bordered :title="item.name + ' Info'" layout="vertical">
        <a-descriptions-item :label="item.name">
          <img :src="item.sprites.front_shiny" :alt="item.name"/>
        </a-descriptions-item>
        <a-descriptions-item label="ABILITES">
          <div v-for="ab in item.abilities" :key="ab.ability.name">{{ ab.ability.name }}
            <!--        <a-descriptions-item :label="ab.ability">{{ ab.ability.name }}</a-descriptions-item>-->
          </div>
        </a-descriptions-item>
<!--<a-descriptions class="didi" layout="vertical">-->
          <a-descriptions-item label="Poids">{{ item.weight }}</a-descriptions-item>
          <a-descriptions-item label="taille">{{ item.height }}</a-descriptions-item>
<!--</a-descriptions>-->
        <a-descriptions-item label="Address" :span="2">
          No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
        </a-descriptions-item>
<!--        <a-descriptions-item  label=>-->
          <button v-if="checkDouble(item)" class="button"> Ajouter dans la pokedex
               <a-icon  class="buttonToggleDex" type="plus-circle" @click="addThisPokemonToDex(item)"/>
          </button>
<!--        </a-descriptions-item>-->

<!--        <a-descriptions-item  label="supprimer de la pokedex">-->
          <button  v-if="!checkDouble(item)" class="button">Supprimer du la pokedex
            <a-icon  class="buttonToggleDex" type="minus-circle" @click="deleteThisPokemonFromDex(item)"/>
          </button>
<!--        </a-descriptions-item>-->
      </a-descriptions>
    </div>
    <PaginationComponent @page="fetch"/>
  </div>
</template>
<script>
import PaginationComponent from '../components/pagination.vue'
import {fetchMethod} from './index.vue'
export default {
  name: 'PokemonPage',
  components: {
    PaginationComponent,
  },
  data() {
    return {
      pokemon: [],
      // page: 1,
    }
  },
  computed: {
    pokeStore() {
      return this.$store.state.pokemon;
    },
  },
  mounted() {
    this.fetch()
  },
  methods: {
    addPokemonData(value) {
      this.$store.commit('addPokemonData', value)
    },
    async fetch(page=1) {
     if (page===1) this.pokemon = await fetchMethod(this.$axios, 'https://pokeapi.co/api/v2/pokemon/')
      // this.pokemon.then((res)=>console.log(res))
      else this.pokemon = await fetchMethod(this.$axios, 'https://pokeapi.co/api/v2/pokemon/?offset=' + (page-1)*20 + '&limit=20')
    },
    addThisPokemonToDex(item) {
      this.checkDouble(item) && this.addPokemonData([...this.pokeStore,item])
    },

    deleteThisPokemonFromDex(item) {
      const storeMinusOne = [...this.pokeStore].filter(poke => poke.id !== item.id)

      // console.log('uuuuuu>',this.pokeStore)
      // console.log('tototototototot>',storeMinusOne)
      !this.checkDouble(item) && this.addPokemonData(storeMinusOne)
      // console.log('rtatrattrtrterterterter',
      // !this.checkDouble(item) && this.addPokemonData(storeMinusOne)
      //   )
    },
    checkDouble(item) {
     if(!this.pokeStore.find(pokemon => pokemon.id === item.id)) return item
      else return false
    }
  },
}
</script>
<style>
.button {
  display: inline;
  flex-direction: column;
  margin:auto;
  justify-content: center;
  align-items: center;
}
.buttonToggleDex {
  line-height: 10px;
  font-size: 2em;
  color: #1890ff;
}
</style>
