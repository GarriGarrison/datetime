import { describe, expect, it } from 'vitest';
import { toDateString, toISODateString, toDateLongString, toISOString, toDateTimeString, toTimeString } from '../src';

const TIMEZONE = new Date().getTimezoneOffset() * 60 * 1000;

const NUMBER_POSITIVE = 957312000000 + TIMEZONE;
const NUMBER_NEGATIVE = -3139344000000 - TIMEZONE;
const NUMBER_TIME = 946740887000 + TIMEZONE;

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
    expect(toDateLongString(0)).toBe('01 января 1970 г.');
  });

  it('positive -> input negative number', () => {
    expect(toDateLongString(NUMBER_NEGATIVE)).toBe('09 июля 1870 г.');
  });

  it('positive -> input positive number', () => {
    expect(toDateLongString(NUMBER_POSITIVE)).toBe('03 мая 2000 г.');
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
      expect(toISOString(0)).toBe('1970-01-01T24:00:00');
    }
  });

  it('positive -> input 0, withSeconds = false', () => {
    if (TIMEZONE) {
      expect(toISOString(0, false)).toBe('1970-01-01T03:00');
    } else {
      expect(toISOString(0, false)).toBe('1970-01-01T24:00');
    }
  });

  it('positive -> input negative number', () => {
    if (TIMEZONE) {
      expect(toISOString(NUMBER_NEGATIVE)).toBe('1870-07-09T05:30:17');
    } else {
      expect(toISOString(NUMBER_NEGATIVE)).toBe('1870-07-09T24:00:00');
    }
  });

  it('positive -> input positive number', () => {
    if (TIMEZONE) {
      expect(toISOString(NUMBER_POSITIVE)).toBe('2000-05-03T01:00:00');
    } else {
      expect(toISOString(NUMBER_POSITIVE)).toBe('2000-05-03T24:00:00');
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

describe('toDateTimeString', () => {
  /**
   * Positive testing
   */
  it('positive -> input 0', () => {
    if (TIMEZONE) {
      expect(toDateTimeString(0)).toBe('01.01.1970 03:00:00');
    } else {
      expect(toDateTimeString(0)).toBe('01.01.1970 24:00:00');
    }
  });

  it('positive -> input 0, withSeconds = false', () => {
    if (TIMEZONE) {
      expect(toDateTimeString(0, false)).toBe('01.01.1970 03:00');
    } else {
      expect(toDateTimeString(0, false)).toBe('01.01.1970 24:00');
    }
  });

  it('positive -> input negative number', () => {
    if (TIMEZONE) {
      expect(toDateTimeString(NUMBER_NEGATIVE)).toBe('09.07.1870 05:30:17');
    } else {
      expect(toDateTimeString(NUMBER_NEGATIVE)).toBe('09.07.1870 24:00:00');
    }
  });

  it('positive -> input positive number', () => {
    if (TIMEZONE) {
      expect(toDateTimeString(NUMBER_POSITIVE)).toBe('03.05.2000 01:00:00');
    } else {
      expect(toDateTimeString(NUMBER_POSITIVE)).toBe('03.05.2000 24:00:00');
    }
  });

  /**
   * Negative testing
   */
  it('negative -> input NaN', () => {
    expect(toDateTimeString(NaN)).toBe(null);
  });

  it('negative -> input Infinity', () => {
    expect(toDateTimeString(Infinity)).toBe(null);
  });
});

describe('toTimeString', () => {
  /**
   * Positive testing
   */
  it('positive -> input 0', () => {
    if (TIMEZONE) {
      expect(toTimeString(0)).toBe('03:00:00');
    } else {
      expect(toTimeString(0)).toBe('24:00:00');
    }
  });

  it('positive -> input 0, withSeconds = false', () => {
    if (TIMEZONE) {
      expect(toTimeString(0, false)).toBe('03:00');
    } else {
      expect(toTimeString(0, false)).toBe('24:00');
    }
  });

  it('positive -> input hh:mm:ss', () => {
    if (TIMEZONE) {
      expect(toTimeString(NUMBER_TIME)).toBe('15:34:47');
    } else {
      expect(toTimeString(NUMBER_TIME)).toBe('15:34:47');
    }
  });

  /**
   * Negative testing
   */
  it('negative -> input NaN', () => {
    expect(toDateTimeString(NaN)).toBe(null);
  });

  it('negative -> input Infinity', () => {
    expect(toDateTimeString(Infinity)).toBe(null);
  });
});
