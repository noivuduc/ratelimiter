export interface Options {
  unit: Units;
  requestPerUnit: number;
  numberOfUnit: number,
  /**
   * Default algorithm is token bucket
   */
  algo?: Algorithm,
  redis?: Redis;
}

export enum Units {
  DAYS,
  HOURS,
  MINUTES,
  SECONDS
}

export enum Algorithm {
  TOKEN_BUCKET,
  SLIDING_WINDOW_LOGS
}

interface Redis {
  port: number;
  host: string;
}
