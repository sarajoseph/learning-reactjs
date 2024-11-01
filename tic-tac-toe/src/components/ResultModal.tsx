import { WinnerType } from '../utils/types';
import { ButtonResetGame } from "./Buttons"
import { Square } from "./Square"
import confetti from 'canvas-confetti'

interface ResultModalProps {
  winner: WinnerType
  resetGame: void
}

export const ResultModal  = ({ winner, resetGame }: ResultModalProps): JSX.Element => {
  const handleClick = (): void => {
    resetGame()
  }
	const openClass: string = winner !== null ? 'modal-open' : ''
	winner && confetti()

	const titleText: string = winner ? '¡Enhorabuena! Has ganado' : 'Ooooh... Ha habido empate'

	return (
		<dialog id="modalResultGame" className={`modal modal-middle sm:modal-middle z-10 ${openClass}`}>
			<div className="modal-box ">
				<div className="flex flex-col justify-center items-center gap-5">
					<h3 className='text-3xl text-center'>{titleText}</h3>
					{winner && <Square>{winner}</Square>}
					<ButtonResetGame resetGame={handleClick}>Volver a jugar</ButtonResetGame>
				</div>
			</div>
		</dialog>
	)
}