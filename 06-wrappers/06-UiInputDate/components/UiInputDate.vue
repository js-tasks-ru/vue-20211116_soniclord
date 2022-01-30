<template>
  <ui-input ref="ui-input" :model-value="value" v-bind="$attrs" :type="type" @input="handleInput">
    <template v-for="slotName in Object.keys($slots)" #[slotName]>
      <slot :name="slotName" />
    </template>
  </ui-input>
</template>

<script>
  import dayjs from 'dayjs';
  import utc from 'dayjs/plugin/utc';
  import UiInput from './UiInput';

  dayjs.extend(utc);

  export default {
    name: 'UiInputDate',
    components: { UiInput },
    inheritAttrs: false,
    props: {
      type: {
        type: String,
        default: 'date',
      },
      modelValue: {
        type: Number,
        default: null,
      },
    },
    emits: ['update:modelValue'],
    computed: {
      value() {
        if (!this.modelValue) return null;
        let value;
        switch (this.type) {
          case 'date':
            value = dayjs.utc(this.modelValue).format('YYYY-MM-DD');
            break;
          case 'time':
            value = dayjs.utc(this.modelValue).format('HH:mm');
            break;
          case 'datetime-local':
            value = dayjs.utc(this.modelValue).format('YYYY-MM-DDTHH:mm');
            break;
          default:
            null;
            break;
        }
        return value;
      },
    },
    methods: {
      handleInput($event) {
        let inputValue = $event.target.valueAsNumber;
        if (isNaN(inputValue)) inputValue = null;
        this.$emit('update:modelValue', inputValue);
      },
    },
  };
</script>
