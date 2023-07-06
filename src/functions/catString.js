export function catString(string, joiner) {
  return string.replace(/\s+/g, `${joiner}`).toLowerCase();
}
