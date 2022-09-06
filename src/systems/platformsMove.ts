const toRight: boolean[] = [];
const isTouchRed: boolean[] = [];
const isTouchBrown: boolean[] = [];
const isTouchWhite: boolean[] = [];
export const PlatformsMove = (entities: any) => {
  const blueSticks: any = {};
  const redSticks: any = {};
  const brownSticks: any = {};
  const whiteStick: any = {};
  Object.keys(entities).forEach((ent) => {
    if (ent.indexOf('stick_') !== -1) {
      if (entities[ent].isBlue) {
        blueSticks[ent] = entities[ent];
        toRight.push(true);
      }
      if (entities[ent].isRed) {
        redSticks[ent] = entities[ent];
        isTouchRed.push(true);
      }
      if (entities[ent].isBrown) {
        brownSticks[ent] = entities[ent];
        isTouchBrown.push(true);
      }
      if (entities[ent].isWhite) {
        whiteStick[ent] = entities[ent];
        isTouchWhite.push(true);
      }
    }
  })
  blueSticks && Object.values(blueSticks).forEach((value: any, index: number) => {
    value.x += (toRight[index] ? 1 : -1) * 3;
    if (value.x >= 300) {
      toRight[index] = false;
    }
    if (value.x <= 0) {
      toRight[index] = true;
    }
  })
  return {...entities}
}
