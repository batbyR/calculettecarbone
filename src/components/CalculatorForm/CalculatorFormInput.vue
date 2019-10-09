<template>
  <form
    class="px-3 pt-3 pb-0"
    :style="{backgroundColor: question.domain.color}"
    v-on:submit.prevent="$emit('submit')"
  >
    <div class="row">
      <div class="col-7 col-sm-5 col-md-4">
        <input
          type="number"
          step="0.01"
          min="0"
          autofocus
          ref="valueinput"
          class="main-input form-control form-control-lg rounded-0 border-white border-top-0 border-left-0 border-right-0 mb-3  text-white text-center"
          v-model="question.value"
          autocomplete="off"
        >
      </div>
      <div class="col-5 col-sm-3 col-md-5">
        <!-- Label displaying units (kg/h, Litters/day) -->
        <h4 class="text-white pt-2 text-center">{{ question.unit }}</h4>
      </div>

      <div class="col-12 col-sm-4 col-md-3">
        <!-- Submit button -->
        <button
          type="submit"
          class="btn btn-light btn-lg rounded-0 mb-3"
        >OK</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    question: {
      type: Object,
      required: true
    }
  },
  mounted: function () {
    this.$nextTick(() => this.$refs.valueinput.focus())
    //  this.$refs.valueinput.$el.focus();
  }
}
</script>

<style scoped lang="scss">
form {
  transition: 0.7s;

  .main-input {
    width: 100%;
    background: rgba(255, 255, 255, 0.2);
    outline: 0px;

    &:focus {
      outline: none;
    }
  }

  button {
    width: 100%;
  }

  .input-group-text {
    width: 100%;
  }
}
</style>
