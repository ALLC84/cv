<template>
  <div class="layout">
    <nav class="nav">
      <slot name="nav" />
    </nav>
    <aside class="aside">
      <slot name="aside" />
    </aside>
    <main class="main">
      <slot name="main" />
      <footer class="footer">
        <slot name="footer" />
      </footer>
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
  display: flex;
  flex-wrap: wrap;
  position: relative;
  font-size: $font-size-content;
  max-width: $layout-max-width;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: calc(#{$padding-content} * 2);
  @include fadeIn(1s);
}

.aside,
.main {
  padding: $padding-content;
}

.nav {
  min-width: 100%;
  padding: calc(#{$padding-content} / 2) $padding-content;
}

.aside {
  flex-grow: 1;
  flex-basis: calc(30% - calc(#{$padding-content} * 2));
  min-width: $aside-min-width;
  background-color: $color-bg-sidebar;

  @include for-size(tablet-landscape-up) {
    border-top-left-radius: $layout-border-radius;
    border-bottom-left-radius: $layout-border-radius;
  }
}

.main {
  flex-grow: 1;
  flex-basis: calc(70% - calc(#{$padding-content} * 4));
  background-color: $color-bg-content;

  @include for-size(tablet-landscape-up) {
    border-top-right-radius: $layout-border-radius;
    border-bottom-right-radius: $layout-border-radius;
  }
}

.footer {
  padding-top: $padding-content;
}
</style>
