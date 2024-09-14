import React, { useState } from "react";
import Menu from "./components/Menu";
import pokebola from "./assets/pokebola.png";
import { IoIosArrowUp } from "react-icons/io";
import person from './assets/person.png'
import { FaAngleLeft } from "react-icons/fa";
import Home from "./Home";
import Batalla from "./Batalla";


const Pokemon = ({ setEstado,setImgpoke,setNombre,setFondopoke}) => {

  const [batalla, setBatalla] = useState(false)

  return (
    <div className="bg-black fixed top-0 left-0 w-[100%] h-[100vh] z-[400] flex flex-col items-center ">
      <span className="absolute w-[150%] h-[60vh] box z-[-10]"></span>
      <div className=" flex justify-between w-[100%] h-[8vh] px-[30px] pt-[30px]">
        <div className="w-[40px] h-[40px] rounded-lg text-[25px] bg-[#232323] flex justify-center items-center">
          <FaAngleLeft className="text-white" onClick={()=>{setEstado(false)}}/>
        </div>
        <figure className="w-[30px]">
          <img className="w-[100%] " src={person} alt="" />
        </figure>
      </div>

      <figure className="relative h-[40%] ">
        <img src={setFondopoke} alt="" className="absolute right-[10%] z-[50] w-[200%]"/>
        <img src={setImgpoke} alt="" className="relative z-[300] "/>
      </figure>

      <div className="relative flex flex-col items-center gap-[10px]">
        <span className="absolute top-[-10%] font-extrabold text-[#9999995b] text-[70px]">
          {setNombre}
        </span>
        <p className="text-[25px] font-semibold">{setNombre}</p>
        <p className="px-4 py-2 rounded-full bg-[#726c6449] text-black mr-4 w-fit">
          Fire
        </p>
        <p className="text-center text-[17px] text-[#999]">
          Charizard is known for its dragon-like appearance, with a large
          wingspan and a long, pointed tail. He is capable of using powerful
          Fire-type attacks as well as Flying-type moves.
        </p>
        <a href="#" className="text-[#ffb444] border-b-2 border-[#ffb444]">
          View States
        </a>

        <div className="relative bg-white h-[150px] w-[60px] rounded-full flex items-end justify-center shadow-md shadow-white">
          <img src={pokebola} alt="" className="w-[90%] relative z-[10]" onClick={()=>{setBatalla(true)}} />
          <div className="absolute text-black text-[35px] top-0 flex flex-col gap-[5px] z-[1]">
            <IoIosArrowUp />
            <IoIosArrowUp className="text-[#999]" />
            <IoIosArrowUp className="text-[#ddd]" />
          </div>
        </div>
        <p>Swipe up to select</p>
      </div>
      {batalla && (<Batalla setBatalla={setBatalla} setImgpoke={setImgpoke}/>)}
    </div>
  );
};

export default Pokemon;
