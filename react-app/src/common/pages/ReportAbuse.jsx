/* eslint-disable no-unused-vars */
import React , {useState, useRef} from "react";
import Webcam from "react-webcam";
import { useWindowSize } from "@react-hook/window-size";
import MainLayout from "../layouts/MainLayout";
import {Camera} from "react-camera-pro";

function ReportAbuse() {
  const camera = useRef(null);
  const [image, setImage] = useState(null);
  const [width, height] = useWindowSize();
  console.log(width, height);
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };

  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc !== null) {
         
          window.alert("screenshot taken successfully")
          console.log(imageSrc)
     }
  }, [webcamRef]);

  return (
    <MainLayout
      className={`w-full h-screen lg:h-[700px] flex flex-col border-2 border-pink-700 justify-center items-center`}
    >
      <div className={`w-full h-[400px]   flex flex-col justify-center items-center `}>
        <div className="w-full lg:w-5/12 flex-col h-[600px] py-10 bg-gray-100  border flex justify-center items-center">
              <div className="w-full h-fit lg:h-[200px] flex justify-center items-center lg:items-end pb-12 lg:pb-1">
                  <div className="w-fit  capitalize text-lg text-[#AA77FF] m font-bold ">Take Screenshot of Drugs to report</div>

                  </div>
                        <Camera ref={camera} />
          {/* <Webcam
            audio={false}
                      ref={webcamRef}
                      screenshotFormat="image/jpeg"
                      height={1200}
                      videoConstraints={videoConstraints}
                      className="w-11/12 max-h-screen lg:w-[600px] lg:h-[500px] rounded-2xl"
          /> */}
              </div>
              <div className="w-full  lg:w-5/12 flex justify-center items-center ">
                 <button type="button" className="w-11/12 h-fit bg-[#AA77FF] py-2 ring-2 ring-offset-2 text-white font-bold ring-[#AA77FF] capitalize" onClick={capture}>take screenshot</button>
                  
              </div>
                   <div className="w-full mt-3  lg:w-5/12 flex justify-center items-center ">
                 <button type="button" className="w-11/12 h-fit bg-[#AA77FF] py-2 ring-2 ring-offset-2 text-white font-bold ring-[#AA77FF] capitalize" onClick={capture}>take photo</button>
                  
              </div>













      </div>
    </MainLayout>
  );
}

export default ReportAbuse;
