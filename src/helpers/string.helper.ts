export function capitalizeFirstLetter(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function isStr(value: any): boolean {
  return typeof value === "string";
}
