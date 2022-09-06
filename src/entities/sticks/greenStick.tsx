import React from 'react';
import { Stick } from '../../styled-components/blocks.styled';

const GreenStick = ({x, y, name, stickColor}: any) => {
  return (
    <div style={{
      position: 'absolute',
      width: '80px',
      height: '20px',
      backgroundColor: stickColor,
      left : `${x}px`,
      top: `${y}px`
    }}>{name}</div>
  );
};

export default GreenStick;
