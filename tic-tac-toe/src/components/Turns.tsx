import { TURNS } from "../utils/constants"
import { Square } from "./Square"

interface TurnsProps{
	turn: string
}
export const Turns = ({turn}: TurnsProps): JSX.Element => {
  return (
		<>
			<Square isSelected={turn === TURNS.X}>
				{TURNS.X}
			</Square>
			<Square isSelected={turn === TURNS.O}>
				{TURNS.O}
			</Square>
		</>
  )
}