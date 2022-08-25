<template>
  <div class="pokedex">
<!--    <HeaderComponent/>-->
<!--    <NavigationMenuComponent/>-->
    <div  v-for="item in pokemon" :key="item.id">
      <a-card hoverable style="width: 300px">
        <template #cover>
          <img
            :alt="item.name"
            :src="item.sprites.front_default"
          />
        </template>
        <template #actions>
          <setting-outlined key="setting" />
          <edit-outlined key="edit" />
          <ellipsis-outlined key="ellipsis" />
        </template>
        <a-card-meta :title="item.name" :description="item.moves[0].version_group_details[0].move_learn_method.url">
          <template #avatar>
            <a-avatar :src="item.sprites.back_default" />
          </template>
        </a-card-meta>
      </a-card>
    </div>
<!--    <ul v-for="item in pokemon" :key="item.id">-->
<!--      <li>{{ item.name}}{{ item}} </li>-->
<!--    </ul>-->
<!--    <FooterComponent/>-->
<!--    <p>{{ pokemon }}</p>-->
  </div>
</template>


<script>
import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons-vue';
// import { defineComponent } from 'vue';
// import HeaderComponent from '../components/header.vue'
// import FooterComponent from '../components/footer.vue'
// import NavigationMenuComponent from '../components/navigationMenu.vue'

export default {
  name: 'PokedexPage',
  components: {
    SettingOutlined,
    EditOutlined,
    EllipsisOutlined,
    // HeaderComponent,
    // FooterComponent,
    // NavigationMenuComponent,
  },
  data() {
    return {
      poke: 'pok1.png',
    }
  },
  computed: {
    pokemon() {
      return this.$store.state.pokemon;
    },
  },
}
</script>
<style>
.pokedex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
}
</style>
