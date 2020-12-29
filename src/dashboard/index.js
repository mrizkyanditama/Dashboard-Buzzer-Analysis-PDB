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
    barchart: [
      {
        month: "Jan 2020",
        bot: 0,
        user: 0,
      },
      {
        month: "Feb 2020",
        bot: 0,
        user: 0,
      },
    ],
    latest_tweet_bot: [],
    latest_tweet_human: [],
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
      setResponse(res.data.message);
    });
  };

  useEffect(() => {
    setLoading(true);
    axios.get(API_URL).then((res) => {
      setLoading(false);
      setResponse(res.data.message);
    });
    setInterval(refetch, 10000);
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
      <LatestTweets
        data={{
          bot: response.latest_tweet_bot,
          human: response.latest_tweet_human,
        }}
      />
    </div>
  );
};

export default Dashboard;
