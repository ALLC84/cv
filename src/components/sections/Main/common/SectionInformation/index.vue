<template>
  <div v-for="(information, index) in data" :key="index">
    <!-- INFORMATION -->
    <div class="section" :class="!showAll && index >= 3 ? 'no-display' : ''">
      <div class="section__left">
        <h4 class="section__left__title">
          <a
            v-if="information.url"
            :href="information.url"
            target="_blanck"
            rel="noreferrer"
          >
            {{ information.title }}
          </a>

          <span v-if="!information.url">
            {{ information.title }}
          </span>

          <ModalStadyTitle
            v-if="information.image"
            :url="information.image.url"
            :alt="information.image.alt"
          />
        </h4>
        <p class="section__left__subtitle">{{ information.subtitle }}</p>
      </div>
      <div class="section__right">{{ information.year }}</div>
    </div>
  </div>

  <!-- BUTTON -->
  <div v-if="widthButton" class="section__button" @click="showMore">
    {{ showAll ? 'Mostrar menos' : 'Mostrar mas' }}
  </div>
</template>

<script>
import ModalStadyTitle from './modal/index.vue';

export default {
  name: 'SectionInformation',

  components: {
    ModalStadyTitle,
  },

  props: {
    data: {
      type: Array,
      required: true,
    },
    widthButton: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      showAll: false,
    };
  },

  methods: {
    showMore() {
      this.showAll = !this.showAll;
    },
  },
};
</script>

<style lang="scss" scoped>
.section {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem;
  color: $black;
  position: relative;

  &__left {
    &__title {
      display: flex;
      align-items: center;

      a {
        color: inherit;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.2;
        transition: all 0.3s ease;

        &:hover {
          color: $color-button-hover;
        }
      }

      span {
        font-weight: 700;
        font-size: 1rem;
      }
    }

    &__subtitle {
      font-size: 0.9rem;
      font-weight: 500;
      font-style: italic;
    }
  }

  &__right {
    color: $black;
    font-size: 0.8rem;
    font-weight: 600;
  }

  &__button {
    font-size: 0.9rem;
    display: inline-block;
    color: $color-button;
    font-weight: 600;

    &:hover {
      color: $color-button-hover;
      cursor: pointer;
    }
  }
}
.no-display {
  display: none;
}
</style>
