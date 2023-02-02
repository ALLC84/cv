<template>
  <section class="actions">
    <a
      href="https://github.com/ALLC84/cv-vuejs"
      target="_blanck"
      rel="noreferrer"
    >
      <img
        class="img"
        :src="GithubIcon"
        alt="icon github.svg"
        width="20"
        height="20"
      />
    </a>
    <a
      v-if="pdfToDownload"
      :href="pdfToDownload.url"
      target="_blanck"
      rel="noreferrer"
      download
    >
      <img
        class="img"
        :src="DownloadButton"
        alt="icon download"
        width="20"
        height="20"
      />
    </a>
  </section>
</template>

<script>
import DownloadButton from '@/assets/images/download-button.svg';
import GithubIcon from '@/assets/images/github.svg';

import { request } from '../../../lib/datocms';

const QUERY = `
query {
  upload(filter: {id: {eq: "38903115"}}) {
    url
  }
}
`;

export default {
  name: 'Nav',

  data() {
    return {
      DownloadButton,
      GithubIcon,
      pdfToDownload: null,
    };
  },

  mutation: {
    pdfDownload() {
      return this.pdfToDownload;
    },
  },

  async mounted() {
    await this.getContentData();
  },

  methods: {
    async getContentData() {
      try {
        const { upload } = await request({
          query: QUERY,
        });
        this.pdfToDownload = upload;
      } catch (e) {
        this.error = e;
      }
    },
  },
};
</script>

<style lang="scss" coped>
.actions {
  display: flex;
  justify-content: flex-end;

  .img {
    width: 20px;
    height: 20px;
    margin-left: 0.8rem;
  }
}
</style>
