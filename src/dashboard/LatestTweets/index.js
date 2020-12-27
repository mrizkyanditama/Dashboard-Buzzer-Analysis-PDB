import CIcon from "@coreui/icons-react";
import { CCard, CCardBody, CCol, CRow, CWidgetIcon } from "@coreui/react";
import React from "react";

import poto1 from "../../assets/sample/poto1.jpg";
import poto2 from "../../assets/sample/poto2.jpeg";
import poto3 from "../../assets/sample/poto3.jpg";

var sectionStyle = {
  backgroundImage: "url(" + { poto1 } + ")",
};

const LatestTweets = ({ data }) => {
  return (
    <>
      <CRow>
        <h3 className="ml-3 mb-3">Latest Tweets</h3>
      </CRow>
      {data.map((tweet) => {
        return (
          <CRow>
            <CCol lg="12">
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
            </CCol>
          </CRow>
        );
      })}
    </>
  );
};

export default LatestTweets;
