import { formatSecondsToDuration, formatSecondsToMmss } from './util-format';

describe('formatSecondsToDuration', () => {
  it('should return 00:00 if 0 seconds provided', () => {
    expect(formatSecondsToMmss(0)).toEqual('00:00');
  });

  it('should return proper time string', () => {
    expect(formatSecondsToMmss(123)).toEqual('02:03');
  });

  it('should return hours if seconds was greater than 3600', () => {
    expect(formatSecondsToMmss(3600)).toEqual('01:00:00');
    expect(formatSecondsToMmss(3599)).toEqual('59:59');
    expect(formatSecondsToMmss(3601)).toEqual('01:00:01');
  });
});

describe('formatSecondsToDuration', () => {
  it('should return proper duration', () => {
    expect(formatSecondsToDuration(123)).toEqual('2m 3s');
  });

  it('should return only {number}s if second was less than 60', () => {
    expect(formatSecondsToDuration(59)).toEqual('59s');
  });

  it('should return {number}m and {number}s if second was greater than 60', () => {
    expect(formatSecondsToDuration(60)).toEqual('1m 0s');
  });

  it('should return {number}h {number}m and {number}s if second was greater than 3600', () => {
    expect(formatSecondsToDuration(3600)).toEqual('1h 0m 0s');
    expect(formatSecondsToDuration(3599)).toEqual('59m 59s');
    expect(formatSecondsToDuration(3601)).toEqual('1h 0m 1s');
  });
});
