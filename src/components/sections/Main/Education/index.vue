<template>
  <section>
    <header>
      <TitleSection :size="mobileExt ? 1.6 : 2" :weight="800" :mt="1.5">
        {{ nameSection }}
      </TitleSection>
    </header>
    <PartingLine :weight="0.15" :width="20" bg="rgb(49, 130, 206)" />
    <div>
      <SectionInformation :data="education" :width-button="false" />
    </div>
  </section>
</template>

<script>
import PartingLine from '@components/shared/PartingLine/index.vue';
import TitleSection from '@components/shared/TitleSection/index.vue';
import MediaQueriesMixin from '@mixins/MediaQueriesMixin';

import SectionInformation from '../common/SectionInformation/index.vue';

export default {
  name: 'Education',

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
      nameSection: 'Educación',
    };
  },

  computed: {
    education() {
      return this.data;
    },
  },
};
</script>

<style lang="scss" scoped></style>
