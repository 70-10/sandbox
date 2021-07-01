<template>
  <div>
    <div id="cal-heatmap"/>
  </div>
</template>

<script>
import CalHeatmap from "cal-heatmap";

export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  mounted() {
    const cal = new CalHeatmap();
    cal.init({
      domain: "year",
      subDomain: "day",
      range: 1,
      tooltip: true,
      legendVerticalPosition: "center",
      legendHorizontalPosition: "right",
      legendOrientation: "vertical",
      data: this.data
    });
  }
};
</script>

<style lang="scss" scoped>
@import "cal-heatmap/cal-heatmap.css";
</style>


