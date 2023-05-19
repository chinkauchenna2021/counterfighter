/* eslint-disable no-unused-vars */
import React , {useEffect, useState , useRef} from "react"
import QRCode from 'qrcode';
import MainLayout from "../layouts/MainLayout";
import Input from "../../modules/components/inputcomponents/Input";
import * as S from '../../modules/components/inputcomponents/styles/Styles'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function CodeGenerator() {
    const [getImage, setGetImage] = useState();
    const [uses, setUses] = useState([""])
    const [usesValue, setUsesValue] = useState("")
    const refs = useRef(null)
  const [startDate, setStartDate] = useState(new Date());
QRCode.toDataURL('I am a pony!')
  .then(url => {
      setGetImage(url);
  })
  .catch(err => {
    console.error(err)
  })

    const nameOfDrugs = () => {
        
    }  

    const saveUses = () => {
        if (uses.length == 0) return;
        console.log(uses)
        setUses((enterData) => [...enterData, refs.current.value]);
    }

  return (
      <MainLayout className="container">
          <div className="w-full  flex flex-col justify-center items-center ">
              <div className=" w-11/12 lg:w-4/12 flex flex-col mt-10 mx-auto">
                  <div className="w-full h-10 text-center text-lg text-[#AA77FF] font-semibold tracking-wider">Generate Details</div>
          <div className="w-full h-fit">
                  <label className='font-thin text-sm '>Name of Drugs</label>
                   <S.Input placeholder={"Name of Drugs"} type={"text"}  className='w-full h-10 lg:h-6 text-sm  focus:outline-none border-2 px-2 border-blue-300 rounded-sm'/>        
                  </div>
          <div className="w-full h-fit pt-3">
             <label className='font-thin text-sm '>Manufacturing Company Name</label>
                   <S.Input placeholder={"Manufacturing Company Name"} type={""}  className='w-full h-9 lg:h-6 text-sm  focus:outline-none border-2 px-2 border-blue-300 rounded-sm'/>        
                  </div>
          <div className="w-full h-fit pt-3">
                  <label className='font-thin text-sm '>Date Of Manufacturing</label>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}  className='w-full h-9 lg:h-8 text-sm   focus:outline-none border-2 px-2 border-blue-300 rounded-sm' />
                  </div>
          <div className="w-full h-fit pt-3">
             <label className='font-thin text-sm '>Expiry Date</label>
                   <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}  className='w-full h-10 lg:h-8 text-sm   focus:outline-none border-2 px-2 border-blue-300 rounded-sm'/>
                  </div>
          <div className="w-full h-fit pt-3">
             <label className='font-thin text-sm '>Country of Manufacturing</label>
                   <S.Input  type={"text"} placeholder="Country of Manufacturing"  className='w-full h-10 lg:h-6 text-sm  focus:outline-none border-2 px-2 border-blue-300 rounded-sm'/>        
                  </div>
          <div className="w-full h-fit pt-3">
              <label className='font-thin text-sm '>NAFDAC Reg.No</label>
                   <S.Input  type={"text"}  placeholder={'BN23724746'}  className='w-full h-10 lg:h-6 text-sm  focus:outline-none border-2 px-2 border-blue-300 rounded-sm' />        
                  </div>
          <div className="w-full h-fit pt-3 flex flex-col space-y-2">
                <label className='font-thin text-sm '>Uses of Drugs</label>
                <S.Textarea type={"text"} refs ={refs}  placeholder={"Cough , headache , ulcer ..."}  className='w-full min-h-[100px] lg:h-6 text-sm  focus:outline-none border-2 px-2 border-blue-300 rounded-sm' /> 
          </div>
              <div className="w-full h-fit pt-3 flex flex-col space-y-2">
                <label className='font-thin text-sm '>Prescription</label>
                <S.Textarea type={"text"} refs ={refs}  placeholder={"Ensure to take it based on your Doctors prescription..."}  className='w-full min-h-[100px] lg:h-6 text-sm  focus:outline-none border-2 px-2 border-blue-300 rounded-sm' /> 
          </div>
          
             <div className="w-full h-fit pt-3 flex flex-col  mb-10">
                <button type={"button"} className='w-full text-white font-bold text-md tracking-wider lg:h-10 lg:mt-3 text-sm outline-none focus:outline-none ring-1 ring-[#AA77FF] ring-offset-4 bg-[#AA77FF]  px-2  rounded-sm h-12' >Generate</button>
                  </div>
          
                 </div>
          </div>
      </MainLayout>
  )
}

export default CodeGenerator