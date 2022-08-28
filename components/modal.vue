<template>
  <div>
    <a-button type="primary" @click="showModal">Open Modal</a-button>
    <a-modal v-model="visible" title="Basic Modal" @ok="handleOk">
      <div>
        <slot v-for="item in items" :item="item">
        </slot>
      </div>
    </a-modal>
  </div>
</template>
<script>
import { ref } from 'vue'
export default{
  name: "ModalComponent",
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    const visible = ref(false)

    const showModal = () => {
      visible.value = true;
    };
    const handleOk = (e ) => {
      console.log(e);
      visible.value = false;
    };
    return {
      visible,
      showModal,
      handleOk,
    };
  },
}
</script>
