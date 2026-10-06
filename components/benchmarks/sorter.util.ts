/** Sorts config data array to median in the middle */
export function sortConfigData(data: Array<any>) {
  const medianIndex = data.findIndex((predicate) => predicate.name.toLowerCase().includes('median'));
  if (medianIndex === -1) {
    return data;
  }

  const median = data[medianIndex];
  const newRows = [...data];
  newRows.splice(medianIndex, 1);
  newRows.splice(1, 0, median);

  return newRows;
}
