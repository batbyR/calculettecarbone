<template>
  <div
    class="questions-list-card"
    :class="classObject"
    :style="{ background: ( question.submitted ? question.domain.color : '')}"
    @click='$emit("selectQuestion", question)'
  >
    <div> {{question.label_short}} </div>
    <div v-if="question.submitted">
      <hr>
      <base-carbone-display
        v-if="question.submitted"
        :amount="question.result"
        :help="false"
        :br="false"
      />
      <div>
        pour {{question.value}} {{question.unit}}
      </div>
    </div>
  </div>

</template>

<script>

export default {
  props: {
    question: {
      type: Object,
      required: false
    },
    selected: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    click: function () {
    }
  },
  computed: {
    classObject: function () {
      var co = this.question.submitted ? "submitted" : "notsubmitted";
      co += ' ';
      co += this.selected ? "selected" : "notselected";
      return co;
    }
  }
};
</script>

<style scoped lang="scss">
.questions-list-card {
  position: relative;
  cursor: pointer;
  transition: 0.5s;
  padding: 30px 10px;
  margin: 0px;
  min-height: 170px;
  margin-bottom: 10px;
  opacity: 1;
  text-align: center;
  background: rgba(black, 0.03);

  &:hover {
    background: rgba(black, 0.06);
  }

  &.submitted {
    font-weight: bold;
    color: white !important;
    border-right: 1px solid rgba(black, 0.06);
  }
}
</style>
