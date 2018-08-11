import { Chart } from "react-google-charts";

const columns = [
  {
    type: "string",
    label: "year"
  },
  {
    label: "AttentionSpan",
    type: "number"
  }
];
const rows = [[2015, 5], [2016, 3], [2018, 1]];

export default () => (
  <div>
    <h1>Area Chart</h1>
    <Chart
      chartType="AreaChart"
      width="100%"
      height="400px"
      legendToggle
      rows={rows}
      columns={columns}
    />
  </div>
);
