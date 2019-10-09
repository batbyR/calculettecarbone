<template>
  <div class="domains-chart p-3 py-5 m-3">
    <chart-horizontal-bar
      id="chart-plugin"
      :chart-data="datacollection"
      :styles="myStyles"
    />

  </div>
</template>

<script>


export default {
  props: {
    result: {
      type: Number
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
          }
        ]
      },
      height: 600
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

      var backgroundColors = [];

      var countries = [
        {
          label: 'Un américain',
          result: 16000,
          color: "#6b6969"
        },
        {
          label: 'Un français',
          result: 11000,
          color: '#6b6969'
        }
        ,
        {
          label: 'Un allemand',
          result: 13000,
          color: '#6b6969'
        }
        ,
        {
          label: 'Moyenne mondiale',
          result: 1900,
          color: 'black'
        },
        {
          label: 'Un chinois',
          result: 6000,
          color: '#6b6969'
        },
        {
          label: 'Moi',
          result: this.result,
          color: 'red'
        },
        {
          label: 'Un cambodgien',
          result: 800,
          color: '#6b6969'
        }
      ];

      countries.sort(function (a, b) {
        return b.result - a.result;
      });

      countries.forEach(domain => {
        labels.push(domain.label);
        data.push(domain.result);
        backgroundColors.push(domain.color);
      });

      this.datacollection = {
        labels: labels,
        datasets: [
          {
            backgroundColor: backgroundColors,
            data: data
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
