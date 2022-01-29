<template>
  <div className="toasts">
    <toast v-for="toast in toasts" :key="toast.id" :toast="toast" @close="$emit('close', toast.id)"/>
  </div>
</template>

<script>
import Toast from './Toast';

export default {
  name: 'ToastList',
  components: {Toast},
  props: {
    toasts: {
      type: Array,
      required: true,
    },
  },
  emits: ['close'],
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}
</style>
