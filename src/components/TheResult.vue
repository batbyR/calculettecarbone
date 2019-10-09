<template>
  <div class="text-center p-5">

    <h4>
      Total : <base-carbone-display
        :amount="result"
        :br="false"
      >
      </base-carbone-display>
    </h4>

  </div>
</template>

<script>

export default {
  props: {
    result: {
      type: Number
    }
  },
  computed: {

  },
  methods: {

  }
};
</script>

<style scoped lang="scss">
.total-result {
}
</style>
