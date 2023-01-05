export function isNull(value: null | undefined): boolean {
  return value === null || value === undefined
}

export function calculatePerformance(callback: any): void {
  const start = performance.now()
  callback()
  const end = performance.now()
  const timeTaken = start - end
  console.log("Total time taken: " + timeTaken)
}