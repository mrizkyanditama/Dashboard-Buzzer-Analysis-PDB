import React from "react";
import { CCard, CCardBody, CCardGroup, CCardHeader } from "@coreui/react";
import { CChartBar } from "@coreui/react-chartjs/lib/CChart";

const BarChart = ({ data }) => {
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
              label: "Human",
              backgroundColor: "#28CC2D",
              data: [
                data.Jan.user,
                data.Feb.user,
                data.Mar.user,
                data.Apr.user,
                data.May.user,
                data.Jun.user,
                data.Jul.user,
                data.Aug.user,
                data.Sep.user,
                data.Oct.user,
                data.Nov.user,
                data.Dec.user,
              ],
            },
            {
              label: "Bot",
              backgroundColor: "#D82E3F",
              data: [
                data.Jan.bot,
                data.Feb.bot,
                data.Mar.bot,
                data.Apr.bot,
                data.May.bot,
                data.Jun.bot,
                data.Jul.bot,
                data.Aug.bot,
                data.Sep.bot,
                data.Oct.bot,
                data.Nov.bot,
                data.Dec.bot,
              ],
            },
          ]}
          labels="months"
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

export default BarChart;
