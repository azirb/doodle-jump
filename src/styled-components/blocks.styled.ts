import styled from "styled-components";
import {
  Coordinates,
  ReactStick
} from "../interfaces/mainInterfaces";

export const PlayerBlock = styled.div<Coordinates>`
  position: absolute;
  background-image: url("/img/player.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: 20px;
  height: 20px;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
`

export const Stick = styled.div<ReactStick>`
  position: absolute;
  width: 80px; 
  height: 20px;
  background-color: ${props => props.stickColor};
  left: ${props => props.x}px;
  top: ${props => props.y}px;
`

export const ScoreBlock = styled.div<Coordinates>`
  position: absolute;
  width: 380px;
  height: 60px;
  background-color: blue;
  opacity: 0.8;
`

export const TextBlock = styled.div`
  position: relative;
  width: 100px;
  height: 30px;
  display: flex;
  margin-top: 15px; 
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  color: red;
`

export const MainMenu = styled.div`
  position: absolute;
  width: 400px;
  height: 640px;
  background-image: url("/img/background.jpg");
  left: ${window.innerWidth / 2 - 400 / 2}px;
  top: 0px;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 260px auto;
`

export const DJButton = styled.button`
  width: 80px;
  height: 35px;
  background-color: bisque;
  border-radius: 20px 50px 20px 50px;
`
