import { ResponsiveCalendar } from "@nivo/calendar";

export default ({ dataset, baseColor = "#fff" }) => (
  <ResponsiveCalendar
    data={dataset}
    from="2017-01-01"
    to="2018-08-19"
    emptyColor="#eeeeee"
    // colors={["#9af395", "#89e389", "#79d37b", "#56b25f", "#45a051"]}
    colors={["#b6cbee", "#a5bee7", "#8eaee3", "#80a0d6", "#688ece"]}
    margin={{
      top: 100,
      right: 30,
      bottom: 60,
      left: 30
    }}
    yearSpacing={40}
    monthBorderColor={baseColor}
    monthLegendOffset={10}
    dayBorderWidth={2}
    dayBorderColor={baseColor}
    legends={[
      {
        anchor: "bottom-left",
        direction: "row",
        translateY: 36,
        itemCount: 4,
        itemWidth: 42,
        itemHeight: 36,
        itemDirection: "top-to-bottom"
      }
    ]}
    theme={{
      tooltip: {
        container: {
          fontSize: "13px"
        }
      },
      labels: {
        textColor: "#555"
      }
    }}
  />
);
