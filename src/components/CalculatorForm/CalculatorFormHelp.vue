<template>
  <div class="calculator-form-help">
    <div class="row">
      <div class="col">
        <p class="lead p-2">
          {{question.description}}
        </p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.card {
}
</style>
