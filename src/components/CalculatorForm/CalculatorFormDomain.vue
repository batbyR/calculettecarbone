<template>
  <div class="calculator-form-domain">
    <div
      class="mt-2 mr-3 calcFormDomain"
      :style="{color: domain.color}"
    >
      <div class="d-inline-block">
        {{ domain.label }}
      </div>

      <font-awesome-icon
        class="ml-1"
        :icon="domain.icon"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    domain: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.calcFormDomain {
  position: relative;
}
</style>
