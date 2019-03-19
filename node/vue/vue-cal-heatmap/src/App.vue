<template>
  <div>
    <div>
      <h1>cal-heatmap</h1>
      <cal-heatmap :data="data"/>
    </div>
    <div>
      <h1>vue-calendar-heatmap</h1>
      <calendar-heatmap/>
    </div>
  </div>
</template>

<script>
import CalHeatmap from "./components/CalHeatmap";
import CalendarHeatmap from "./components/CalendarHeatmap";

export default {
  components: { CalHeatmap, CalendarHeatmap },
  data: () => ({ data: { "1552967342": 1 } })
};
</script>

