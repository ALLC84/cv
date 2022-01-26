<template>
  <!--
    |-----------------------------------------------
    |  HEADER
    |-----------------------------------------------
    -->
  <HeaderContent v-if="contactData" :data="contactData" />

  <!-- LINE -->
  <PartingLine :weight="0.01" :width="100" :mt="1" :bt="1" />

  <!--
    |-----------------------------------------------
    |  EXPERIENCIA LABORAL
    |-----------------------------------------------
    -->
  <WorkExperience v-if="workExperience" :data="workExperience" />

  <!-- LINE -->
  <PartingLine :weight="0.01" :width="100" :mt="1" :bt="1" />

  <!--
    |-----------------------------------------------
    |  EDUCACION
    |-----------------------------------------------
    -->
  <Education v-if="educationData" :data="educationData" />

  <!-- LINE -->
  <PartingLine :weight="0.01" :width="100" :mt="1" :bt="1" />

  <!--
    |-----------------------------------------------
    |  CURSOS
    |-----------------------------------------------
    -->
  <Courses v-if="coursesData" :data="coursesData" />

  <!-- LINE -->
  <PartingLine :weight="0.01" :width="100" :mt="1" :bt="1" />
</template>

<script>
/* eslint-disable no-tabs */
import PartingLine from '@components/shared/PartingLine/index.vue';
import { request } from '@lib/datocms';
import MediaQueriesMixin from '@mixins/MediaQueriesMixin';

import Courses from './Courses/index.vue';
import Education from './Education/index.vue';
import HeaderContent from './Header/index.vue';
import WorkExperience from './WorkExperience/index.vue';

const QUERY = `
query {
  contacto{
    name
    profession
    about {
      value
    }
  }
  allWorkExperiences {
    title
    subtitle
    url
    year
  }
  allEducations {
    title
    subtitle
    year
    image {
      alt
      url
    }
  }
  allCourses {
    title
    subtitle
    year
  }
}
`;

export default {
  name: 'Main',

  components: {
    HeaderContent,
    WorkExperience,
    Education,
    Courses,
    PartingLine,
  },

  mixins: [MediaQueriesMixin],

  data() {
    return {
      dataHeader: {
        name: 'Alejandro llorente',
        title: 'Desarrollador Frontend',
        description:
          'Desarrollador web, apasionado por la tecnología y la programación.',
      },
      contact: null,
      workExperience: [],
      education: [],
      courses: [],
    };
  },

  computed: {
    contactData() {
      return this.contact;
    },
    workExperienceData() {
      return this.workExperience;
    },
    educationData() {
      return this.education;
    },
    coursesData() {
      return this.courses;
    },
  },

  async mounted() {
    await this.getContentData();
    this.loading = false;
  },

  methods: {
    async getContentData() {
      try {
        // eslint-disable-next-line object-curly-newline
        const { contacto, allWorkExperiences, allEducations, allCourses } =
          await request({
            query: QUERY,
          });
        this.contact = contacto;
        this.workExperience = allWorkExperiences;
        this.education = allEducations;
        this.courses = allCourses;
      } catch (e) {
        this.error = e;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
