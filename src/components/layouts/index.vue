<template>
  <div class="layout">
    <header class="header">
      <slot name="header" />
    </header>
    <main class="main">
      <aside class="aside">
        <slot name="aside" />
      </aside>
      <section class="section">
        <article class="content">
          <slot name="main" />
        </article>
        <footer class="footer">
          <slot name="footer" />
        </footer>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Layout',
};
</script>

<style lang="scss" scoped>
.layout {
  display: grid;
  font-size: $font-size-content;
  max-width: $layout-max-width;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: calc(var(--gap) * 2);
}

.aside,
.content,
.footer {
  padding: $padding-content;
}

.header {
  padding: calc(#{$padding-content} / 2);
}

.main {
  display: flex;
  flex-wrap: wrap;
}

.aside {
  flex-grow: 1;
  flex-basis: calc(25% - calc(#{$padding-content} * 2));
  min-width: calc(#{$aside-min-width} + #{$padding-content});
  background-color: $color-bg-sidebar;

  @include for-size(tablet-landscape-up) {
    border-top-left-radius: $layout-border-radius;
    border-bottom-left-radius: $layout-border-radius;
  }
}

.section {
  flex-grow: 1;
  flex-basis: calc(75% - calc(#{$padding-content} * 4));
  background-color: $color-bg-content;

  @include for-size(tablet-landscape-up) {
    border-top-right-radius: $layout-border-radius;
    border-bottom-right-radius: $layout-border-radius;
  }
}
</style>
