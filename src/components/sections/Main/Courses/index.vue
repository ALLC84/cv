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
      <SectionInformation :data="courses" />
    </div>
  </section>
</template>

<script>
import PartingLine from '@components/shared/PartingLine/index.vue';
import TitleSection from '@components/shared/TitleSection/index.vue';
import MediaQueriesMixin from '@mixins/MediaQueriesMixin';

import SectionInformation from '../common/SectionInformation/index.vue';

export default {
  name: 'Courses',

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
      nameSection: 'Cursos',
    };
  },

  computed: {
    courses() {
      return this.data;
    },
  },
};
</script>

<style lang="scss" scoped></style>
