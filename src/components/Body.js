import React from 'react';
import '../css/Body.css';
import CmdInput from './CmdInput';
import { useState, useEffect } from 'react';
import CmdOutput from './CmdOutput';

export default function Body() {
  const [cmds, setCmds] = useState(['welcome']);

  function updateCommands(cmd) {
    if (cmd === 'clear') {
      setCmds([]);
    } else {
      setCmds([...cmds, cmd]);
    }
  }

  useEffect(() => {
    console.log('cmds:', cmds);
  }, [cmds]);

  const elems = [<CmdInput key={0} index={0} cmd={cmds[0]} onCmdEnter={updateCommands}/>];
  for (let i = 1; i <= cmds.length; i++) {
    if (cmds.length > 0)
      elems.push(
        <div key={i}>
          <CmdOutput cmd={cmds[i - 1]} index={i}/>
          <CmdInput cmd={cmds[i]} onCmdEnter={updateCommands}/>
        </div>
      );
    else
    elems.push(
      <div key={i}>
        <CmdInput onCmdEnter={updateCommands}/>
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
