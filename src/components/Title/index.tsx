import React from 'react'

interface props {
  title: string;
}

export default function Title({title}:props) {
  return (
    <div className='title_container'>
        <img 
        className="title_rectangle" 
        src={require('./../../assets/images/doubleRantangle.svg').default} 
        alt="Sai Min Pyae Kyaw" />
        <div className='title_text'>{title}</div>
    </div>
  )
}
