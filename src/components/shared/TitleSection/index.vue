<template>
  <div v-html="myhtml" />
</template>

<script>
export default {
  name: 'TitleSection',

  props: {
    tag: {
      type: String,
      default: 'h1',
    },
    text: {
      type: String,
      default: 'Necesita pasar la prop ( text )',
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

  // data() {
  //   return {
  //     myhtml: `
  // <${this.tag}
  // style="
  //   font-size: ${this.size}rem;
  //   font-weight: ${this.weight};
  //   color: ${this.color};
  //   margin-top: ${this.mt}rem;
  //   margin-bottom: ${this.mb}rem;
  // ">
  //   ${this.text}
  // </${this.tag}>`,
  //   };
  // },

  computed: {
    myhtml() {
      return `
  <${this.tag}
  style="
    font-size: ${this.size}rem;
    font-weight: ${this.weight};
    color: ${this.color};
    margin-top: ${this.mt}rem;
    margin-bottom: ${this.mb}rem;
  ">
    ${this.text}
  </${this.tag}>`;
    },
  },
};
</script>
