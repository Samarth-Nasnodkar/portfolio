import React from 'react';
import '../../css/Ls.css';

export default function Ls() {
  const commands = ['ls', 'about', 'projects', 'contact', 'welcome', 'education'];
  commands.sort();
  return (
    <div className='ls-main'>
      {commands.map((cmd, index) => (
        <div key={index} className='ls-item'>{cmd}</div>
      ))}
    </div>
  );
}
