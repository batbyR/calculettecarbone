<template>
  <span>
    {{ amount.toLocaleString("fr", {maximumFractionDigits: 0}) }} kg
    <br v-if=br>
    <small>eq.CO2/an</small>
  </span>
</template>


<script>
export default {
  props: {
    amount: Number,
    br: Boolean
  },
  components: {}
};
</script>

<style scoped lang="scss">
</style>
