<template>
  <header class="header">
    <section>
      <TitleSection :size="mobileExt ? 1.6 : 2" :weight="800" :mt="1.5">
        <template #main-title>{{ nameSection }}</template>
      </TitleSection>
    </section>
    <PartingLine :weight="0.1" :width="20" bg="rgb(49, 130, 206)" />
    <section>
      <SectionInformation :data="workExperience" />
    </section>
  </header>
</template>

<script>
import PartingLine from '@components/shared/PartingLine/index.vue';
import TitleSection from '@components/shared/TitleSection/index.vue';
import MediaQueriesMixin from '@mixins/MediaQueriesMixin';

import SectionInformation from '../common/SectionInformation/index.vue';

export default {
  name: 'WorkExperience',

  components: {
    TitleSection,
    PartingLine,
    SectionInformation,
  },

  mixins: [MediaQueriesMixin],

  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      nameSection: 'Experiencia Laboral',
    };
  },

  computed: {
    workExperience() {
      return this.data;
    },
  },
};
</script>

<style lang="scss" scoped></style>
