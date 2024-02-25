"use client";
import React, { useState } from "react";
import { ImCross } from "react-icons/im";

const Lightbox = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-opacity-75 flex items-center justify-center pt-16 md:pt-0">
      <div className="-mt-16">
        <div className="flex justify-end">
          <button className="text-white rounded m-2" onClick={onClose}>
            <ImCross className="text-[#E7323F]" />
          </button>
        </div>
        <div className="">
          <iframe
            title="YouTube video player"
            // className="w-screen h-[350px] sm:w-[600px] sm:h-[400px]  md:w-[430px] md:h-[280px]  lg:w-[600px] lg:h-[400px] xl:w-[750px] xl:h-[450px] 2xl:w-[900px] 2xl:h-[530px]"
            className="px-2 lightbox-video w-screen sm:w-[600px] sm:h-[400px]  md:w-[430px] md:h-[280px]  lg:w-[600px] lg:h-[400px] xl:w-[750px] xl:h-[450px] 2xl:w-[900px] 2xl:h-[530px]"
            //    className="lightbox-video"
            src="https://www.youtube.com/embed/Wh0q8vdH-ro?autoplay=1"
            frameborder="0"
            scrolling="no"
            sandbox="allow-same-origin allow-scripts"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default Lightbox;
