<template>
  <div v-for="(skill, index) in skills" :key="index" class="skills">
    <p class="skills__name">{{ skill.name }}</p>
    <div v-if="skill.points > 0">
      <span
        v-for="i in 5"
        :key="i"
        :class="['skills__trak', i > skill.points ? 'skills__trak--fault' : '']"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AbilityLevel',

  props: {
    skills: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.skills {
  display: flex;
  align-items: center;

  &__name {
    flex: 1;
    color: $color-light-gray;
    font-size: 0.9rem;
    font-weight: 600;
  }

  &__trak {
    text-align: right;
    width: 0.9rem;
    height: 0.9rem;
    border-radius: 50%;
    margin-left: 0.5rem;
    display: inline-block;
    background-color: $color-gray;

    &--fault {
      background-color: $color-dark-gray;
    }
  }
}
</style>
