<template>
  <button @click="click">{{ cnt }}</button>
</template>

<script>
	export default {
	  name: 'CounterButton',
	  props: {
		count: {
		  type: Number,
		  default: 0,
		},
	  },
	  
	  emits: ['update:count'],
	  data() {
		return {
		  cnt: 0,
		};
	  },
	  
	  watch: {
		count: {
		  deep: true,
		  immediate: true,
		  handler() {
			this.cnt = this.count;
		  },
		},
	  },
	  
	  methods: {
		click() {
		  this.$emit('update:count', ++this.cnt);
		},
	  },
	};
</script>