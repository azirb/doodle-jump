import React from 'react';
import {
  ScoreBlock,
  TextBlock
} from '../styled-components/blocks.styled';
import {store} from "../store/store";

const Score = ({x, y}: any) => {
  const {points} = store.getState().reducer;
  return (
    <ScoreBlock x={x} y={y}>
      <TextBlock>
        {points}
      </TextBlock>
    </ScoreBlock>
  );
};

export default Score;
