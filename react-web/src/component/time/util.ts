/**
 * 时间格式化
 * @param s
 * @returns {string}
 */
export function wrapString(s: string | number): string {
  const arg = `${s}`;
  if (arg.length === 2) return arg;
  return `0${arg}`;
}
