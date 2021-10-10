import { NextFunction, Request, Response } from "express";
import { IRateLimiterAlgorithm } from "./algorithm/RateLimiterAlgorithm";
export class RateLimiter<K, V> {
  private algorithm: IRateLimiterAlgorithm<K, V>;
  constructor(algorithm: IRateLimiterAlgorithm<K, V>) {
    this.algorithm = algorithm;
  }

  limit(request: Request, response: Response, next: NextFunction) {
    const ip: string = request.ip || request.headers.forwarded;
    if (this.algorithm.addRequest(ip)) {
      return next();
    }
    return response.status(429).send();
  }
}
