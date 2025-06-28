import React, {FC, ReactNode} from 'react';

type ProgressBarProps={
  percentage: number;
  color: 'red' | 'emerald' | 'indigo' | 'lightBlue' | 'amber';
  children?:ReactNode;
};

const bgColorMap = {
  red:{
    base:'bg-red-200',
    fill: 'bg-red-500',
  },
  emerald:{
    base:'bg-emerald-200',
    fill: 'bg-emerald-500',
  },
  indigo:{
    base:'bg-indigo-200',
    fill:'bg-indigo-500',
  },
  lightBlue:{
    base:'bg-lightBlue-200',
    fill:'bg-lightBlue-500',
  },
  amber:{
    base: 'bg-amber-200',
    fill:'bg-amber-500',
  },
};

const ProgressBar:FC<ProgressBarProps>=({percentage, color, children})=>{
  const colors=bgColorMap[color];
  return(
    <div className='relative w-full'>
      <div className={`overflow-hidden h-2 text-xs flex rounded ${colors.base}`}>

<div className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${colors.fill}`} style={{width:`${percentage}%`}}>
  {children}

      </div>
      </div>
      
    </div>
  )
}

export default ProgressBar;
