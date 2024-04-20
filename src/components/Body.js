import React from 'react';
import '../css/Body.css';
import CmdInput from './CmdInput';
import { useState, useEffect } from 'react';
import CmdOutput from './CmdOutput';

export default function Body() {
  const [cmds, setCmds] = useState(['welcome']);

  useEffect(() => {
    console.log('cmds:', cmds);
  }, [cmds]);

  const elems = [<CmdInput key={0} index={0} cmd={cmds[0]} />];
  for (let i = 1; i <= cmds.length; i++) {
    elems.push(
      <div key={i}>
        <CmdOutput cmd={cmds[i - 1]} index={i}/>
        <CmdInput cmd={cmds[i]} onCmdEnter={(c) => setCmds([...cmds, c])}/>
      </div>
    );
  }
  return (
    <div className='Body'>
      {
        elems
      }
    </div>
  );
}
