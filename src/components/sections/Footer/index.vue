<template>
  <footer class="footer">
    <div class="footer__leftSection">
      <span> © {{ leftSection.year }}, </span>
      <span v-if="leftSection && leftSection.name">
        {{ leftSection.name }}
      </span>
    </div>
    <div
      v-if="rightSection && rightSection.tecnologies"
      class="footer__rightSection"
    >
      <span class="footer__rightSection__description">
        {{ rightSection.description }}
      </span>
      <a
        v-for="(tecnologie, index) in rightSection.tecnologies"
        :key="index"
        class="footer__rightSection__link"
        target="_blanck"
        :href="tecnologie.url"
      >
        <img :src="tecnologie.brand.url" :alt="tecnologie.brand.alt" />
      </a>
    </div>
  </footer>
</template>

<script>
/* eslint-disable no-tabs */
import { request } from '@lib/datocms';

const QUERY = `
query {
  contacto{
    name
  }
  allTecnologies {
    class
    url
    brand {
      alt
      url
    }
  }
}
`;

export default {
  name: 'Footer',
  data() {
    return {
      contact: null,
      tecnologies: [],
    };
  },

  computed: {
    leftSection() {
      return {
        name: this.contact ? this.contact.name : '',
        year: new Date().getFullYear(),
      };
    },

    rightSection() {
      return {
        description: 'Creado utilizando, ',
        tecnologies: this.tecnologies,
      };
    },
  },

  async mounted() {
    await this.getContentData();
  },

  methods: {
    async getContentData() {
      try {
        const { contacto, allTecnologies } = await request({
          query: QUERY,
        });
        this.contact = contacto;
        this.tecnologies = allTecnologies;
      } catch (e) {
        this.error = e;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding: 1.5rem;
  // background-color: #fafafa;
  // border-top: 1px solid #eaeaea;
  // font-size: 0.8rem;
  // font-weight: 500;
  color: $color-dark-gray;

  // &__leftSection {
  // }

  &__rightSection {
    display: flex;
    align-items: center;

    &__description {
      margin-right: 0.5rem;
    }

    &__link {
      img {
        width: 1rem;
        height: 1rem;
        margin-right: 0.5rem;
      }
    }
  }
}
</style>
