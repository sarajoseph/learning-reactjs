interface TurnsProps {
  X: string
  O: string
}
export const TURNS: TurnsProps = {
  X: '❌',
  O: '⚪'
}

export const WINNER_COMBOS: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7 ,8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

export const INITIALBOARDSTATE: string[] = Array(9).fill(null)
export const INITIALTURNSTATE: string = TURNS.X
export const INITIALWINNERSTATE: null = null