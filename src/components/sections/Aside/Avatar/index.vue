<template>
  <div class="wrapper__image">
    <img
      v-if="contact"
      class="image__avatar"
      :src="contact.photo.url"
      :alt="contact.photo.alt"
      width="200"
      height="200"
    />
  </div>
</template>
<script>
export default {
  name: 'Avatar',

  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper__image {
  border: 2px solid #c4c4c4;
  border-radius: 100%;
  vertical-align: middle;
  margin: calc(#{$padding-content} / 1.5) auto;
  overflow: hidden;
  width: 200px;
  height: 200px;

  .image__avatar {
    max-width: 100%;
  }
}
</style>
