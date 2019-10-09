<template>
  <div
    class="help"
    :style="{color: color}"
    @click="$emit('clickToggle')"
  >

    <font-awesome-icon
      icon="times-circle"
      v-if=opened
    />
    <font-awesome-icon
      icon="question-circle"
      v-else
    />
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true
    },
    opened: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.help {
  position: absolute;
  top: 50px;
  left: 5px;
  font-size: 2.5rem;
  cursor: pointer;
  z-index: 3;
}
</style>
