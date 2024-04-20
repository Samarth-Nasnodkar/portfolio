import React from 'react';
import '../css/CmdInput.css';

export default function CmdInput(props) {
  const inpId = 'cmd-inp-field' + props.index;
  const subId = 'cmd-sub-field' + props.index;
  const shouldTakeInput = ! props.cmd;
  function handleSubmit(e) {
    e.preventDefault();
    let cmd = e.target[0].value;
    cmd = cmd.trim();
    props.onCmdEnter(cmd);
    document.getElementById(inpId).disabled = true;
  }
  return (
    <div className='CmdInput'>
      <span className="cmd-row-title">
        <span className="user-name">samarth.nasnodkar</span>
        <span className='cmd-sep'>@</span>
        <span className="profile">portfolio</span>
        <span className='cmd-sep'>:~$</span>
        {
          !shouldTakeInput && <span className='cmd-inp'>{props.cmd}</span>
        }
      </span>

      {
        shouldTakeInput &&
        <form onSubmit={(e) => handleSubmit(e)} autoComplete='off'>
          <input id={inpId} defaultValue={props.cmd} type="text" className="cmd-input-field" autoFocus/>
          <input id={subId} type='submit' hidden />
        </form>
      }
    </div>
  );
}
