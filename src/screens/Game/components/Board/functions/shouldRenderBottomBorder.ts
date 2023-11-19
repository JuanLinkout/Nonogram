export function shouldRenderBottomBorder(row: number, size: number) {
  return (row + 1) % size !== 0
}
