<template>
<!--  <div @click="$emit('page',[current])">-->
    <div @click="currentPage">

    <a-pagination  v-model="current" :total="50" show-less-items  />
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  name:"PaginationComponent",
  setup() {
    return {
      current: ref(1),

    };
  },
  methods: {
    currentPage() {
      // console.log(e)
      this.$emit('page',[this.current])
      // return  this.current;
    },
  },
};
</script>
