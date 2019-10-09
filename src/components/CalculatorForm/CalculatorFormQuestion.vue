<template>
  <div class="
          question
          p-4
          d-flex
          align-items-center
          text-center">
    <h3>{{ field.question }}</h3>
  </div>

</template>
<script>

export default {
  props: {
    field: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.question {
  min-height: 250px;
  z-index: 2;
  position: relative;
  overflow: hidden;

  h3 {
    line-height: 2.5rem;
  }
}
</style>
