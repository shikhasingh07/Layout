import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import SideBar from "./SideBar";
import man from "./image/man.png";
import "../App.css";

const useDisplayImage = () => {
  const [result, setResult] = React.useState(man);
  const uploader = (e) => {
    const imageFile = e.target.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", (e) => {
      setResult(e.target.result);
    });
    reader.readAsDataURL(imageFile);
  };
  return { result, uploader };
};

const Home = () => {
  const [inputFile, setInputFile] = useState("");
  const [image, setImage] = React.useState("");
  const imageRef = React.useRef(null);

  useEffect(() => {
    setInputFile(document.getElementById("input-file"));
  }, []);

  const handleUpload = () => {
    inputFile?.click();
  };

  const { result, uploader } = useDisplayImage();

  return (
    <div className="containerDIv d-flex">
      <div className="row m-auto">
        <div className="profilImg p-0 d-flex align-items-center ps-1">
          <p> &#8592;</p> <p className="ms-1">{""}Back to home</p>
        </div>
        <div className="col-md-5 d-none d-md-block sideBar">
          <SideBar />
          <div className="d-flex"></div>
        </div>
        <div className="col-md-7 col-sm-12 mainProfile">
          <div className="d-flex flex-column flex-shrink-0 rounded-3 bg-white p-3">
            <Row className="mt-3 m-0">
              <div className="d-flex align-items-center mb-3 p-0">
                <span className="headingP">Profile</span>
              </div>
            </Row>
            <Row className="mt-3 m-0">
              <p className="profilImg p-0">Profile lmage</p>
              <div className="col p-0">
                <div className="d-flex align-items-center">
                  {result && (
                    <img
                      ref={imageRef}
                      src={result}
                      alt="pho-upload"
                      className="image-holder"
                    />
                  )}
                  <input
                    id="input-file"
                    className="d-none "
                    type="file"
                    name="profile"
                    onChange={(e) => {
                      setImage(e.target.files[0]);
                      uploader(e);
                    }}
                  />
                  <button
                    type="button"
                    onClick={handleUpload}
                    className="btn btn-rounded btn-outline-primary ms-3 uploadImg"
                  >
                    Profile lmage
                  </button>
                  <p className="p-0 m-0 ms-3 text-col fw-normal removeB">
                    Remove
                  </p>
                </div>
              </div>
            </Row>
            <Row className="mt-4 m-0 p-0 w-80 ">
              <div className="d-flex p-0">
                <div className="col-sm-6">
                  <label className="textM p-0 mb-1 d-block">Full Name</label>
                  <input
                    type="text"
                    className="ps-3 m-0 fw-bold form-control email-input Inputs"
                  />
                </div>
                <div className="col-sm-6">
                  <label className="textM p-0 mb-1 d-block">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="ps-3 m-0 form-control fw-bold Inputs "
                  />
                </div>
              </div>
            </Row>
            <Row className="mt-4 m-0 p-0 ">
              <div className="d-flex justify-content-end m-0 p-0 ">
                <button className="btn m-0 text-col btn-save">Save</button>
              </div>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
