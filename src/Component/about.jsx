import React from "react";
import profileImg from "../assets/profile.jpg";
import { FaGrimace } from "react-icons/fa";

function AboutUs() {
  return (
    <>
      <div className="about row align-items-center ">
        <div className="contentHead text-center py-3">
          <span className="text-warning">
            <strong>PROVIDING</strong>
          </span>
          <h4>What We Can Do for You</h4>
        </div>
        <div className="aboutContent px-3 col-lg-8 text-end">
          <div className="contentList row">
            <div className="listdata col-lg-9">
              <h6>Marketing Research</h6>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </p>
            </div>
            <div className="listIcon col-lg-3">
              <FaGrimace />
            </div>

            <div className="listdata col-lg-9 ">
              <h6>Marketing Research</h6>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </p>
            </div>
            <div className="listIcon  col-lg-3">
              <FaGrimace />
            </div>
            <div className="listdata col-lg-9 ">
              <h6>Marketing Research</h6>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </p>
            </div>
            <div className="listIcon  col-lg-3">
              <FaGrimace />
            </div>
          </div>
        </div>
        <div className="imgContent col-lg-4">
          <div className="aboutImageContainer py-3" style={{ marginTop: 100 }}>
            <img src={profileImg} className="img-fluid" />
          </div>
        </div>
      </div>


      <div className="skillset container m-3">
        <div className="row text-center">
          <h3 className="p-3">Skills</h3>
          <div className="col-lg-3">
            <div className="card p-3">
              <img src={profileImg} width={50} className="mx-auto mb-4" />
              <div className="card-body p-0">
                <h5 className="card-title">Coding</h5>
                <p className="card-text">
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card p-3">
              <img src={profileImg} width={50} className="mx-auto mb-4" />
              <div className="card-body p-0">
                <h5 className="card-title">Coding</h5>
                <p className="card-text">
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card p-3">
              <img src={profileImg} width={50} className="mx-auto mb-4" />
              <div className="card-body p-0">
                <h5 className="card-title">Coding</h5>
                <p className="card-text">
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card p-3">
              <img src={profileImg} width={50} className="mx-auto mb-4" />
              <div className="card-body p-0">
                <h5 className="card-title">Coding</h5>
                <p className="card-text">
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutUs;
