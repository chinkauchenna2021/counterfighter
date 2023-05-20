/* eslint-disable no-unused-vars */
import React, {useState ,useEffect} from 'react'
import QRCode from "qrcode";
import { getOnStorage } from '../../modules/hook/store/localStorgageStore';
import MainLayout from '../layouts/MainLayout';
import { saveAs } from 'file-saver';
import { useNavigate } from 'react-router';
import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon
} from "react-share";

function Qrcodepage() {
    const [storageURL, setStorageURL] = useState(null)
    const [getFile , setGetFile] = useState(null)
    const STORAGENAME = "saved_to_db_local";
    const navigate = useNavigate();
    useEffect(() => {
        (async () => {
            try {
                
        const localData = getOnStorage(STORAGENAME)
                const generatedURL = await QRCode.toDataURL(localData);
                setStorageURL(generatedURL);
                 const data = {
                   files: [
                     new File([generatedURL], "image.png", {
                       type: generatedURL.type,
                     }),
                   ],
                   title: "Image",
                   text: "image",
                };
                setGetFile(data)
            } catch (e) {  
                window.alert("fetching data from storage..." );
            }
      })();
    }, [storageURL]);

    const downloadImage = () => {
      saveAs(storageURL, `image_${Math.random()}_.jpg`) // Put your image url here.
    };

    const enterHome = () => {
        navigate("/")
    }

    const enterBack = () => {
        window.history.back();
    }

    // const sharetoSocial = async () => {
    //     if ('canShare' in navigator) {
    //         try {
              
    //           if (getFile == null) return;
    //           await navigator.share(getFile);
    //         } catch (err) {
    //           console.error("not working "+err);
    //         }
        
    //     } else {
    //         alert('system do not support share')
    //     }
    // }

  return (
    <MainLayout className="container flex w-full justify-center items-center mx-auto">
      <div className="w-full lg:w-11/12 h-fit flex flex-col items-center justify-center lg:space-y-8 ">
        <div className="flex flex-row w-full lg:hidden justify-between items-center h-10">
          <span
            className="w-20  flex justify-center items-center  text-sm py-1 mx-1 font-bold text-slate-600 cursor-pointer"
            onClick={() => enterHome()}
          >
            Home
          </span>{" "}
          <span
            className="w-20  flex justify-center items-center  text-sm py-1 mx-1 font-bold text-slate-600 cursor-pointer"
            onClick={() => enterBack()}
          >
            Back
          </span>
        </div>
        <div className="border-dotted border-2 mt-5 py-10 lg:border-none lg:py-0  border-slate-600 w-11/12 lg:w-11/12 h-fit flex flex-col items-center justify-center lg:space-y-8  lg:pt-20">
          <div className="  mx-auto w-full flex justify-center items-center">
            <img
              src={storageURL}
              loading="lazy"
              className="h-5/12 w-11/12 lg:w-64 lg:h-80 object-contain"
            />
          </div>
          <div className="w-full flex justify-center items-center">
            <button
              type="button"
              onClick={() => downloadImage()}
              className="h-8 w-11/12 lg:w-3/12 ring-2 ring-offset-2 ring-[#AA77FF] bg-[#AA77FF] text-white font-bold text-sm capitalize"
            >
              download image
            </button>
          </div>
          <div className="h-20 w-20">
                      <div className="w-10 h-10">
                          <WhatsappShareButton url={storageURL}>
                              
                              <WhatsappIcon size={32} round />

                          </WhatsappShareButton>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Qrcodepage