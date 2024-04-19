import React from 'react';
import '../css/HeaderBar.css';

export default function HeaderBar() {
  return (
    <div className='HeaderBar'>
      <div className="close-btn"></div>
      <div className="min-btn"></div>
      <div className="max-btn"></div>
    </div>
  );
}
