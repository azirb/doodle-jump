import {
  Coordinates,
  Stick
} from "../interfaces/mainInterfaces";
import {store} from "../store/store";
import {
  COLOR_MAP,
  PlatformCount
} from "../constants/const";
import GreenStick from "../entities/sticks/greenStick";
import React from "react";

export function generateSticks(hmax: number, hmin: number, left: number = 0, right: number = window.innerWidth / 8): Stick[] {
  let {points} = store.getState().reducer;
  let count: number = getPlatformCount(points);
  let resultArray: any = {};
  for (let j = 0; j < Math.floor(640 / 160); j++) {
    for (let i = 0; i < count; i++) {
      const coord = randomCoordinates(left, right, 160 * j, 160 * j + 160);
      resultArray[`stick_${i}_${j}`] = {
        name: `stick_${i}_${j}`,
        renderer: <GreenStick/>,
        x: coord.x,
        y: coord.y,
        stickColor: 'green'
      };
    }
  }
  return resultArray;
}


export function randomCoordinates(min: number, max: number, hmax: number, hmin: number): Coordinates {
  const x = Math.floor(Math.random() * (max - min) + min);
  const y = Math.floor(Math.random() * (hmax - hmin) + hmin);
  return {
    x,
    y
  }
}

export function generateTopStick(hmax: number, hmin: number, left: number, right: number, name: string): Stick {
  const coords = randomCoordinates(left, right, hmax, hmin);
  return {
    name: name,
    x: coords.x,
    y: coords.y,
    renderer: <GreenStick/>,
    ...getColor(),
  }
}

function getPlatformCount(points: number): number {
  let count: number | undefined = 1;
  if (points >= 0 && points < 1000) {
    count = PlatformCount.get('easy');
  }
  if (points >= 1000 && points < 3000) {
    count = PlatformCount.get('easy+');
  }
  if (points >= 3000 && points < 6000) {
    count = PlatformCount.get('medium');
  }
  if (points >= 6000 && points < 8000) {
    count = PlatformCount.get('medium+');
  }
  if (points >= 8000 && points < 10000) {
    count = PlatformCount.get('hard');
  }
  if (points >= 10000) {
    count = PlatformCount.get('omegaHard');
  }
  return count ? count : 20;
}


function getColor() {
  const x = Math.floor(Math.random() * 3);
  switch (x) {
    case 1: {
      return {
        stickColor: COLOR_MAP.get(x),
        isBlue: true,
      }
    }
    case 2: {
      return {
        stickColor: COLOR_MAP.get(x),
        isRed: true,
      }
    }
    default: {
      return {
        stickColor: 'green',
      }
    }
  }
}
