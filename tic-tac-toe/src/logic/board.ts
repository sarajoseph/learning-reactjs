import { WINNER_COMBOS } from "../utils/constants"

export const checkWinner = (boardToCheck: string[]): string | null => {
	for (const combo of WINNER_COMBOS) {
		const [a, b ,c] = combo

		if (boardToCheck[a] && 
				boardToCheck[a] === boardToCheck[b] &&
				boardToCheck[b] === boardToCheck[c] ) {
			return boardToCheck[a]
		}
	}
	return null
}

export const checkEndGame = (newBoard: string[]): boolean => {
	return newBoard.every((square) => square !== null)
}