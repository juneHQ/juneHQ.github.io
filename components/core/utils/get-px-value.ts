export function getPxValue(px: string) {
  let value = 0;
  const index = px.indexOf('px');
  if (index !== -1) {
    value = parseInt(px.substring(0, index));
  }
  return value;
}
