import { describe, expect, it } from 'vitest';
import { toDateString, toISODateString } from '../src';

const TIMEZONE = new Date().getTimezoneOffset() * 60 * 1000;

const NUMBER_POSITIVE = 946684800000 + TIMEZONE;
const NUMBER_NEGATIVE = -3155671817000 + TIMEZONE;

describe('toDateString', () => {
  /**
   * Positive testing
   */
  it('positive -> input 0', () => {
    expect(toDateString(0)).toBe('01.01.1970');
  });

  it('positive -> input negative number', () => {
    expect(toDateString(NUMBER_NEGATIVE)).toBe('01.01.1870');
  });

  it('positive -> input positive number', () => {
    expect(toDateString(NUMBER_POSITIVE)).toBe('01.01.2000');
  });

  /**
   * Negative testing
   */
  it('negative -> input NaN', () => {
    expect(toDateString(NaN)).toBe(null);
  });

  it('negative -> input Infinity', () => {
    expect(toDateString(Infinity)).toBe(null);
  });
});

describe('toISODateString', () => {
  /**
   * Positive testing
   */
  it('positive -> input 0', () => {
    expect(toISODateString(0)).toBe('1970-01-01');
  });

  it('positive -> input negative number', () => {
    expect(toISODateString(NUMBER_NEGATIVE)).toBe('1870-01-01');
  });

  it('positive -> input positive number', () => {
    expect(toISODateString(NUMBER_POSITIVE)).toBe('2000-01-01');
  });

  /**
   * Negative testing
   */
  it('negative -> input NaN', () => {
    expect(toISODateString(NaN)).toBe(null);
  });

  it('negative -> input Infinity', () => {
    expect(toISODateString(Infinity)).toBe(null);
  });
});
