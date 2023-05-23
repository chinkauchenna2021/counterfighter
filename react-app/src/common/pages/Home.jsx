/* eslint-disable no-unused-vars */
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
import axios from "axios";
import { dateFormat } from "../../modules/hook/store/localStorgageStore";
import moment  from "moment";


function Home() {
    const [show, setShow] = useState("hidden")
    const [displayLighthouse , setDisplayLighthouse] = useState({photoIndex: 0 ,isOpen:false,image:null})
  const [data, setData] = useState([]);
  const [getImage, setGetImage] = useState(null);
    const [width, height] = useWindowSize();
    const navigate = useNavigate();
// const images = [
//     '../../drugs1.png',
//     '../../drugs1.png',
//       '../../drugs1.png'
// ];

    
    const getScannerResult = async (result, error) => {
      if (result) {
        // setData(result?.text);
        const batch = JSON.parse(result?.text);
        const batchqrcode = batch?.batchNo;
       
      await axios
        .post("http://localhost:5000/getAll",{batchNo:batchqrcode}, {
          headers: {
            "Content-Type": `multipart/form-data`,
          },
        })
        .then((response) => {
          setShow([])
          if (response.data.result.length > 0) {
            setData(response.data.result);
             setShow("")
            console.log(response.data.result)
          }
        })
        .catch((e) => {
          window.alert("failed");
          setShow([])
        });

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
      <div className="container relative w-full h-screen flex flex-col lg:flex-row  justify-center items-center">
        <div className="lg:border-r flex justify-center  border-slate-400 w-full min-h-screen ">
          {displayLighthouse.isOpen && (
            <Lightbox
              open={displayLighthouse.isOpen}
              close={() => setDisplayLighthouse({ isOpen: false })}
              slides={[
                { src: (displayLighthouse.image != null)? "http://localhost:5000/images/"+displayLighthouse.image : "No Image available" },

              ]}
            />
          )}

          <div className={`flex justify-center lg:fixed left-1/4 top-0 lg:py-5`}>
            <QrReader
              videoContainerStyle={{
                width: (width > 800) ? (width / 5) : width,
                height: (height > 850)? width : (height),
              }}
              scanDelay={300}
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

          {(data?.length > 0) &&
            
            (data?.map((items, index) =>    
            (
              <div key={index} className={`w-full max-h-[500px] lg:max-h-[700px] pt-72  lg:h-screen overflow-y-scroll  flex justify-center items-center`}>
                <div className="w-full min-h-[400px] lg:w-8/12 lg:h-screen flex flex-col justify-center items-center pt-4">
                  <div className="w-11/12 border h-fit border-slate-300 flex justify-center">
                    <img
                      onClick={() => setDisplayLighthouse({ isOpen: true,image:items.image })}
                      src={"http://localhost:5000/images/"+items.image}
                      loading="lazy"
                      className="object-fit"
                    />
            
                  </div>
                  <div className="w-11/12 border h-fit flex-col border-slate-300 my-2 placeholder lg:px-5">
                    <div className="w-full h-fit text-center py-4 font-bold text-lg tracking-wide text-blue-400">
                      {items.drugName}
                    </div>
                    <div className="flex flex-row justify-between items-center px-2">
                      <div className="w-fit text-sm text-slate-600 font-semibold">
                        Manufacturer{" "}
                      </div>
                      <div className="w-fit text-sm text-blue-500 font-semibold">
                        { items.cname}
                      </div>
                    </div>
                    <div className="flex flex-row justify-between items-center px-2 py-3">
                      <div className="w-fit text-sm text-slate-600 font-semibold">
                        Date of Manufacture{" "}
                      </div>
                      <div className="w-fit text-sm text-blue-500 font-semibold capitalize">
                       {dateFormat(items.drugDate)}
                      </div>
                    </div>
                    <div className="flex flex-row justify-between items-center px-2 py-3">
                      <div className="w-fit text-sm text-slate-600 font-semibold">
                        Expiry Date{" "}
                      </div>
                      <div className="w-fit text-sm text-blue-500 font-semibold capitalize">
                      {dateFormat(items.drugExpiration)}
                      </div>
                    </div>
                      <div className="flex flex-row justify-between items-center px-2 py-3">
                      <div className="w-fit text-sm text-slate-600 font-semibold">
                        Batch No{" "}
                      </div>
                      <div className="w-fit text-sm text-blue-500 font-semibold capitalize">
                      {items.batchNo}
                      </div>
                    </div>
                    <div className="flex flex-row justify-between items-center px-2 py-3">
                      <div className="w-fit text-sm text-slate-600 font-semibold">
                        Uses
                      </div>
                      <div className="w-fit text-sm text-blue-500 font-semibold capitalize text-center">
                      {items.drugUses}
                      </div>
                    </div>
                      <div className="flex flex-row justify-between items-center px-2 py-3">
                      <div className="w-6/12 text-sm text-slate-600 font-semibold">
                        Status
                      </div>
                    {
                        ((new Date().getTime()) > (new Date(items.drugExpiration).getTime())) ? (
                        <div className="w-fit text-sm text-red-500 font-semibold capitalize text-center">
                        <div className="" >Expired. Please Report</div>
                      </div>
                                             
                        ) : 
                            
                      <div className="w-fit text-sm text-green-500 font-semibold capitalize text-center">
                  <div className="" >Drug is Original and Not Expired</div>
                      </div>
                     }

                    </div>
                    <div className="flex flex-row justify-between items-center px-2 py-3">
                      <div className="w-fit text-sm text-slate-600 font-semibold capitalize">
                        Country of manufacturing{" "}
                      </div>
                      <div className="w-fit text-sm text-blue-500 font-semibold capitalize">
                        {items.drugCountry}
                      </div>
                    </div>
                    <div className="flex flex-row justify-between items-center px-2 py-3">
                      <div className="w-fit text-sm text-slate-600 font-semibold">
                        NAFDAC Reg.no
                      </div>
                      <div className="w-fit text-sm text-blue-500 font-semibold capitalize">
                       {items.drugNafdac}
                      </div>
                    </div>
                    <div className="flex flex-row justify-between items-center px-2 py-3 my-4">
                      <button
                        type="button"
                        onClick={() => navigate('/reportAbuse')}
                        className="w-full lg:w-12/12 mx-auto  h-fit py-1 ring-1 ring-[#AA77FF] ring-offset-4 text-sm text-white text-blue-500 font-semibold capitalize bg-[#AA77FF]"
                      >
                        Report Abuse{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>)))}
        </div>
        <div className="flex justify-center items-center w-full absolute bottom-5 left-0  lg:hidden">
          <button
            onClick={() => enterCodeGenPage()}
            type="button"
            className="z-10 w-11/12  m-auto h-7 ring-[#AA77FF] ring-1 ring-offset-2 bg-[#AA77FF] text-white text-xs font-bold tracking-wider"
          >
            Back
          </button>
        </div>
      </div>
    </MainLayout>
  );
}

export default Home