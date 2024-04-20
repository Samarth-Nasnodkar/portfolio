import React from 'react';
import '../../css/Welcome.css';

export default function Welcome() {
  return (
    <div className='welcome-main'>
      <pre>
░██╗░░░░░░░██╗███████╗██╗░░░░░░█████╗░░█████╗░███╗░░░███╗███████╗
░██║░░██╗░░██║██╔════╝██║░░░░░██╔══██╗██╔══██╗████╗░████║██╔════╝
░╚██╗████╗██╔╝█████╗░░██║░░░░░██║░░╚═╝██║░░██║██╔████╔██║█████╗░░
░░████╔═████║░██╔══╝░░██║░░░░░██║░░██╗██║░░██║██║╚██╔╝██║██╔══╝░░
░░╚██╔╝░╚██╔╝░███████╗███████╗╚█████╔╝╚█████╔╝██║░╚═╝░██║███████╗
░░░╚═╝░░░╚═╝░░╚══════╝╚══════╝░╚════╝░░╚════╝░╚═╝░░░░░╚═╝╚══════╝                     
      </pre>
      <div className='welcome-item'>Welcome to my terminal portfolio site!</div>
      <div className='welcome-item'>------------</div>
      <div className='welcome-item'>
        The source code for this site can be found at&nbsp;
        <a href='https://github.com/Samarth-Nasnodkar/portfolio' target='_blank' rel='noopener noreferrer'>Github repo</a>
      </div>
      <div className='welcome-item'>------------</div>
      <span className='welcome-item'>
        Type '
        <span className='welcome-hl'>ls</span>
        ' to see the list of available commands</span>
    </div>
  );
}
