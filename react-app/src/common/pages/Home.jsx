import  {useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { QrReader } from 'react-qr-reader';
import { ViewFinder } from "../../modules/hook/useHooks";
import { useWindowSize} from '@react-hook/window-size'
import { FaRegWindowClose } from "react-icons/fa";
// import Lightbox from 'lightbox-react';
// import 'lightbox-react/style.css'; // This only needs to be imported once in your  
 import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useNavigate } from "react-router";


function Home() {
    const [show, setShow] = useState("")
    const [displayLighthouse , setDisplayLighthouse] = useState({photoIndex: 0 ,isOpen:false})
    const [data, setData] = useState("No result");
    console.log(data);
    const [width, height] = useWindowSize();
    const navigate = useNavigate();
// const images = [
//     '../../drugs1.png',
//     '../../drugs1.png',
//       '../../drugs1.png'
// ];

    
    const getScannerResult = (result, error) => {
      if (!result) {
          setData(result?.text);
        //   console.log(result)
      }
      if (!error) {
          console.info(error);
          console.log(error)
      }
    };

    const changeModel = () => {
     setShow("hidden")
    }
    
    const enterCodeGenPage = () => {
        navigate("/createcode");
    }

  return (
    <MainLayout>
      <div className="relative w-full h-screen flex flex-col lg:flex-row  justify-center items-center">
        <div className="lg:border-r flex justify-center  border-orange-400 w-full min-h-screen relative">
          {displayLighthouse.isOpen && (
            <Lightbox
              open={displayLighthouse.isOpen}
              close={() => setDisplayLighthouse({ isOpen: false })}
              slides={[
                { src: "../../drugs1.png" },
                { src: "../../drugs1.png" },
                { src: "../../drugs1.png" },
              ]}
            />
          )}

          <div className={`flex justify-center lg:fixed`}>
            <QrReader
              videoContainerStyle={{
                width: width > 800 ? width / 5 : width,
                height: height,
              }}
              scanDelay={100}
              ViewFinder={ViewFinder}
              onResult={(result, error) => getScannerResult(result, error)}
            />
          </div>
        </div>
        <div
          className={`h-full ${show} w-full fixed lg:relative bg-white top-1/4 lg:top-0 left-0 z-20 rounded-t-xl`}
        >
          <button
            type="button"
            onClick={() => changeModel()}
            className="w-full lg:hidden h-12  flex justify-end items-center cursor-pointer "
          >
            <div className="w-fit h-fit mr-5">
              <FaRegWindowClose size={28} color={"AA77FF"} />
            </div>
          </button>
          <div className={`w-full max-h-[500px] pt-72  lg:h-screen overflow-y-scroll  flex justify-center items-center lg:pt-32`}>
            <div className="w-full min-h-[400px] lg:w-8/12 lg:h-screen flex flex-col justify-center items-center pt-4">
              <button className="w-11/12 border h-fit border-slate-300">
                <img
                  onClick={() => setDisplayLighthouse({ isOpen: true })}
                  src={"../../drugs1.png"}
                  loading="lazy"
                  className=""
                />
              </button>
              <div className="w-11/12 border h-fit flex-col border-slate-300 my-2">
                <div className="w-full h-fit text-center py-4 font-bold text-lg tracking-wide text-blue-400">
                  Ramipril Capsule
                </div>
                <div className="flex flex-row justify-between items-center px-2">
                  <div className="w-fit text-md text-slate-600 font-semibold">
                    Manufacturer{" "}
                  </div>
                  <div className="w-fit text-md text-blue-500 font-semibold">
                    GreenLife Limited
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center px-2 py-3">
                  <div className="w-fit text-md text-slate-600 font-semibold">
                    Date of Manufacture{" "}
                  </div>
                  <div className="w-fit text-md text-blue-500 font-semibold capitalize">
                    4 june 2002
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center px-2 py-3">
                  <div className="w-fit text-md text-slate-600 font-semibold">
                    Expiry Date{" "}
                  </div>
                  <div className="w-fit text-md text-blue-500 font-semibold capitalize">
                    4 june 2022
                  </div>
                </div>
                <div className="flex flex-row justify-evenly items-center px-2 py-3">
                  <div className="w-6/12 text-md text-slate-600 font-semibold">
                    Uses
                  </div>
                  <div className="w-6/12 text-md text-blue-500 font-semibold capitalize text-center">
                    cough , catrrh , cold , malaria , typhoid ,headache
                  </div>
                </div>
                <div className="flex flex-row justify-evenly items-center px-2 py-3">
                  <div className="w-6/12 text-md text-slate-600 font-semibold">
                    Advice
                  </div>
                  <div className="w-6/12 text-md text-blue-500 font-semibold capitalize text-center">
                    Ensure to take it based on doctors prescription
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center px-2 py-3">
                  <div className="w-fit text-md text-slate-600 font-semibold capitalize">
                    Country of manufacturing{" "}
                  </div>
                  <div className="w-fit text-md text-blue-500 font-semibold capitalize">
                    Netherlands
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center px-2 py-3">
                  <div className="w-fit text-md text-slate-600 font-semibold">
                    NAFDAC Reg.no
                  </div>
                  <div className="w-fit text-md text-blue-500 font-semibold capitalize">
                    BN1245835447
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center px-2 py-3 my-4">
                  <button
                    type="button"
                    className="w-full lg:w-10/12 mx-auto  h-fit py-1 ring-1 ring-[#AA77FF] ring-offset-4 text-md text-white text-blue-500 font-semibold capitalize bg-[#AA77FF]"
                  >
                    Report Abuse{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center w-full absolute bottom-3 left-0  lg:hidden">
          <button
            onClick={() => enterCodeGenPage()}
            type="button"
            className="z-10 w-11/12 m-auto h-10 ring-[#AA77FF] ring-1 ring-offset-2 bg-[#AA77FF] text-white text-md font-bold tracking-wider"
          >
            Back
          </button>
        </div>
      </div>
    </MainLayout>
  );
}

export default Home