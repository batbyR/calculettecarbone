<template>
  <div class="py-2">
    <div
      class="progress"
      style="height: 3px;"
    >
      <div
        class="progress-bar bar-striped bg-dark"
        role="progressbar"
        :style="'width: ' + progress + '%'"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    progress: function () {
      return this.$store['calculator/progress']
    }
  }
}
</script>

<style scoped lang="scss">
</style>
