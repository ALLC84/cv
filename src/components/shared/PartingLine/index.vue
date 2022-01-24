<template>
  <div :style="styleObject"></div>
</template>

<script>
export default {
  name: 'PartingLine',
  props: {
    weight: {
      type: Number,
      default: 0.1,
    },
    width: {
      type: Number,
      default: 40,
    },
    bg: {
      type: String,
      default: '#a0aec0',
    },
    mt: {
      type: Number,
      default: 0.5,
    },
    mb: {
      type: Number,
      default: 0.5,
    },
  },

  computed: {
    styleObject() {
      return {
        width: `${this.width}%`,
        height: `${this.weight}rem`,
        backgroundColor: this.bg,
        marginTop: `${this.mt}rem`,
        marginBottom: `${this.mb}rem`,
      };
    },
  },
};
</script>
