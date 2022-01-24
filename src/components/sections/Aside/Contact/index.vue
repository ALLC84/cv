<template>
  <!--
    |-----------------------------------------------
    |  CONTACTO LIST
    |-----------------------------------------------
    -->
  <ul v-if="contactData" class="list">
    <li class="list__item">
      <a :href="`tel:+${contactData.call.phone}`">
        <img :src="CallIcon" alt="call icon svg" />
        {{ contactData.call.title }}
      </a>
    </li>
    <li class="list__item">
      <a :href="`mailto:${contactData.mail.email}`">
        <img :src="EmailIcon" alt="email icon svg" />
        {{ contactData.mail.title }}
      </a>
    </li>
    <li class="list__item">
      <a :href="contactData.linkedin.url" target="_blanck">
        <img :src="LinkIcon" alt="link icon svg" />
        {{ contactData.linkedin.title }}
      </a>
    </li>
  </ul>
</template>

<script>
/* eslint-disable no-tabs */
import CallIcon from '@/assets/images/call_white.svg';
import EmailIcon from '@/assets/images/email_white.svg';
import LinkIcon from '@/assets/images/link_white.svg';

import { request } from '../../../../lib/datocms';

const CONTACT_QUERY = `
query {
  contacto {
    call
    mail
    linkedin
  }
}
`;
export default {
  name: 'Contact',

  data() {
    return {
      CallIcon,
      EmailIcon,
      LinkIcon,
      contact: null,
    };
  },

  computed: {
    contactData() {
      return this.contact;
    },
  },

  async mounted() {
    await this.getContact();
  },

  methods: {
    async getContact() {
      try {
        const { contacto } = await request({
          query: CONTACT_QUERY,
        });
        this.contact = contacto;
      } catch (e) {
        this.error = e;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  &__item {
    margin-bottom: 0.5rem;
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: $color-light-gray;
      font-size: 0.9rem;
      font-weight: 600;

      img {
        margin-right: 0.5rem;
      }

      &:hover {
        color: $color-gray;
      }
    }
  }
}
</style>
