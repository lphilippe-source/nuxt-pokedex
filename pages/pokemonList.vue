<template>
  <div>
    <div v-for="item in pokemon.ip" :key="item.id">
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
        <a-descriptions-item label="Remark">empty</a-descriptions-item>
      </a-descriptions>
    </div>
  </div>
</template>
<script>
import {fetchMethod} from './index.vue'

export default {
  name: 'PokemonPage',
  data() {
    return {
      pokemon: []
    }
  },
  mounted() {
    this.fetch()
  },
  methods: {
    async fetch() {
      this.pokemon = await fetchMethod(this.$axios, 'https://pokeapi.co/api/v2/pokemon/')
    },
  },
}
</script>
<style>
.didi{
  display:flex;
  flex-direction: column;
}
</style>
