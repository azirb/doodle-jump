import React from 'react';
import {PlayerBlock,} from "../styled-components/blocks.styled";

const Player = ({x, y}: any) => {
  const positionX = x;
  const positionY = y;
  return (
    <div style={{
      position: "absolute",
      backgroundImage: 'url("/img/player.png")',
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      width: "20px",
      height: "20px",
      left: positionX,
      top: positionY,
    }}>
    </div>
  );
};

export default Player;
