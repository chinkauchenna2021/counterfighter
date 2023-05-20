/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef, useMemo } from "react";
import { useNavigate } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Input from "../../modules/components/inputcomponents/Input";
import * as S from "../../modules/components/inputcomponents/styles/Styles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useLocalStorage from "use-local-storage";
import { setOnStorage , getOnStorage } from "../../modules/hook/store/localStorgageStore";

function CodeGenerator() {
  const [uses, setUses] = useState([""]);
  const [usesValue, setUsesValue] = useState("");
  const refs = useRef(null);
  const [startDate, setStartDate] = useState(new Date());
  const STORAGENAME = "saved_to_db_local";
  const navigate = useNavigate();

  const [formInput, setFormInput] = useState({productDate:new Date(), expiryDate:new Date()});

    const handleformChange = (e) =>
      setFormInput((inputs) => ({
        ...inputs,
        [e.target.name]: e.target.value,
      }));
    const saveData = () => {
      if (
        formInput.name == "" &&
        formInput.expiryDate == "" &&
        formInput.productDate == "" &&
        formInput.nafdacReg == "" &&
        formInput.companyName == "" &&
        formInput.manufactureCountry == "" &&
        formInput.prescription == "" &&
        formInput.uses == ""
      ) {
        alert("Ensure to complete form before submitting");
      } else {
        const isSaved = setOnStorage(STORAGENAME, JSON.stringify(formInput));
        if (isSaved) {
          window.alert("data saved and generated successful");
          navigate("/generated");
        }
      }
    };

  return (
    <MainLayout className="container">
      <div className="w-full  flex flex-col justify-center items-center ">
        <div className=" w-11/12 lg:w-4/12 flex flex-col mt-10 mx-auto">
          <div className=" w-full h-10 text-center text-lg text-[#AA77FF] font-semibold tracking-wider">
            Generate Details
          </div>
          <div className="w-full h-fit">
            <label className="font-thin text-sm ">Name of Drugs</label>
            <S.Input
              placeholder={"Name of Drugs"}
              value={formInput.name || ""}
              onChange={handleformChange}
              name="name"
              type={"text"}
              className="w-full h-10 lg:h-6 text-sm  focus:outline-none border-2 px-2 border-blue-300 rounded-sm"
            />
          </div>
          <div className="w-full h-fit pt-3">
            <label className="font-thin text-sm ">
              Manufacturing Company Name
            </label>
            <S.Input
              placeholder={"Manufacturing Company Name"}
              type={""}
               value={formInput.companyName || ""}
              onChange={handleformChange}
              name="companyName"
              className="w-full h-9 lg:h-6 text-sm  focus:outline-none border-2 px-2 border-blue-300 rounded-sm"
            />
          </div>
          <div className="w-full h-fit pt-3">
            <label className="font-thin text-sm ">Date Of Manufacturing</label>
            <DatePicker
              selected={formInput.productDate || ""}
              onChange={(date) => setFormInput(d=>({...d ,productDate:date}))}
              className="w-full h-9 lg:h-8 text-sm   focus:outline-none border-2 px-2 border-blue-300 rounded-sm"
            />
          </div>
          <div className="w-full h-fit pt-3">
            <label className="font-thin text-sm ">Expiry Date</label>
            <DatePicker
              selected={formInput.expiryDate || ""}
              onChange={(date) => setFormInput(d=>({...d , expiryDate:date}))}
              className="w-full h-10 lg:h-8 text-sm   focus:outline-none border-2 px-2 border-blue-300 rounded-sm"
            />
          </div>
          <div className="w-full h-fit pt-3">
            <label className="font-thin text-sm ">
              Country of Manufacturing
            </label>
            <S.Input
              type={"text"}
              value={formInput.manufactureCountry || ""}
              onChange={handleformChange}
              name="manufactureCountry"
              placeholder="Country of Manufacturing"
              className="w-full h-10 lg:h-6 text-sm  focus:outline-none border-2 px-2 border-blue-300 rounded-sm"
            />
          </div>
          <div className="w-full h-fit pt-3">
            <label className="font-thin text-sm ">NAFDAC Reg.No</label>
            <S.Input
              type={"text"}
              value={formInput.nafdacReg || ""}
              onChange={handleformChange}
              name="nafdacReg"
              placeholder={"BN23724746"}
              className="w-full h-10 lg:h-6 text-sm  focus:outline-none border-2 px-2 border-blue-300 rounded-sm"
            />
          </div>
          <div className="w-full h-fit pt-3 flex flex-col space-y-2">
            <label className="font-thin text-sm ">Uses of Drugs</label>
            <S.Textarea
              type={"text"}

              value={formInput.uses || ""}
              onChange={handleformChange}
              name="uses"
              placeholder={"Cough , headache , ulcer ..."}
              className="w-full min-h-[100px] lg:h-6 text-sm  focus:outline-none border-2 px-2 border-blue-300 rounded-sm"
            />
          </div>
          <div className="w-full h-fit pt-3 flex flex-col space-y-2">
            <label className="font-thin text-sm ">Prescription</label>
            <S.Textarea
              type={"text"}
              value={formInput.prescription || ""}
              onChange={handleformChange}
              name="prescription"
              placeholder={
                "Ensure to take it based on your Doctors prescription..."
              }
              className="w-full min-h-[100px] lg:h-6 text-sm  focus:outline-none border-2 px-2 border-blue-300 rounded-sm"
            />
          </div>

          <div className="w-full h-fit pt-3 flex flex-col  mb-10">
            <button
              type={"button"}
              onClick={()=>saveData()}
              className="w-full text-white font-bold text-md tracking-wider lg:h-10 lg:mt-3 text-sm outline-none focus:outline-none ring-1 ring-[#AA77FF] ring-offset-4 bg-[#AA77FF]  px-2  rounded-sm h-12"
            >
              Generate
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default CodeGenerator;
