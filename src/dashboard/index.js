import { CCol, CRow } from "@coreui/react";
import React, { useEffect, useState } from "react";
import BarChart from "./BarChart";
import LatestTweets from "./LatestTweets";
import PieChart from "./PieChart";
import TweetNumbers from "./TweetNumbers";
import TweetStats from "./TweetStats";
import axios from "axios";
import "../scss/style.scss";
import { API_URL } from "../constant";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState({
    barchart: {
      Apr: {
        bot: 0,
        user: 0,
      },
      Aug: {
        bot: 0,
        user: 0,
      },
      Dec: {
        bot: 0,
        user: 10,
      },
      Feb: {
        bot: 0,
        user: 0,
      },
      Jan: {
        bot: 0,
        user: 0,
      },
      Jul: {
        bot: 0,
        user: 0,
      },
      Jun: {
        bot: 0,
        user: 0,
      },
      Mar: {
        bot: 0,
        user: 0,
      },
      May: {
        bot: 0,
        user: 0,
      },
      Nov: {
        bot: 0,
        user: 0,
      },
      Oct: {
        bot: 0,
        user: 0,
      },
      Sep: {
        bot: 0,
        user: 0,
      },
    },
    latest_tweet: [],
    pie_chart: {
      jumlah_bot: 0,
      jumlah_user: 0,
    },
    summary: {
      total_tweet: 0,
      total_user: 0,
    },
  });

  const refetch = () => {
    axios.get(API_URL).then((res) => {
      setResponse(res.data);
    });
  };

  useEffect(() => {
    setLoading(true);
    axios.get(API_URL).then((res) => {
      console.log(res);
      setLoading(false);
      setResponse(res.data);
    });
    setInterval(refetch, 5000);
  }, []);

  const loadingState = (
    <div className="center">
      <div className="lds-ripple">
        <div />
        <div />
      </div>
    </div>
  );

  if (loading) {
    return loadingState;
  }

  return (
    <div style={{ padding: "32px 32px 32px 32px" }}>
      <h1 className="mb-5">Analisis Buzzer</h1>
      <CRow></CRow>
      <CRow>
        <CCol md="4">
          <PieChart data={response.pie_chart} />
        </CCol>
        <CCol md="4">
          <TweetStats data={response.pie_chart} />
        </CCol>
        <CCol md="4">
          <TweetNumbers data={response.summary} />
        </CCol>
      </CRow>
      <CRow>
        <CCol md="12">
          <BarChart data={response.barchart} />
        </CCol>
      </CRow>
      <LatestTweets data={response.latest_tweet} />
    </div>
  );
};

export default Dashboard;
