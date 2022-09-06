import React from 'react';
import {
  ButtonContainer,
  DJButton,
  MainMenu
} from "../styled-components/blocks.styled";
import {statusService} from "../helpers/statusService";
import {store} from "../store/store";

const RestartMenu = () => {
  const point = store.getState().reducer.points;
  return (
    <MainMenu>
      <ButtonContainer>
        <div><DJButton>POINTS</DJButton><DJButton>{point}</DJButton></div>
        <DJButton onClick={() => {
          statusService.updateStatus(0);
        }}>RESTART</DJButton>
      </ButtonContainer>
    </MainMenu>
  );
};

export default RestartMenu;
