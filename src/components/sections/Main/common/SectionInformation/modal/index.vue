<template>
  <div class="modal">
    <div class="modal__button" @click="handleImage">
      {{ showImage ? 'Ocultar' : 'Mostrar' }}
    </div>
    <img v-if="showImage" :src="url" :alt="alt" />
  </div>
</template>

<script>
export default {
  name: 'ModalStadyTitle',

  props: {
    url: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      showImage: false,
    };
  },

  methods: {
    handleImage() {
      this.showImage = !this.showImage;
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  img {
    position: absolute;
    z-index: 999999;
    max-width: 100%;
    top: 1.6rem;
    left: 0;
  }

  &__button {
    cursor: pointer;
    font-size: 0.8rem;
    padding: 0.1rem 0.5rem;
    background: $color-bg-sidebar;
    border-radius: 1rem;
    color: $color-light-gray;
    margin-left: 0.5rem;
  }

  @include for-size(tablet-landscape-up) {
    position: relative;

    img {
      max-width: 15rem;
      left: 0.5rem;
    }
  }
}
</style>
