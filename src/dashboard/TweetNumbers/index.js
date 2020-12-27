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
  CWidgetBrand,
} from "@coreui/react";
import { CChartPie } from "@coreui/react-chartjs";
import CIcon from "@coreui/icons-react";
import "./module.css";

const TweetNumbers = ({ data }) => {
  return (
    <CWidgetBrand
      color="twitter"
      rightHeader={data.total_tweet}
      rightFooter="tweets"
      leftHeader={data.total_user}
      leftFooter="users"
      style={{ minHeight: "280px" }}
    >
      <CIcon name="cib-twitter" height="52" className="my-4" />
    </CWidgetBrand>
  );
};

export default TweetNumbers;
