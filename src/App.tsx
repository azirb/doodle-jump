import React from 'react';
import {GameEngine} from "react-game-engine";
import Player from "./entities/player";
import {MovePlayer} from "./systems/playerMove";
import {
  setInitial,
  setStartPosition
} from "./store/store.actions";
import {generateSticks} from "./helpers/generateSticks";
import {Stick} from "./interfaces/mainInterfaces";
import {store} from "./store/store";
import {ScreenMove} from "./systems/screenMove";
import {collusionSystem} from "./systems/collusion";
import Score from "./entities/score";
import {PlatformsMove} from "./systems/platformsMove";
import StartMenu from "./entities/StartMenu";
import {Observable} from "rxjs";
import {statusService} from "./helpers/statusService";
import RestartMenu from "./entities/RestartMenu";

class App extends React.PureComponent {
  w: number = window.innerWidth;
  playgroundW: number = 380;
  playgroundH: number = 640;
  left: number = this.w / 2 - this.playgroundW / 2;
  playerStartPosition: number = this.playgroundH - 25;
  sticks: Stick[] = generateSticks(0, this.playgroundH, 0, this.playgroundW - 100);
  game: any;
  running: boolean = true;
  gameStatusObservable: Observable<number>;
  state: any = {
    status: 1,
    running: false,
  };


  constructor(props: any) {
    super(props);
    this.game = React.createRef();
    store.dispatch(setStartPosition(this.playerStartPosition));
    this.gameStatusObservable = statusService.getStatus();
    statusService.updateStatus(1);
  }

  componentDidMount() {
    this.gameStatusObservable.subscribe((value) => {
      if (value === 2) {
        this.setState({running: false, status: value});
        store.dispatch(setInitial());
        store.dispatch(setStartPosition(this.playerStartPosition));
      }
      if (value === 0) {
        this.sticks = generateSticks(0, this.playgroundH, 0, this.playgroundW - 100);
        this.setState({running: true, status: value});
      }
    })
  }

  getGameComponent = (state: number) => {
    switch (state) {
      case 0: {
        return (
          <GameEngine
            running={this.state.running}
            style={{left: this.left, width: this.playgroundW, height: this.playgroundH}}
            className='game'
            systems={[MovePlayer, ScreenMove, collusionSystem, PlatformsMove]}
            entities={{
              score: {x: 0, y: 0, renderer: <Score/>},
              player: {
                x: this.playgroundW / 2,
                y: this.playgroundH - 45,
                renderer: <Player/>
              },
              ...this.sticks
            }}
          >
          </GameEngine>
        )
      }
      case 1: {
        return (<StartMenu/>)
      }
      case 2: {
        return (<RestartMenu/>)
      }
    }
  }

  render() {
    return this.getGameComponent(this.state.status)
  }
}


export default App;
