import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import person from "./assets/person.png";
import enemi from "./assets/enemi.png";


// ataques

import ata1 from './assets/ata1.png'
import ata2 from './assets/ata2.png'
import ata3 from './assets/ata3.png'
import ata4 from './assets/ata4.png'

const Batalla = ({ setBatalla, setImgpoke }) => {
  return (
    <div className="fixed z-[600] bg-black w-[100%] h-[100vh]">
      <div className=" flex justify-between w-[100%] h-[8vh] px-[30px] pt-[30px]">
        <div className="w-[40px] h-[40px] rounded-lg text-[25px] bg-[#232323] flex justify-center items-center">
          <FaAngleLeft
            className="text-white"
            onClick={() => {
              setBatalla(false);
            }}
          />
        </div>
        <p className="text-[35px] font-semibold">Battleground</p>
        <figure className="w-[30px]">
          <img className="w-[100%] " src={person} alt="" />
        </figure>
      </div>

      <div className="w-[100%] h-[40vh] flex items-center border-b-8 border-b-[#666]">
        <figure className="w-[80%]">
          <img src={enemi} alt="" className="" />
          <div className="flex gap-2 ml-4">
          <img className="w-[20%] rounded-full " src={person} alt="" />
          Player
          </div>
        </figure>
        <p className="p-[10px] rounded-lg bg-[#6666667a] w-fit">V/S</p>
        <figure className="flex flex-col items-end">
          <img src={setImgpoke} alt="" className="w-[100%]" />
          <div className="flex gap-2">
          You
          <img className="w-[40%] rounded-full " src={person} alt="" />
          </div>
        </figure>
      </div>
      <div className="w-[100%] h-[40vh] pl-[10px]">
        <p className="text-center text-[25px] pt-[20px]">Choose Your Attack</p>
        <div className="flex flex-wrap">
          <img src={ata1} alt=""  className="rotate-[6deg] h-[100%] relative top-[30px]"/>
          <img src={ata2} alt="" className="rotate-[6deg] h-[100%]"/>
          <img src={ata3} alt="" className="rotate-[6deg] h-[100%] relative top-[-10px]"/>
          <img src={ata4} alt="" className="rotate-[6deg] h-[100%]"/>
          
        </div>
      </div>
    </div>
  );
};

export default Batalla;
