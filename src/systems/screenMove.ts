import {store} from "../store/store";
import {
  moveScreen,
  switchCollusion
} from "../store/store.actions";
import {
  generateTopStick,
} from "../helpers/generateSticks";


let counter = 0;
const ScreenMove = (entities: any) => {
  const sticks: any = {};
  Object.keys(entities).forEach((ent) => {
    if (ent.indexOf('stick_') !== -1) {
      sticks[ent] = entities[ent]
    }
  })
  let {needMoveScreen, platformPosition} = store.getState().reducer;
  if (needMoveScreen) {
    const namesForDelete: any = [];
    Object.values(sticks).forEach((value: any) => {
      value.y += 10;
      if (value.y >= 620) {
        namesForDelete.push(value.name);
      }
    })
    counter += 10;
    if (Math.round(platformPosition - counter) - Math.round(platformPosition - counter)%10 <= 200) {
      counter = 0;
      store.dispatch(switchCollusion(true));
      store.dispatch(moveScreen(false));
      if (namesForDelete.length) {
        Object.values(sticks).forEach((value: any) => {
          if (namesForDelete.includes(value.name)) {
            entities[value.name] = generateTopStick(0, 160, 0, 300, value.name)
          }
        })
      }
    }
  }
  return {...entities};
}


export {ScreenMove}
