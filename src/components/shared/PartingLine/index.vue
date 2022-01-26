<template>
  <hr :style="styleObject" />
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
    ml: {
      type: Number,
      default: 0,
    },
    mr: {
      type: Number,
      default: null,
    },
  },

  computed: {
    styleObject() {
      return {
        border: 'none',
        borderTop: `${this.weight}rem solid ${this.bg}`,
        width: `${this.width}%`,
        marginTop: `${this.mt}rem`,
        marginBottom: `${this.mb}rem`,
        marginLeft: this.ml !== null ? `${this.ml}rem` : 'auto',
        marginRight: this.ml !== null ? `${this.mr}rem` : 'auto',
      };
    },
  },
};
</script>
