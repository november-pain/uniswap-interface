import { Percent } from 'shady-sdk-core';

export function largerPercentValue(a?: Percent, b?: Percent) {
  if (a && b) {
    return a.greaterThan(b) ? a : b;
  } else if (a) {
    return a;
  } else if (b) {
    return b;
  }
  return undefined;
}
