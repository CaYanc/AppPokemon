import React from "react";

const Card = ({ nombre, imgpoke, fondopoke, fuego, evolution,setEstado,setImgpoke,setNombre,setFondopoke }) => {
  return (
    <div
      className="w-[100%] h-[100%] p-[20px] flex items-end relative"
      onClick={() => {
        setEstado(true),
        setImgpoke(imgpoke),
        setNombre(nombre),
        setFondopoke(fondopoke)

      }}
    >
      <figure className="absolute ">
        <img src={fondopoke} alt="" />
      </figure>
      <figure className="absolute top-[-20%] right-0 ">
        <img src={imgpoke} alt="" />
      </figure>
      <div className="">
        <p className="text-black font-extrabold">{nombre}</p>
        <br />
        <span className="px-4 py-2 rounded-full bg-[#726c6449] text-black mr-4">
          {fuego}
        </span>
        <span className="px-4 py-2 rounded-full  bg-[#726c6449] text-black">
          Evolution-{evolution}
        </span>
      </div>
    </div>
  );
};

export default Card;
