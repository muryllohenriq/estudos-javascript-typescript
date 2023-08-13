export const dutyFree = (normPrice: number, discount: number, hol: number): number => {
  return Math.floor(hol / (normPrice * discount / 100))
}

console.log(dutyFree(120, 30, 1000));
