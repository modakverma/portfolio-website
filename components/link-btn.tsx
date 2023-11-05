"use client"
import React from 'react'
import {BsLink45Deg} from 'react-icons/bs'

interface LinkBtnProp{
  url:string;
}

const LinkBtn:React.FC<LinkBtnProp>= ({url}) => {
  return (
    <button className='group absolute p-2 bg-slate-200 border-2 border-slate-300 rounded-xl hover:bg-slate-300 hover:drop-shadow-lg hover:scale-110 transition'>
      <a href={url} target="_blank">
      <BsLink45Deg size={30} color="gray"/>
      </a>
    </button>
  )
}

export default LinkBtn;
