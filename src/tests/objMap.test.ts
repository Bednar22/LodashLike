import { describe, it, expectTypeOf, expect } from 'vitest';
import { objMap } from '../src/objMap';

describe('3. objMap()', () => {
  it('should map values at runtime', () => {
    const input = { a: 1, b: 2 };
    // Double the numbers, convert to string
    const result = objMap(input, (val) => (val * 2).toString());

    expect(result).toEqual({ a: '2', b: '4' });
  });

  it('TYPE CHECK: Should change value types but keep key structure', () => {
    const input = { a: 1, b: 2 };
    const result = objMap(input, (val) => val.toString());

    // 1. The result should not be 'any'
    expectTypeOf(result).not.toBeAny();

    // 2. The result should have known keys 'a' and 'b'
    expectTypeOf(result).toHaveProperty('a');
    expectTypeOf(result).toHaveProperty('b');

    // 3. The values should be strings now, not numbers
    expectTypeOf(result.a).toBeString();
  });

  it('TYPE CHECK: Should enforce the callback argument type', () => {
    const input = { name: 'Alice', role: 'Admin' };

    // If I define a callback, the argument 'val' should automatically be known as string
    // strictly because 'input' has string values.
    objMap(input, (val) => {
      expectTypeOf(val).toBeString();
      return val;
    });
  });
});
