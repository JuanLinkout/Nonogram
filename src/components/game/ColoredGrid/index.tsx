import { EnumCellFill } from '@services/types/Game/Board'
import React from 'react'
import { View } from 'react-native'

interface IBoardCell {
  filled: EnumCellFill
  color?: string
}

interface BoardProps {
  width: number
  height: number
  boardCells: IBoardCell[][]
}

export const ColoredGrid: React.FC<BoardProps> = ({
  width,
  height,
  boardCells
}) => {
  const cellSize = Math.min(
    Math.floor(width / boardCells.length),
    Math.floor(height / boardCells[0].length)
  )

  return (
    <View style={{ width, height, flexDirection: 'row', flexWrap: 'wrap' }}>
      {boardCells.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <View
            key={`${rowIndex}-${colIndex}`}
            style={{
              width: cellSize,
              height: cellSize,
              backgroundColor:
                cell.filled === EnumCellFill.FILLED
                  ? `rgb${cell.color}` || 'black'
                  : 'white'
            }}
          />
        ))
      )}
    </View>
  )
}
