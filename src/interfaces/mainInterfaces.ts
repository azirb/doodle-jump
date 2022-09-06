export interface Coordinates {
  x: number,
  y: number
}

export interface State {
  needMoveScreen: boolean;
  playerStartPosition: number;
  startPosition: number;
  playerJumpPosition: number;
  playerHighestPosition: number;
  points: number;
  platformName: string;
  isMaxJump: boolean;
  platformPosition: number;
  checkCollusion: boolean;
  isMoveEnd: boolean;
  gameStatus: number;
}

export interface Stick {
  name?: string;
  renderer: JSX.Element,
  x: number,
  y: number,
  isBlue?: boolean;
  isRed?: boolean;
  isBrown?: boolean;
  isWhite?: boolean;
  stickColor: string | undefined;
}


export interface ReactStick {
  x: number;
  y: number;
  stickColor: string;
}
