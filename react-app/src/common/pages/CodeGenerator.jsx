/* eslint-disable no-unused-vars */
import React , {useEffect, useState , useRef} from "react"
import QRCode from 'qrcode';
import MainLayout from "../layouts/MainLayout";
import Input from "../../modules/components/inputcomponents/Input";

function CodeGenerator() {
    const [getImage, setGetImage] = useState();
    const [uses, setUses] = useState([""])
    const [usesValue, setUsesValue] = useState("")
    const refs = useRef(null)
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
                  <div className="w-full h-10 text-center text-lg">Generate Details</div>
                  <div className="w-full h-fit">
                   <Input placeholder={"Cloronfenicle BP"} type={"text"} value="" name="Enter Drug Name"  onclick={()=>nameOfDrugs()}/>        
                  </div>
                   <div className="w-full h-fit pt-3">
                   <Input placeholder={"juhel ltd"} type={""} value="" name="Manufacturer"  onclick={()=>nameOfDrugs()}/>        
                  </div>
                <div className="w-full h-fit pt-3">
                   <Input  type={"date"}  name="Date of manufacturing"  onclick={()=>nameOfDrugs()}/>        
                  </div>
                   <div className="w-full h-fit pt-3">
                   <Input  type={"date"}  name="Expiry Date"  onclick={()=>nameOfDrugs()}/>        
                  </div>
                  <div className="">
                      
                  </div>
                  <div >
                      <form className="w-full h-fit pt-3 flex flex-row justify-center items-center">
                      <Input type={"text"} refs ={refs}  placeholder={"cough"} name="Uses"  /> 
                      <button onClick={()=>saveUses()} type="button" className="h-9 lg:h-8 ring-offset-2 bg-[#AA77FF] text-md mt-7 w-3/12 flex justify-center items-center ring-1 ring-[#AA77FF]" >Enter</button>        
                      </form>
                  </div>
              </div>
          </div>
      </MainLayout>
  )
}

export default CodeGenerator