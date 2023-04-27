import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import "antd/dist/antd.css";
// import { Button, Dropdown, Menu, Space } from 'antd';
import imageUpload from "./imageUpload";
import SecondBar from "./SecondBar/SecondBar";
import { Button } from "@material-ui/core";
import Profile from "./Profile";
import { useSelector } from "react-redux";
import "./VirtualTry.css";
import useDrivePicker from "react-google-drive-picker";
import Webcam from "react-webcam";
import { useDispatch } from "react-redux";
import { cartItem } from "../../store/cartItem/cartItemSlice";

import img1 from "../../images/Product_Img/3.jpg";
import img2 from "../../images/Product_Img/4.jpg";
import img3 from "../../images/Product_Img/5.jpg";
import img4 from "../../images/Product_Img/8.jpg";
import img5 from "../../images/Product_Img/1.jpg";
import img6 from "../../images/Product_Img/2.jpg";
import img7 from "../../images/Product_Img/6.jpg";
import img8 from "../../images/Product_Img/7.jpg";

const { Dragger } = Upload;
const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: "user",
};

function VirtualTry() {
  const todos = useSelector((state) => state);
  // const item = useSelector((state) => state);
  const [uploadImageURL, setUploadImageURL] = useState("");
  const dispatch = useDispatch();

  const [driveObj, setDriveObj] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [isCamera, setIsCamera] = useState(false);

  const [picture, setPicture] = useState("");
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot();
    setPicture(pictureSrc);
  });

  const [openPicker, data, authResponse] = useDrivePicker();

  const dummyRequest = async ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  const props = {
    name: "file",
    multiple: false,
    // action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    customRequest: dummyRequest,

    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);

        setUploadImageURL(URL.createObjectURL(info.file.originFileObj));
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  const handleOpenPicker = () => {
    openPicker({
      clientId:
        "843861638932-3a853gfcdmvdk4k2n7i7g8tbe5fq3qgl.apps.googleusercontent.com",
      developerKey: "AIzaSyC7PwiaGP7I7hsJ48XfiPNV0n9pBiabPJ0",
      viewId: "DOCS_IMAGES",
      // token: token, // pass oauth token in case you already have one
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: false,
      // customViews: customViewsArray, // custom view
      callbackFunction: (data) => {
        if (data.action === "cancel") {
          console.log("User clicked cancel/close button");
        }
        console.log(data);
        // console.log("imag id=> ", );
        setDriveObj(data.docs[0]?.id);
      },
    });
  };

  useEffect(() => {
    if (data) {
      data?.docs?.map((i) => console.log(i));
    }
  }, []);

  const items = [
    {
      id: 1,
      name: "T-Shirt",
      image: img1,
      quantity: 1,
      price: 100,
      totalPrice: 100,
    },
    {
      id: 2,
      name: "Shirt",
      image: img2,
      quantity: 1,
      price: 200,
      totalPrice: 200,
    },
    {
      id: 3,
      name: "Pant",
      image: img3,
      quantity: 1,
      price: 300,
      totalPrice: 300,
    },
    {
      id: 4,
      name: "Shoes",
      image: img4,
      quantity: 1,
      price: 400,
      totalPrice: 400,
    },
    {
      id: 5,
      name: "Shoes",
      image: img5,
      quantity: 1,
      price: 400,
      totalPrice: 400,
    },
    {
      id: 6,
      name: "Shoes",
      image: img6,
      quantity: 1,
      price: 400,
      totalPrice: 400,
    },
    {
      id: 7,
      name: "Shoes",
      image: img7,
      quantity: 1,
      price: 400,
      totalPrice: 400,
    },
    {
      id: 8,
      name: "Shoes",
      image: img8,
      quantity: 1,
      price: 400,
      totalPrice: 400,
    },
  ];

  return (
    <>
      {console.log("todos", todos)}
      {/* {console.log("item", item)} */}
      <div className="VT-wrapp">
        <div>
         {/*<SecondBar /> */} 
        </div>

        <div style={{ textAlign: "center" }}>
          <div style={{ padding: "10px" }}>
            <div>
              <h3 style={{ textAlign: "center", fontWeight: "bold" }}>
                TryOn Catalouge
              </h3>
              <div className="item-listing">
                {items.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedImage(item.image)}
                    className={
                      selectedImage === item.image
                        ? "item-selected item"
                        : "" + "item"
                    }
                  >
                    <img
                      src={item.image}
                      alt=""
                      width={159}
                      height={184}
                      srcset=""
                    />
                    <p style={{ textAlign: "center" }}>{item?.name}</p>
                    <button
                      onClick={() => dispatch(cartItem(item))}
                      className="button"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>


          <div className="VT-grid">
          <div className="VT-grid1">
            <h3>Uploded Image</h3>
            {!uploadImageURL ? (
              !driveObj ? (
                !picture ? (
                  isCamera ? (
                    <>
                      <Webcam
                        audio={false}
                        height={"100%"}
                        ref={webcamRef}
                        width={"100%"}
                        screenshotFormat="image/jpeg"
                        videoConstraints={videoConstraints}
                      />
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setPicture();
                        }}
                        className="button"
                      >
                        Retake
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          capture();
                        }}
                        className="button"
                      >
                        Capture
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault();

                          setIsCamera(false);
                        }}
                        className="button"
                      >
                        cancel
                      </button>
                    </>
                  ) : (
                    <Dragger {...props}>
                      <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                      </p>
                      <p className="ant-upload-text">
                        Click or drag file to this area to upload
                      </p>
                      
                    </Dragger>
                  )
                ) : (
                  <img
                    src={picture}
                    style={{
                      objectFit: "cover",
                    }}
                    alt=""
                  />
                )
              ) : (
                <img
                  // src={driveObj?.docs[0]?.embedUrl}
                  src={
                    driveObj
                      ? `https://drive.google.com/uc?export=view&id=${driveObj}`
                      : null
                  }
                  // src="https://drive.google.com/uc?export=view&id=1VOS6M-0ys0g0Kz2AA3WbkDxSV9f0eRG7"
                  style={{
                    
                    objectFit: "cover",
                  }}
                  alt=""
                  srcset=""
                />
              )
            ) : (
              <img
                // src={driveObj?.docs[0]?.embedUrl}
                src={uploadImageURL}
                // src="https://drive.google.com/uc?export=view&id=1VOS6M-0ys0g0Kz2AA3WbkDxSV9f0eRG7"
                style={{
                  
                  objectFit: "cover",
                }}
                alt=""
                srcset=""
              />
            )}
            {/* <div className="insert-img-btn-mob dropdown">
              <button class=" button dropbtn">Insert an Image</button>
              <div class="img-drop-down">
                <span onClick={() => setIsCamera(true)}>Capture Image</span>
                <Upload {...props}>
                  <span style={{ color: "white" }}>Upload from Device</span>
                </Upload>
                <span onClick={() => handleOpenPicker()}>
                  Upload from Drive
                </span>
              </div>
            </div> */}
            <div class="dropdown">
              <button class=" button dropbtn">Insert an Image</button>
              <div class="img-drop-down">
                <span onClick={() => setIsCamera(true)}>Capture Image</span>
                <Upload {...props}>
                  <span  style={{ color: "white" }}>Upload from Device</span>
                </Upload>
                <span onClick={() => handleOpenPicker()} >
                  Upload from Drive
                </span>
              </div>
            </div>
          </div>


          <div className="selected-image">
            <h3>Selected Image</h3>
              <img src={selectedImage} alt="" />
              <div style={{ marginTop: "20px" }}>
              <button className="button">Execute</button>
            </div>
          </div>

          <div className="heading">
            <h3>Output</h3>
            <div className="output"></div>
            <div className="buttons">
            <button className="button Sb-buttons">Favorite</button>
            <button className="button Sb-buttons">Share</button>
            <button className="button Sb-buttons">Download</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VirtualTry;
