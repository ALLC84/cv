<template>
  <section>
    <!--
    |-----------------------------------------------
    |  IMAGEN
    |-----------------------------------------------
    -->
    <Avatar v-if="contact" :contact="contactData" />

    <!--
    |-----------------------------------------------
    |  CONTACTO
    |-----------------------------------------------
    -->
    <TitleSection
      text="CONTACTO"
      :color="colorText"
      :mt="titleMarginTop"
      :weight="700"
      tag="h4"
    />
    <PartingLine :weight="0.15" />
    <Contact />
  </section>

  <!--
    |-----------------------------------------------
    |  HABILIDADES, TECNOLOGÍAS, LENGUAJES
    |-----------------------------------------------
    -->
  <section v-for="(section, index) in dataContent" :key="index">
    <TitleSection
      :text="section.name"
      :color="colorText"
      :mt="titleMarginTop"
      :weight="700"
      tag="h4"
    />
    <PartingLine :weight="0.15" />
    <AbilityLevel :skills="section.skills" />
  </section>
</template>

<script>
/* eslint-disable no-tabs */
import PartingLine from '@components/shared/PartingLine/index.vue';
import TitleSection from '@components/shared/TitleSection/index.vue';
import { request } from '@lib/datocms';

import AbilityLevel from './AbilityLevel/index.vue';
import Avatar from './Avatar/index.vue';
import Contact from './Contact/index.vue';

const QUERY = `
query {
	allAbilities(orderBy: orderId_ASC) {
		name
    points
	}
  allAbilitieTeches(orderBy: orderId_ASC) {
    name
    points
  }
  allLanguages {
    name
    points
  }
  contacto{
    photo {
      url
      alt
    }
  }
}
`;

export default {
  name: 'Aside',

  components: {
    Avatar,
    TitleSection,
    Contact,
    PartingLine,
    AbilityLevel,
  },

  data() {
    return {
      colorText: '#a0aec0',
      titleMarginTop: 1.8,
      abilitiesData: [],
      abilitiesTechData: [],
      languageData: [],
      contact: null,
    };
  },

  computed: {
    dataContent() {
      return [
        {
          name: 'HABILIDADES',
          skills: this.abilitiesData,
        },
        {
          name: 'TECNOLOGÍAS',
          skills: this.abilitiesTechData,
        },
        {
          name: 'LENGUAJES',
          skills: this.languageData,
        },
      ];
    },

    contactData() {
      return this.contact;
    },
  },

  async mounted() {
    await this.getAbilities();
    this.loading = false;
  },

  methods: {
    async getAbilities() {
      try {
        // eslint-disable-next-line object-curly-newline
        const { allAbilities, allAbilitieTeches, allLanguages, contacto } =
          await request({
            query: QUERY,
          });
        this.abilitiesData = allAbilities;
        this.abilitiesTechData = allAbilitieTeches;
        this.languageData = allLanguages;
        this.contact = contacto;
      } catch (e) {
        this.error = e;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
