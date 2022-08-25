<template>
  <a-menu mode="horizontal">
    <a-menu-item key="home">
      <template #icon>
        <mail-outlined/>
      </template>
      <nuxt-link to="/">
        HOME
      </nuxt-link>
    </a-menu-item>

    <a-menu-item key="pokedex">
      <template #icon>
        <mail-outlined/>
      </template>
      <nuxt-link to="/pokedex">
        Pokedex
      </nuxt-link>
    </a-menu-item>

    <a-menu-item key="pokemonList">
      <template #icon>
        <mail-outlined/>
      </template>
      <nuxt-link to="/pokemonList">
        PokeList
      </nuxt-link>
    </a-menu-item>
  </a-menu>
</template>
<script>

import {defineComponent, ref} from 'vue';
import {MailOutlined} from '@ant-design/icons-vue';

export default defineComponent({
  name: 'NavigationMenuComponent',
  components: {
    MailOutlined
  },
  setup() {
    const current = ref(['mail']);
    return {
      current,
    };
  },
});

</script>
