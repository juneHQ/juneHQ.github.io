export function createArrayGroupings<T>(array: Array<T>, perGroup: number) {
  const numGroups = Math.ceil(array.length / perGroup);
  return [...new Array(numGroups)].map((_, i) => array.slice(i * perGroup, (i + 1) * perGroup));
}
