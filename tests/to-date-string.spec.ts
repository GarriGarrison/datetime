import { describe, expect, it } from 'vitest';
import { toDateString, toISODateString, toDateLongString, toISOString } from '../src';

const TIMEZONE = new Date().getTimezoneOffset() * 60 * 1000;

const NUMBER_POSITIVE = 957312000000 + TIMEZONE;
const NUMBER_NEGATIVE = -3139344000000 - TIMEZONE;

describe('toDateString', () => {
  /**
   * Positive testing
   */
  it('positive -> input 0', () => {
    expect(toDateString(0)).toBe('01.01.1970');
  });

  it('positive -> input negative number', () => {
    expect(toDateString(NUMBER_NEGATIVE)).toBe('09.07.1870');
  });

  it('positive -> input positive number', () => {
    expect(toDateString(NUMBER_POSITIVE)).toBe('03.05.2000');
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
    expect(toISODateString(NUMBER_NEGATIVE)).toBe('1870-07-09');
  });

  it('positive -> input positive number', () => {
    expect(toISODateString(NUMBER_POSITIVE)).toBe('2000-05-03');
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

describe('toDateLongString', () => {
  /**
   * Positive testing
   */
  it('positive -> input 0', () => {
    expect(toDateLongString(0)).toBe('1 января 1970 г.');
  });

  it('positive -> input negative number', () => {
    expect(toDateLongString(NUMBER_NEGATIVE)).toBe('9 июля 1870 г.');
  });

  it('positive -> input positive number', () => {
    expect(toDateLongString(NUMBER_POSITIVE)).toBe('3 мая 2000 г.');
  });

  /**
   * Negative testing
   */
  it('negative -> input NaN', () => {
    expect(toDateLongString(NaN)).toBe(null);
  });

  it('negative -> input Infinity', () => {
    expect(toDateLongString(Infinity)).toBe(null);
  });
});

describe('toISOString', () => {
  /**
   * Positive testing
   */
  it('positive -> input 0', () => {
    if (TIMEZONE) {
      expect(toISOString(0)).toBe('1970-01-01T03:00:00');
    } else {
      expect(toISOString(0)).toBe('1970-01-01T00:00:00');
    }
  });

  it('positive -> input negative number', () => {
    if (TIMEZONE) {
      expect(toISOString(NUMBER_NEGATIVE)).toBe('1870-07-09T05:30:17');
    } else {
      expect(toISOString(NUMBER_NEGATIVE)).toBe('1870-07-09T02:30:17');
    }
  });

  it('positive -> input positive number', () => {
    if (TIMEZONE) {
      expect(toISOString(NUMBER_POSITIVE)).toBe('2000-05-03T01:00:00');
    } else {
      expect(toISOString(NUMBER_POSITIVE)).toBe('2000-05-03T01:00:00');
    }
  });

  /**
   * Negative testing
   */
  it('negative -> input NaN', () => {
    expect(toISOString(NaN)).toBe(null);
  });

  it('negative -> input Infinity', () => {
    expect(toISOString(Infinity)).toBe(null);
  });
});
