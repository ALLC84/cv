<template>
  <div class="actions">
    <a target="_blanck" href="https://github.com/ALLC84/cv-vuejs">
      <img class="img" :src="GithubIcon" alt="icon github.svg" />
    </a>
    <a v-if="pdfToDownload" :href="pdfToDownload.url" target="_blanck" download>
      <img class="img" :src="DownloadButton" alt="icon download" />
    </a>
  </div>
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
  name: 'Header',

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
    width: 1.3rem;
    margin-left: 0.8rem;
  }
}
</style>
