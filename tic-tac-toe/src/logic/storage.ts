import { WinnerType } from "../utils/types"

export const saveGameStorage = (board: string[], turn: string, winner: WinnerType) => {
	window.localStorage.setItem('board', JSON.stringify(board))
	window.localStorage.setItem('turn', turn)
	window.localStorage.setItem('winner', JSON.stringify(winner))
}

export const resetGameStorage = () => {
	window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
  window.localStorage.removeItem('winner')
}