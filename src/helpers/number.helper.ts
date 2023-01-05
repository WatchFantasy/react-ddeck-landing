export function formatThousand(value: string | number, dp = 2): string {
  return Number(parseFloat(value.toString()).toFixed(dp)).toLocaleString("en-US", {
    minimumFractionDigits: dp,
  });
}

export function isNum(value: any): boolean {
  return !isNaN(parseFloat(value)) && isFinite(value);
}
