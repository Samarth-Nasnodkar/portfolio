import React from 'react';
import '../css/CmdOutput.css';
import Ls from './commands/Ls';
import Welcome from './commands/Welcome';

export default function CmdOutput(props) {
  let cmdComponent = (<div>{props.cmd}</div>);
  if (props.cmd.toLowerCase() === 'ls') cmdComponent = <Ls />
  if (props.cmd.toLowerCase() === 'welcome') cmdComponent = <Welcome />
  return (
    <div className='CmdOutput'>
      {cmdComponent}
    </div>
  );
}
