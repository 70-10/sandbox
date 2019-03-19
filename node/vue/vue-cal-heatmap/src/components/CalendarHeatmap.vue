<template>
  <calendar-heatmap
    :values="values"
    :end-date="endDate"
    :range-color="['ebedf0','c6e48b','7bc96f','239a3b','196127']"
    tooltip
    tooltip-unit="contributions"
  />
</template>

<script>
import { CalendarHeatmap } from "vue-calendar-heatmap";
import dayjs from "dayjs";

export default {
  components: { CalendarHeatmap },
  data: () => ({
    endDate: dayjs().format("YYYY-MM-DD"),
    values: [
      { date: "2018-9-22", count: 1 },
      { date: "2018-9-23", count: 30 },
      { date: "2018-9-24", count: 10 },
      { date: "2018-9-25", count: 90 },
      { date: "2018-9-26", count: 5 }
    ]
  })
};
</script>

<style lang="scss" scoped>
@import "vue-calendar-heatmap/dist/vue-calendar-heatmap.css";
</style>
