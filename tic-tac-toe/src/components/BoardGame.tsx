import { Square } from "./Square"

interface BoardGameProps {
  board: string[]
  updateBoard: void
}

export const BoardGame = ({board, updateBoard}: BoardGameProps): JSX.Element => {

	return (
	<>
		{	
			board.map((content, index) => {
				return(
					<Square
						key={`square${index}`}
						updateBoard={updateBoard}
						index={index}
					>
						{content}
					</Square>
				)
			})
		}
	</>
	)
	
}