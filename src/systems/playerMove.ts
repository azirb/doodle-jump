import {store} from "../store/store";
import {
  GRAVITY,
  PLAYER_VELOCITY
} from "../constants/const";
import {
  addPoints,
  moveScreen,
  switchCollusion,
  switchMaxJump
} from "../store/store.actions";
import {statusService} from "../helpers/statusService";

const MovePlayer = (entities: any, {input}: any) => {
  const {playerStartPosition} = store.getState().reducer
  const player = entities["player"];
  const {isMaxJump} = store.getState().reducer;
  if (player.y <= 250) {
    store.dispatch(switchCollusion(false));
    store.dispatch(moveScreen(true));
    store.dispatch(addPoints(15));
  }
  if (Math.abs(Math.round(playerStartPosition - player.y)) >= 160 || Math.floor(player.y - 250) <= 0) {
    store.dispatch(switchMaxJump(true));
    store.dispatch(switchCollusion(true));
  }
  player.y += (isMaxJump ? 1 : -1) * (Math.round(PLAYER_VELOCITY * GRAVITY));
  const {touchPayload} = input.find((x: any) => x.name === "onTouchStart") || {}
  if (touchPayload) {
    if (touchPayload?.targetTouches[0]?.pageX < 190) {
      player.x -= 3 * Math.abs(Math.round(PLAYER_VELOCITY * GRAVITY) * Math.cos(player.y));
    }
    if (touchPayload?.targetTouches[0]?.pageX > 190) {
      player.x += 3 * Math.abs(Math.round(PLAYER_VELOCITY * GRAVITY) * Math.cos(player.y));
    }
  }
  const {payload} = input.find((x: any) => x.name === "onKeyDown" || x.name === "onKeyUp") || {}
  if (payload) {
    if (payload.keyCode === 37) {
      player.x -= 3 * Math.abs(Math.round(PLAYER_VELOCITY * GRAVITY) * Math.cos(player.y));
    }
    if (payload.keyCode === 39) {
      player.x += 3 * Math.abs(Math.round(PLAYER_VELOCITY * GRAVITY) * Math.cos(player.y));
    }
  }
  if (player.x >= 380) {
    player.x = 0;
  }
  if (player.x <= 0) {
    player.x = 380;
  }
  if (player.y >= 640) {
    statusService.updateStatus(2);
  }
  return {...entities, player};
};

export {MovePlayer}
