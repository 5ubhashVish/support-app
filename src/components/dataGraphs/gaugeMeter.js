import React from "react";
import GaugeChart from "react-gauge-chart";

const gaugeMeter = (props) => {
  return (
    <GaugeChart
      id={props.id}
      nrOfLevels={420}
      arcsLength={[0.5, 0.3, 0.2]}
      colors={["#EA4228", "#F5CD19", "#5BE12C"]}
      percent={Number(props.percent)}
      arcPadding={0.02}
      needleColor="#345243"
      textColor="none"
      /*  previousValue={Number(props.avg)} */
    />
  );
};

export default gaugeMeter;
