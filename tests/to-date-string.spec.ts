import { describe, expect, it } from 'vitest';
import { toDateString } from '../src';

describe('toDateString', () => {
  /**
   * Positive testing
   */
  it('positive -> input 0', () => {
    expect(toDateString(0)).toBe('01.01.1970');
  });

  it('positive -> input positive number', () => {
    expect(toDateString(-3155682617000)).toBe('01.01.1870');
  });

  it('positive -> input negative number', () => {
    expect(toDateString(946674000000)).toBe('01.01.2000');
  });

  /**
   * Negative testing
   */
  it('negative -> input NaN', () => {
    expect(toDateString(NaN)).toBe(undefined);
  });

  it('negative -> input Infinity', () => {
    expect(toDateString(Infinity)).toBe(undefined);
  });
});

describe('toISODateString', () => {
  /**
   * Positive testing
   */
  it('positive -> input 0', () => {
    expect(toDateString(0)).toBe('1970-01-01');
  });

  it('positive -> input positive number', () => {
    expect(toDateString(-3155682617000)).toBe('1870-01-01');
  });

  it('positive -> input negative number', () => {
    expect(toDateString(946674000000)).toBe('2000-01-01');
  });

  /**
   * Negative testing
   */
  it('negative -> input NaN', () => {
    expect(toDateString(NaN)).toBe(undefined);
  });

  it('negative -> input Infinity', () => {
    expect(toDateString(Infinity)).toBe(undefined);
  });
});
