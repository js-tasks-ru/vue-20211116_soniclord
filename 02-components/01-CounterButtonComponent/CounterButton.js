import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  // Компонент должен иметь входной параметр
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },

  methods: {
    incCount() {
      let val = this.count+1;
      this.$emit('update:count', val);
    },
  },

  // Шаблон лучше держать максимально простым, а логику выносить в методы
  template: `<button type="button" @click="incCount">{{ count }}</button>`,
});
