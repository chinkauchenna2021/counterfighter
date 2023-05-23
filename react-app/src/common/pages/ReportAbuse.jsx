/* eslint-disable no-unused-vars */
import React, { useState, useRef,useEffect } from "react";
import Webcam from "react-webcam";
import { useWindowSize } from "@react-hook/window-size";
import MainLayout from "../layouts/MainLayout";
import { Camera } from "react-camera-pro";
import { saveAs } from 'file-saver';
import { IoSync, IoCaretBackCircleOutline, IoCloseCircleOutline } from "react-icons/io5";

function ReportAbuse() {
  const camera = useRef(null);
  const [moveCamera, setMoveCamera] = useState(false);
  const [image, setImage] = useState(null);
  const [showImageModal, setShowImageModal] = useState(false);
  const [width, height] = useWindowSize();
  console.log(width, height);
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
    };
    

  const webcamRef = useRef(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (imageSrc !== null) {
        window.alert("screenshot taken successfully");
        setImage(imageSrc)
        setShowImageModal(true);

    }
  }, [webcamRef]);

  const changeScreen = () => {
    setMoveCamera(true);
  };

  const switchscreen = () => {
    camera.current.switchCamera();
  };

  const captureCamera = () => {
      const photo = camera.current.takePhoto();
      setImage(photo)
      alert("camera captured")
      setShowImageModal(true)

  };

  const backtoreportpage = () => {
    setMoveCamera(false);
    window.location.reload();
  };

    
    const downloadImage = () => {
      saveAs(image, `image_${Math.random()}_.jpg`) // Put your image url here.
    };

    
    
  return (
    <MainLayout
      className={`w-full lg:h-[700px] flex flex-col border-2 border-pink-700 justify-center items-center`}
    >
      <div
        className={`w-full h-screen relative  lg:-mt-0   flex flex-col justify-center items-center `}
      >
        <div className="w-full lg:w-5/12 -mt-60 lg:-mt-0 flex-col h-[400px]  bg-gray-100  border flex justify-center items-center">
          <div className="w-full h-fit lg:h-[20px] flex justify-center items-center lg:items-end lg:pb-1">
            <div className="w-fit  capitalize text-lg py-10 lg:mt-0 text-[#AA77FF] m font-bold ">
              Take Screenshot of Drugs to report
            </div>
          </div>
          {moveCamera ? (
            <div className="">
              {" "}
              <Camera ref={camera} />
            </div>
          ) : (
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              height={1200}
              videoConstraints={videoConstraints}
              className="w-11/12 max-h-screen lg:w-[600px] lg:h-[500px] rounded-2xl"
            />
          )}
        </div>
        <div className="w-full lg:mt-10 lg:w-5/12 flex justify-center items-center ">
          <button
            type="button"
            className="w-11/12 h-fit bg-[#AA77FF] py-2 ring-2 ring-offset-2 text-white font-bold ring-[#AA77FF] capitalize"
            onClick={capture}
          >
            take screenshot
          </button>
        </div>
        <div className="w-full mt-4  lg:w-5/12 flex justify-center items-center ">
          <button
            type="button"
            className="w-11/12 h-fit bg-[#AA77FF] py-2 ring-2 ring-offset-2 text-white font-bold ring-[#AA77FF] capitalize"
            onClick={() => changeScreen()}
          >
            Use Camera
          </button>

          {moveCamera && (
            <button
              type="button"
              className=" absolute bottom-10   z-50  w-[80px]  rounded-full  text-xs h-[80px] lg:w-2/12  py-2 ring-2  text-white font-bold ring-[#AA77FF] capitalize"
              onClick={() => captureCamera()}
            >
              take photo
            </button>
          )}
          {moveCamera && (
            <button
              className="absolute top-3 right-3 text-white z-20"
              onClick={() => switchscreen()}
            >
              {" "}
              <IoSync size={40} color="#ffffff" />
            </button>
          )}

          {moveCamera && (
            <button
              className="absolute top-3 left-3 text-white z-20"
              onClick={() => backtoreportpage()}
            >
              {" "}
              <IoCaretBackCircleOutline size={40} color="#ffffff" />
            </button>
          )}
        </div>
        {showImageModal && (
          <div
            className="w-full min-h-screen  absolute flex justify-center place-items-end "
            style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
          >
                      <div className="flex-col w-full lg:w-3/12 rounded-md  lg:m-auto  h-[500px] lg:h-fit lg:py-5 bg-white z-50">
                          <div className="w-full flex justify-end items-center py-2 px-2"><IoCloseCircleOutline size={30} color={"black"}  onClick={()=>setShowImageModal(false)}/> </div>
              <div className="w-full flex justify-center ">
                              <img src={image} className="w-9/12 h-[280px]" />
                              
                          </div>
                          <div className="w-full flex justify-center">
                              <button onClick={()=>downloadImage()}  className="w-11/12 h-fit mt-5 bg-[#AA77FF] py-2 ring-2 ring-offset-2 text-white font-bold ring-[#AA77FF] capitalize">Save Image</button>

                          </div>
                          
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
}

export default ReportAbuse;
