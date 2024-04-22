import React from 'react';
import '../css/Terminal.css';
import HeaderBar from './HeaderBar';
import Body from './Body';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';

export default function Terminal() {
  const termPos = useSpring({x: 0, y: 0});
  const bindTermPos = useDrag((params) => {
    termPos.x.set(params.offset[0]);
    termPos.y.set(params.offset[1]);
  });
  return (
    <animated.div className='Terminal' style={{
      y: termPos.y,
      x: termPos.x
    }}>
      <div {...bindTermPos()} style={{cursor: 'pointer'}}>
        <HeaderBar />
      </div>
      <Body /> 
    </animated.div>
  );
}
