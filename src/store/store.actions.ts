import {createAction} from "@reduxjs/toolkit";


const setPlayerPoints = createAction('[DJ]SetPoints', (points: number) => {
  return {
    payload: {
      points
    }
  }
})

const setStartPosition = createAction('[DJ]SetStartPosition', (startPosition: number) => {
  return {
    payload: {
      startPosition
    }
  }
})


const setPlayerHighestPosition = createAction('[DJ]SetHighestPosition', (playerHighestPosition: number) => {
  return {
    payload: {
      playerHighestPosition
    }
  }
})

const moveScreen = createAction('[DJ]MoveScreeen', (need: boolean) => {
  return {
    payload: {
      need,
    }
  }
})


const addPoints = createAction('[DJ]AddPoints', (points: number) => {
  return {
    payload: {
      points,
    }
  }
})

const switchMaxJump = createAction('[DJ]SwitchMaxJump', (isMaxJump: boolean) => {
  return {
    payload: {
      isMaxJump,
    }
  }
});

const setPlatformName = createAction('[DJ]SetPlatformName', (name: string) => {
  return {
    payload: {
      name,
    }
  }
})

const setPlatformPosition = createAction('[DJ]SetPlatformPosition', (platformPosition: number) => {
  return {
    payload: {
      platformPosition,
    }
  }
})

const switchCollusion = createAction('[DJ]SwitchCollusion', (checkCollusion: boolean) => {
  return {
    payload: {
      checkCollusion,
    }
  }
})

const moveEnd = createAction('[DJ]ScreenStopMoving', (moveEnd: boolean) => {
  return {
    payload: {
      moveEnd
    }
  }
})

const changeGameStatus = createAction('[DJ]ChangeGameStatus', (gameStatus: number) => {
  return {
    payload: {
      gameStatus,
    }
  }
})

const setInitial = createAction('[DJ]InitialSettings');

export {
  setInitial,
  setPlayerPoints,
  setStartPosition,
  setPlayerHighestPosition,
  moveScreen,
  addPoints,
  setPlatformName,
  setPlatformPosition,
  switchMaxJump,
  switchCollusion,
  moveEnd,
  changeGameStatus,
}
