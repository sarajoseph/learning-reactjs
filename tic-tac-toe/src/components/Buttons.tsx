interface ButtonResetGameProps {
  children: string
  resetGame: void
}

export const ButtonResetGame = ({ children, resetGame }: ButtonResetGameProps): JSX.Element => {
	
  const handleClick = (): void => {
    resetGame()
  }

	return (
		<button className='btn btn-primary text-bas' onClick={handleClick}>{children}</button>
	)
}