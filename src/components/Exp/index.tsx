import React from 'react'

interface props {
    cmp: string;
    position: string;
    duration: string;
    desc: string;
}

export default function Exp({cmp, position, duration, desc}: props) {
  return (
    <div>
        <div className='exp_position'>{position}</div>
        <div className='exp_cmp'>{`${cmp} ${duration}`}</div>
        <div className='exp_desc'>{desc}</div>
    </div>
  )
}
