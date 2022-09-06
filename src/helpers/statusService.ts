import {Subject} from "rxjs";


const gameStatus = new Subject<number>()


export const statusService = {
  updateStatus: (status: number) => gameStatus.next(status),
  getStatus: () => gameStatus.asObservable()
}
