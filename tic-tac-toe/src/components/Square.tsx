interface SquareProps {
  children?: string
  isSelected?: boolean
  updateBoard?: void
  index?: number
}

export const Square = ({ children, isSelected, updateBoard, index }: SquareProps): JSX.Element => {
  const squareClass: string = `${isSelected ? 'bg-indigo-300' : ''}`

  const handleClick = (): void => {
    updateBoard(index)
  }
  return (
    <div className={`flex items-center justify-center h-28 w-28 border-2 border-solid border-white rounded-md text-6xl uppercase ${squareClass}`} onClick={handleClick}>
      {children}
    </div>
  )
}