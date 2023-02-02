<template>
  <section>
    <header>
      <TitleSection
        tag="h3"
        :text="nameSection"
        :size="mobileExt ? 1.6 : 2"
        :weight="800"
        :mt="1.5"
      />
    </header>
    <PartingLine :weight="0.15" :width="20" bg="rgb(49, 130, 206)" />
    <div>
      <SectionInformation :data="workExperience" :width-button="showButton" />
    </div>
  </section>
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
    showButton() {
      return this.workExperience.length > 3;
    }
  },
};
</script>

<style lang="scss" scoped></style>
