import {State} from "../interfaces/mainInterfaces";
import {createReducer} from "@reduxjs/toolkit";
import {
  addPoints,
  changeGameStatus,
  moveEnd,
  moveScreen,
  setInitial,
  setPlatformName,
  setPlatformPosition,
  setPlayerHighestPosition,
  setPlayerPoints,
  setStartPosition,
  switchCollusion,
  switchMaxJump
} from "./store.actions";

const initialState: State = {
  needMoveScreen: false,
  playerStartPosition: 0,
  startPosition: 0,
  playerJumpPosition: 0,
  playerHighestPosition: 0,
  points: 0,
  platformName: '',
  platformPosition: 0,
  isMaxJump: false,
  checkCollusion: true,
  isMoveEnd: true,
  gameStatus: 1,
}

export const reducer = createReducer(initialState, builder => {
  builder
    .addCase(setInitial, () => initialState)
    .addCase(changeGameStatus, (state, action) => {state.gameStatus = action.payload.gameStatus})
    .addCase(moveEnd, (state, action) => {state.isMoveEnd = action.payload.moveEnd})
    .addCase(switchCollusion, (state, action) => {state.checkCollusion = action.payload.checkCollusion})
    .addCase(setPlatformPosition, (state, action) => {state.platformPosition = action.payload.platformPosition})
    .addCase(setPlatformName, (state, action) => {state.platformName = action.payload.name})
    .addCase(switchMaxJump, (state, action) => {state.isMaxJump = action.payload.isMaxJump})
    .addCase(moveScreen, (state, action) => {state.needMoveScreen = action.payload.need})
    .addCase(addPoints, (state, action) => {state.points += action.payload.points})
    .addCase(setPlayerPoints, (state, action) => {state.points = action.payload.points})
    .addCase(setStartPosition, (state, action) => {state.playerStartPosition = action.payload.startPosition})
    .addCase(setPlayerHighestPosition, (state, action) => {state.playerHighestPosition = action.payload.playerHighestPosition})
    .addDefaultCase(() => {})
})
