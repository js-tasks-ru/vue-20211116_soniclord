<template>
  <div>
    <toast-list :toasts="toasts" @remove="remove()" />
  </div>
</template>

<script>
import ToastList from './ToastList';

const toastLive = 5000;

export default {
  name: 'TheToaster',
  components: { ToastList },
  data() {
    return {
      id: 0,
      toasts: [],
      timerId: null,
    };
  },

  methods: {
    add(p) {
      const id = this.id++;
      this.toasts.push({
        id: id,
        type: p.type,
        message: p.message,
        delay: toastLive,
      });
      setTimeout(
        function (toasts) {
          if (toasts){
            toasts.remove();
          }
        },
        toastLive,
        this,
        id,
      );
    },

    remove() {
      this.toasts.splice(0, 1);
    },

    success(message) {
      this.add({
        type: 'success',
        message: message,
      });
    },

    error(message) {
      this.add({
        type: 'error',
        message: message,
      });
    },
  },
};
</script>
