import React from "react";
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout,
} from "@coreui/react";
import { CChartPie } from "@coreui/react-chartjs";
import CIcon from "@coreui/icons-react";

const TweetStats = ({ data }) => {
  const { jumlah_user, jumlah_bot } = data;

  const countPercentageUser = () =>
    jumlah_user !== 0 || jumlah_bot !== 0
      ? (jumlah_user / (jumlah_bot + jumlah_user)) * 100
      : 0;

  const countPercentageBot = () =>
    jumlah_user !== 0 || jumlah_bot !== 0
      ? (jumlah_bot / (jumlah_bot + jumlah_user)) * 100
      : 0;

  return (
    <CCard style={{ minHeight: "280px" }}>
      <CCardBody>
        <CRow>
          <h4 id="traffic" className="card-title mb-4 ml-3">
            Jumlah Buzzer
          </h4>
        </CRow>
        <div className="progress-group">
          <div className="progress-group-header">
            {/* <CIcon className="progress-group-icon" name="cil-globe-alt" /> */}
            <span className="title">Human</span>
            <span className="ml-auto font-weight-bold">
              {jumlah_user || 0}
              <span className="text-muted small">
                ({`${countPercentageUser()}%`})
              </span>
            </span>
          </div>
          <div className="progress-group-bars">
            <CProgress
              className="progress-xs"
              color="success"
              value={countPercentageUser()}
            />
          </div>
        </div>
        <div className="progress-group">
          <div className="progress-group-header">
            {/* <CIcon name="cib-twitter" className="progress-group-icon" /> */}
            <span className="title">Bot</span>
            <span className="ml-auto font-weight-bold">
              {jumlah_bot || 0}
              <span className="text-muted small">
                ({`${countPercentageBot()}%`})
              </span>
            </span>
          </div>
          <div className="progress-group-bars">
            <CProgress
              className="progress-xs"
              color="danger"
              value={countPercentageBot()}
            />
          </div>
        </div>
      </CCardBody>
    </CCard>
  );
};

export default TweetStats;
