import { describe, it, expectTypeOf, expect } from 'vitest';
import { getLastElement } from '../array';

describe('1. last()', () => {
  it('should return the last element at runtime', () => {
    const arr = [1, 2, 3];
    expect(getLastElement(arr)).toBe(3);
  });

  it('should handle empty arrays safely', () => {
    const empty: number[] = [];
    expect(getLastElement(empty)).toBeUndefined();
  });

  it('TYPE CHECK: Should infer standard arrays as T | undefined', () => {
    const numArr = [1, 2, 3];
    const result = getLastElement(numArr);

    // If your implementation is correct, 'result' should be number | undefined
    expectTypeOf(result).toEqualTypeOf<number | undefined>();

    // If you implemented it lazily as 'any', this line will fail
    expectTypeOf(result).not.toBeAny();
  });

  it('TYPE CHECK: Should infer string arrays', () => {
    const strArr = ['a', 'b'];
    const result = getLastElement(strArr);

    expectTypeOf(result).toEqualTypeOf<string | undefined>();
  });

  // OPTIONAL MASTERY CHECK (Uncomment when you feel brave)
  /*
  it('TYPE CHECK: Should infer specific types from Tuples', () => {
    const tuple = [1, 'a'] as const; // Literal Tuple
    const result = last(tuple);
    
    // A standard implementation returns 'string | number | undefined'
    // A MASTER implementation knows the last item is definitely 'a' (string)
    expectTypeOf(result).toEqualTypeOf<"a">();
  });
  */
});
