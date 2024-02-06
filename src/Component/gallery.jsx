import React from "react";

function Gallery({ profileImg }) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="galleryHead text-center">
            <h3 className="text-warning m-4">Project</h3>
          </div>
          <div className="col-md-8 col-lg-8 col-sm-12">
            <div className="card p-0 position-relative card-img">
              <div className="hoverImg">
                <img src={profileImg} className="mx-auto img-fluid" />
              </div>
              <div className="card-body ">
                <h5 className="card-title">Coding</h5>
                <p className="card-text ">
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic. Even the all-powerful
                  Pointing has no control about the blind texts it is an almost
                  unorthographic.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4  col-sm-12">
            <div className="card p-0 position-relative card-img">
              <div className="hoverImg">
                <img src={profileImg} className="mx-auto img-fluid" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Coding</h5>
                <p className="card-text ">
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-12 col-lg-12 col-sm-12">
            <div className="row">
              <div className="col-md-6 col-lg-3 col-sm-12">
                <div className="card p-0 position-relative card-img">
                  <div className="hoverImg">
                    <img src={profileImg} className="mx-auto img-fluid" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Coding</h5>
                    <p className="card-text">
                      Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6  col-lg-6 col-sm-12">
                <div className="card p-0 position-relative  card-img">
                  <div className="hoverImg">
                    <img src={profileImg} className="mx-auto img-fluid" />
                  </div>
                  <div className="card-body ">
                    <h5 className="card-title">Coding</h5>
                    <p className="card-text">
                      Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3  col-sm-12">
                <div className="card p-0 position-relative card-img">
                  <div className="hoverImg">
                    <img src={profileImg} className="mx-auto img-fluid" />
                  </div>
                  <div className="card-body ">
                    <h5 className="card-title">Coding</h5>
                    <p className="card-text">
                      Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6  col-sm-12">
                <div className="card p-0 position-relative  card-img">
                  <div className="hoverImg">
                    <img src={profileImg} className="mx-auto img-fluid" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Coding</h5>
                    <p className="card-text">
                      Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Gallery;
