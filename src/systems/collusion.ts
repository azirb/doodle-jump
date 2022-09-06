import {Stick} from "../interfaces/mainInterfaces";
import {CLOSE_FOR_LOWER_POINT} from "../constants/const";
import {store} from "../store/store";
import {
  setPlatformName,
  setPlatformPosition,
  setStartPosition,
  switchCollusion,
  switchMaxJump
} from "../store/store.actions";

export const collusionSystem = (entities: any) => {
  const player = entities['player'];
  const sticks: any = {};
  const checkCollusion = store.getState().reducer.checkCollusion
  Object.keys(entities).forEach((ent) => {
    if (ent.indexOf('stick_') !== -1) {
      sticks[ent] = entities[ent]
    }
  })
  checkCollusion && Object.values(sticks).forEach((value: any) => {
    if (isCollide(player, value)) {
      store.dispatch(setStartPosition(value.y));
      store.dispatch(switchMaxJump(false));
      store.dispatch(switchCollusion(false));
      store.dispatch(setPlatformName(value.name));
      store.dispatch(setPlatformPosition(value.y));
    }
  })
  return {...entities}
}

function isCollide(player: any, stick: Stick): boolean {
  return CLOSE_FOR_LOWER_POINT.includes(Math.round(player.y + 20 - stick.y)) && (player.x >= stick.x && player.x <= stick.x + 80);
}
