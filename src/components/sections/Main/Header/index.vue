<template>
  <header class="header">
    <TitleSection
      :size="mobileExt ? 2.2 : 3.2"
      :weight="900"
      :text="dataHeader.name"
    />

    <PartingLine :weight="0.15" :width="20" bg="rgb(49, 130, 206)" />

    <TitleSection
      tag="h2"
      :text="dataHeader.profession"
      :weight="700"
      :mt="1"
    />
    <p v-for="(paragraph, index) in dataHeader.about" :key="index">
      {{ paragraph }}
    </p>
  </header>
</template>

<script>
import PartingLine from '@components/shared/PartingLine/index.vue';
import TitleSection from '@components/shared/TitleSection/index.vue';
import MediaQueriesMixin from '@mixins/MediaQueriesMixin';

export default {
  name: 'HeaderContent',

  components: {
    TitleSection,
    PartingLine,
  },

  mixins: [MediaQueriesMixin],

  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  computed: {
    dataHeader() {
      const { name, profession, about } = this.data;
      const aboutContent = about.value.document.children.map(
        content => content.children[0].value
      );
      return {
        name,
        profession,
        about: aboutContent,
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
