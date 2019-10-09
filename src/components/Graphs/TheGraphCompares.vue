<template>
  <div class="domains-chart p-3 py-5 m-3">
    <chart-bar
      id="chart-plugin"
      :chart-data="datacollection"
      :styles="myStyles"
      :lines=lines
    />

  </div>
</template>

<script>


export default {
  props: {
    lines: [],
    compares: {},
    domains: {
      type: Array
    }
  },
  data: function () {
    return {
      datacollection: {
        labels: [],
        datasets: [
          {
            backgroundColor: [],
            data: []
          },
          {
            backgroundColor: [],
            data: []
          }
        ]
      },
      height: 300
    };
  },
  computed: {
    myStyles () {
      return {
        height: `${this.height}px`,
        width: "100%",
        position: "relative"
      };
    }
    // lines () {

    //   return [
    //     // {
    //     //   "y": 5000,
    //     //   "style": "rgba(255, 0, 0, .4)",
    //     //   "text": "max"
    //     // }, {
    //     //   "y": 3000,
    //     //   "style": "#00ffff",
    //     // }, {
    //     //   "y": 1800,
    //     //   "text": "min"
    //     // }
    //   ];
    // }
  },
  watch: {
    domains: {
      handler () {
        this.refresh();
      },
      deep: true
    }
  },
  mounted: function () {
    this.refresh();
  },
  methods: {
    refresh () {
      var labels = [];
      var data = [];
      var compares = [];
      var backgroundColors = [];

      this.domains.forEach(domain => {
        labels.push(domain.label);
        data.push(domain.result);
        backgroundColors.push(domain.color);
      });

      this.compares.forEach(domain => {
        compares.push(domain.result);
      });

      this.datacollection = {
        labels: labels,
        datasets: [
          {
            backgroundColor: backgroundColors,
            data: data
          }, {
            backgroundColor: [],
            data: compares
          }
        ]
      };
    }
  }
};
</script>

<style scoped lang="scss">
.domains-chart {
}
</style>
