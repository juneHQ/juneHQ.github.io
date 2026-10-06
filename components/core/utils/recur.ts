/**
 * Created for the purposes of repeating style prop values for responsive styling in Chakra UI
 * Semantics: recur(item, x number of times, and append this)
 * @example
 * ```
 * const breakpoints = recur('8px', 3, ['16px', '24px']);
 * console.log(breakpoints); // ['8px', '8px', '8px', '16px', '24px']
 * ...
 * <Box p={breakpoints}>foobar</Box>
 * ```
 */
export const recur = (item: any, repeats: number = 1, append?: Array<any>) => {
  const prepend = new Array(repeats).fill(item);
  return [...prepend, ...(append || [])];
};
