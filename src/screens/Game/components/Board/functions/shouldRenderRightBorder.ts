export function shouldRenderRightBorder(column: number, size: number) {
  return (column + 1) % size !== 0
}
