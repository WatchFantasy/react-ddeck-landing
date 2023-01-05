export function sort<T>(
  arr: T[],
  key: keyof T,
  isAscending: boolean,
  type: "date" | "string" | "number",
): T[] {
  const ascArray = Array.from(arr);
  if (type === "date") {
    ascArray.sort((a, b) => {
      const dateA = new Date(a[key] as any).getTime();
      const dateB = new Date(b[key] as any).getTime();
      return dateA - dateB;
    });
  } else if (type === "string") {
    ascArray.sort((a, b) => `${a[key] as any}`.localeCompare(`${b[key] as any}`));
  } else if (type === "number") {
    ascArray.sort((a, b) => (a[key] as any) - (b[key] as any));
  }
  return isAscending ? ascArray : ascArray.reverse();
}
