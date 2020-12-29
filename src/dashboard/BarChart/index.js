import React from "react";
import { CCard, CCardBody } from "@coreui/react";
import { CChartBar } from "@coreui/react-chartjs/lib/CChart";

const BarChart = ({ data }) => {
  const dataHuman = data.map((value) => value.user);
  const dataBot = data.map((value) => value.bot);
  const dataMonths = data.map((value) => value.month);

  return (
    <CCard>
      <CCardBody>
        <h4 id="traffic" className="card-title mb-3">
          Trend buzzer
        </h4>
        <CChartBar
          type="bar"
          datasets={[
            {
              label: "Bot",
              backgroundColor: "#D82E3F",
              data: dataBot,
            },
            {
              label: "Human",
              backgroundColor: "#28CC2D",
              data: dataHuman,
            },
          ]}
          labels={dataMonths}
          options={{
            tooltips: {
              enabled: true,
            },
            scales: {
              xAxes: [{ stacked: true }],
              yAxes: [{ stacked: true }],
            },
          }}
        />
      </CCardBody>
    </CCard>
  );
};

export default BarChart;
