<template>
  <h1 v-if="isMainSlotContent" ref="mainSlot" :style="styleObject">
    <slot name="main-title" />
  </h1>
  <h2 v-if="isDevaultSlotContent" ref="defaultSlot" :style="styleObject">
    <slot />
  </h2>
</template>

<script>
export default {
  name: 'TitleSection',

  props: {
    text: {
      type: String,
      default: '',
    },
    size: {
      type: Number,
      default: 1.2,
    },
    weight: {
      type: Number,
      default: 600,
    },
    color: {
      type: String,
      default: '#4a5568',
    },
    mt: {
      type: Number,
      default: 0,
    },
    mb: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    styleObject() {
      return {
        fontSize: `${this.size}rem`,
        fontWeight: this.weight,
        color: this.color,
        marginTop: `${this.mt}rem`,
        marginBottom: `${this.mb}rem`,
      };
    },

    isMainSlotContent() {
      return !!this.$slots['main-title'];
    },

    isDevaultSlotContent() {
      return !!this.$slots.default;
    },
  },
};
</script>
