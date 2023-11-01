import { describe, expect, it } from 'vitest';
import { toTimestamp } from '../src';

const TEST_TIME = '09:04';
const TEST_TIME_TS = 9 * 3600 * 1000 + 4 * 60 * 1000;
const TIMEZONE = new Date().getTimezoneOffset() * 60 * 1000;
const TEST_DATE_RU = '01.01.2000';
const TEST_DATE_US = '2000-01-01';
const TEST_DATE_TS = new Date(`${TEST_DATE_US}`).getTime();

describe('toTimestamp', () => {
  /**
   * Positive testing
   */
  it('positive format Date DD.MM.YYYY', () => {
    expect(toTimestamp(TEST_DATE_RU)).toBe(TEST_DATE_TS + TIMEZONE);
  });

  it('positive format Date YYYY-MM-DD', () => {
    expect(toTimestamp(TEST_DATE_US)).toBe(TEST_DATE_TS + TIMEZONE);
  });

  it('positive format Time hh:mm', () => {
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();
    const now = new Date(`${year}-${month}-${day}`).getTime();

    expect(toTimestamp(TEST_TIME)).toBe(now + TEST_TIME_TS);
  });

  it('positive format DateTime YYYY-MM-DD hh:mm', () => {
    expect(toTimestamp(`${TEST_DATE_US} ${TEST_TIME}`)).toBe(TEST_DATE_TS + TIMEZONE + TEST_TIME_TS);
  });

  it('positive format DateTime YYYY-MM-DDThh:mm', () => {
    expect(toTimestamp(`${TEST_DATE_US}T${TEST_TIME}`)).toBe(TEST_DATE_TS + TIMEZONE + TEST_TIME_TS);
  });

  it('positive format DateTime DD.MM.YYYY hh:mm', () => {
    expect(toTimestamp(`${TEST_DATE_RU} ${TEST_TIME}`)).toBe(TEST_DATE_TS + TIMEZONE + TEST_TIME_TS);
  });

  it('positive format DateTime DD.MM.YYYYThh:mm', () => {
    expect(toTimestamp(`${TEST_DATE_RU}T${TEST_TIME}`)).toBe(TEST_DATE_TS + TIMEZONE + TEST_TIME_TS);
  });

  it('positive format DateTime YYYY-MM-DDThh:mm with not ms', () => {
    const expected = Math.floor((TEST_DATE_TS + TIMEZONE + TEST_TIME_TS) / 1000);
    expect(toTimestamp(`${TEST_DATE_US}T${TEST_TIME}`, true)).toBe(expected);
  });

  /**
   * Negative testing
   */
  it('negative empty string', () => {
    expect(toTimestamp('')).toBe(null);
  });

  it('negative format DateTime YYYY/MM/DDThh:mm', () => {
    expect(toTimestamp(`1970/01/01T${TEST_TIME}`)).toBe(null);
  });

  it('negative format Date DD month YYYY', () => {
    expect(toTimestamp('14 may 1970')).toBe(null);
  });

  it('negative format Date DDmonthYYYY', () => {
    expect(toTimestamp('14may1970')).toBe(null);
  });

  it('negative format Date DD.MM.YYYY', () => {
    expect(toTimestamp('32.15.-1871')).toBe(null);
  });

  it('negative format Date DD-MM-YYYY', () => {
    expect(toTimestamp('01-01-2000')).toBe(null);
  });
});
