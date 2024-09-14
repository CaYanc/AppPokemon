import React from 'react'
import { FaAngleLeft } from 'react-icons/fa'
import person from '../assets/person.png'

const Menu = ({setEstado}) => {
  return (
    <div className=' flex justify-between w-[100%] h-[8vh] px-[30px] pt-[30px]'>
        <div className='w-[40px] h-[40px] rounded-lg text-[25px] bg-[#232323] flex justify-center items-center' onClick={()=>{setEstado(false)}}><FaAngleLeft className='text-white'/></div>
        <figure className='w-[30px]'>
            <img className='w-[100%]' src={person} alt="" />
        </figure>
    </div>
  )
}

export default Menu