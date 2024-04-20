import React from 'react';
import '../css/Terminal.css';
import HeaderBar from './HeaderBar';
import Body from './Body';

export default function Terminal() {
  return (
    <div className='Terminal'>
      <HeaderBar />
      <Body />
    </div>
  );
}
