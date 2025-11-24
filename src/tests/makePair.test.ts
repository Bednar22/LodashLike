import { describe, it, expectTypeOf, expect } from 'vitest';
import { makePair } from '../array';

describe('2. makePair()', () => {
  it('should create an array at runtime', () => {
    const result = makePair(1, 'hello');
    expect(result).toEqual([1, 'hello']);
  });

  it('TYPE CHECK: Should return a Tuple, NOT a generic array', () => {
    const result = makePair(1, 'hello');

    // ✅ Correct: [number, string]
    expectTypeOf(result).toEqualTypeOf<[number, string]>();

    // ❌ Incorrect: (number | string)[]
    // If this fails, you likely returned T[] instead of [T, U]
    expectTypeOf(result).not.toEqualTypeOf<(number | string)[]>();
  });

  it('TYPE CHECK: Should preserve literal types (Bonus)', () => {
    // If I pass the specific number 1, I want the type to be 1, not number
    const result = makePair(1 as const, 'a' as const);

    expectTypeOf(result).toEqualTypeOf<[1, 'a']>();
  });
});
