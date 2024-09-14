import React, { useState } from "react";
import Menu from "./components/Menu";
import bola from './assets/bola.png';
import pokebola from "./assets/pokebola.png";
import Card from "./components/Card";

import sapo from "./assets/1.png";
import sapofondo from "./assets/11.png";
import dragon from "./assets/2.png";
import dragonfondo from "./assets/22.png";
import dino from "./assets/3.png";
import dinofondo from "./assets/33.png";
import Pokemon from "./Pokemon";
import Batalla from "./Batalla";

const Home = () => {
  const [estado, setEstado] = useState(false);
  const [imgpoke, setImgpoke] = useState();
  const [nombre, setNombre] = useState()
  const [fondopoke, setFondopoke] = useState()

  return (
    <div className="w-[100%] h-[100vh] relative overflow-hidden">
      <figure className="absolute left-0 top-[10%] z-[-30] ">
        <img src={bola} alt="" />
      </figure>

      <Menu />
      <div className="w-[100%] px-[20px] mt-[40px] text-[30px]">
        <p className="font-light text-[#999]">Select Your</p>
        <span className="font-semibold text-[40px] flex gap-3">
          Pokemon <img src={pokebola} alt="" className="object-contain" />
        </span>
      </div>

      <div className="flex w-[100%] relative mt-10 ">
        <div className="w-fit pr-[20px] pl-[20px] relative self-end mb-[250px]">
          <p className="font-light text-[#999] text-[20px]">
            12 Pokemos <br /> in your <br /> pokedex
          </p>
        </div>
        <div className="relative right-[-20px] flex flex-col gap-[100px] ">
          <div className="bg-[#b2ffe2] rounded-xl relative right-[-50px] w-[280px] h-[280px] rotate-[20deg]" >
            <Card
              nombre="Bulbasaur"
              imgpoke={sapo}
              fondopoke={sapofondo}
              evolution="1"
              fuego="☘ Plant"
              setEstado={setEstado}
              estado={estado}
              setImgpoke={setImgpoke}
              setNombre={setNombre}
              setFondopoke={setFondopoke}
              
              
            />
          </div>
          <div className="bg-[#ffb444] rounded-xl w-[280px] h-[280px] absolute z-[30] bottom-[30%]">
            <Card
              nombre="Charizard"
              imgpoke={dragon}
              fondopoke={dragonfondo}
              fuego="🔥 Fire"
              evolution="3"
              setEstado={setEstado}
              estado={estado}
              setImgpoke={setImgpoke}
              setNombre={setNombre}
              setFondopoke={setFondopoke}

            />
          </div>
          <div className="bg-[#addaee] rounded-xl relative right-[-50px] w-[280px] h-[280px] rotate-[-20deg]">
            <Card
              nombre="Blastoise"
              imgpoke={dino}
              fondopoke={dinofondo}
              evolution="2"
              fuego="💧 Wather"
              setEstado={setEstado}
              estado={estado}
              setImgpoke={setImgpoke}
              setNombre={setNombre}
              setFondopoke={setFondopoke}

            />
          </div>
          
        </div>
      </div>
      {estado && <Pokemon setEstado={setEstado} setImgpoke={imgpoke} setNombre={nombre} setFondopoke={fondopoke}/>}
    </div>
  );
};

export default Home;
