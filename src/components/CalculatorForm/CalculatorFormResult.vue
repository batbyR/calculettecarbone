<template>
  <div
    class="
          question
          px-4
          py-5
          align-items-center
          text-center"
    :style="{backgroundColor: question.domain.color}"
    @click="question.submitted = false"
  >
    <font-awesome-icon
      class="edit"
      icon="edit"
    />
    <font-awesome-icon
      class="ml-1 icon animated slideIn"
      :icon="question.domain.icon"
    />
    <h2>{{question.label_short}}</h2>
    <h1 class="my-5">+
      <base-carbone-display
        :amount="question.result"
        :help="false"
        :br="true"
      />
    </h1>
    <h2 class="domain">
      dans {{question.domain.label}} </h2>
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
};
</script>

<style scoped lang="scss">
.edit {
  position: absolute;
  top: 10px;
  left: 10px;
  opacity: 0.5;
  font-size: 20px;
}
.question {
  z-index: 2;
  position: relative;
  overflow: hidden;
  color: white;
  cursor: pointer;
  h3 {
    line-height: 2.5rem;
  }
  h2.domain {
    opacity: 0.5;
  }
  .icon {
    font-size: 12rem;
    position: absolute;
    left: 25px;
    bottom: 25px;
    text-align: left;
    opacity: 0.1;
  }
}
</style>
