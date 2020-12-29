import React from "react";
import { CCard, CCardBody } from "@coreui/react";
import { CChartPie } from "@coreui/react-chartjs";

const PieChart = ({ data }) => {
  return (
    <CCard style={{ minHeight: "280px" }}>
      <CCardBody>
        <h4 id="traffic" className="card-title mb-3">
          Persentase Buzzer
        </h4>
        <CChartPie
          type="pie"
          datasets={[
            {
              backgroundColor: ["#28CC2D", "#D82E3F"],
              data: [data.jumlah_user || 0, data.jumlah_bot || 0],
            },
          ]}
          labels={["Human", "Bot"]}
          options={{
            tooltips: {
              enabled: true,
            },
          }}
        />
      </CCardBody>
    </CCard>
  );
};

export default PieChart;
