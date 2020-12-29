import { CCard, CCardBody, CCol, CRow } from "@coreui/react";
import React from "react";

const LatestTweets = ({ data }) => {
  return (
    <>
      <CRow>
        <h3 className="ml-3 mb-3">Latest Tweets</h3>
      </CRow>
      <CRow>
        <CCol lg="6">
          <h4>Human</h4>
          {data.human.map((tweet) => {
            return (
              <CCard>
                <CCardBody className="p-3 d-flex align-items-center">
                  <div
                    className="mr-3 text-white p-5"
                    style={{
                      background: `url(${tweet.profile_image_url})`,
                      backgroundSize: "100px",
                      backgroundRepeat: "no-repeat",
                      borderRadius: "50%",
                    }}
                  ></div>
                  <div className="tweet-content">
                    <div className="text-value text-primary">
                      {tweet.name || ""}
                    </div>
                    <div className="text-muted small">{tweet.tweet || ""}</div>
                  </div>
                </CCardBody>
              </CCard>
            );
          })}
        </CCol>
        <CCol lg="6">
          <h4>Bot</h4>
          {data.bot.map((tweet) => {
            return (
              <CCard>
                <CCardBody className="p-3 d-flex align-items-center">
                  <div
                    className="mr-3 text-white p-5"
                    style={{
                      background: `url(${tweet.profile_image_url})`,
                      backgroundSize: "100px",
                      backgroundRepeat: "no-repeat",
                      borderRadius: "50%",
                    }}
                  ></div>
                  <div className="tweet-content">
                    <div className="text-value text-primary">
                      {tweet.name || ""}
                    </div>
                    <div className="text-muted small">{tweet.tweet || ""}</div>
                  </div>
                </CCardBody>
              </CCard>
            );
          })}
        </CCol>
      </CRow>
    </>
  );
};

export default LatestTweets;
