import React from 'react';
import {
  ButtonContainer,
  DJButton,
  MainMenu
} from "../styled-components/blocks.styled";
import {statusService} from "../helpers/statusService";

const StartMenu: React.FunctionComponent<any> = () => {
  return (
    <MainMenu>
      <ButtonContainer>
        <DJButton onClick={() => {
          statusService.updateStatus(0);
        }}>PLAY</DJButton>
      </ButtonContainer>
    </MainMenu>
  );
};

export default StartMenu;
