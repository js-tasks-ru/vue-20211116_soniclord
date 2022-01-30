<template>
  <component :is="tag" v-bind="$attrs">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'UiLink',
  inheritAttrs: false,
  props: {
    tag: {
      type: [
        String
        , Object
        , Function
      ],
      default: 'RouterLink',
    },
  },
};
</script>

<style scoped>
.link {
  color: var(--blue);
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}
</style>
