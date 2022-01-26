<template>
  <Layout>
    <template #nav>
      <Nav />
    </template>
    <template #aside>
      <Aside />
    </template>
    <template #main>
      <Main />
    </template>
    <template #footer>
      <Footer />
    </template>
  </Layout>
</template>

<script>
import Layout from '@components/layouts/index.vue';
import Aside from '@components/sections/Aside/index.vue';
import Footer from '@components/sections/Footer/index.vue';
import Main from '@components/sections/Main/index.vue';
import Nav from '@components/sections/Nav/index.vue';

export default {
  name: 'App',

  components: {
    Layout,
    Nav,
    Aside,
    Main,
    Footer,
  },
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

@include font-face(
  'Gilroy',
  './assets/fonts/Gilroy/Gilroy-Light',
  lighter,
  null,
  otf
);
@include font-face(
  'Gilroy',
  './assets/fonts/Gilroy/Gilroy-Regular',
  300,
  null,
  otf
);
@include font-face(
  'Gilroy',
  './assets/fonts/Gilroy/Gilroy-RegularItalic',
  300,
  italic,
  otf
);
@include font-face(
  'Gilroy',
  './assets/fonts/Gilroy/Gilroy-Medium',
  400,
  null,
  otf
);
@include font-face(
  'Gilroy',
  './assets/fonts/Gilroy/Gilroy-Semibold',
  500,
  null,
  otf
);
@include font-face(
  'Gilroy',
  './assets/fonts/Gilroy/Gilroy-Bold',
  600,
  null,
  otf
);
@include font-face(
  'Gilroy',
  './assets/fonts/Gilroy/Gilroy-Black',
  700,
  null,
  otf
);
@include font-face(
  'Gilroy',
  './assets/fonts/Gilroy/Gilroy-Extrabold',
  800,
  null,
  otf
);
@include font-face(
  'Gilroy',
  './assets/fonts/Gilroy/Gilroy-Heavy',
  900,
  null,
  otf
);

body {
  font-family: 'Girloy', sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

ul[class],
ol[class] {
  padding: 0;
}

body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
figure,
blockquote,
dl,
dd {
  margin: 0;
  padding: 0;
}

ul[class],
ol[class] {
  list-style: none;
}

a:not([class]) {
  text-decoration-skip-ink: auto;
}

img {
  max-width: 100%;
  display: block;
}

article > * + * {
  margin-top: 1em;
}

input,
button,
textarea,
select {
  font: inherit;
}
</style>
