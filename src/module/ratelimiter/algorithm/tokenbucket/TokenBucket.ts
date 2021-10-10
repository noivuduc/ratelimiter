import { TokenBucketOptions } from "./TokenBucketOptions";

export class TokenBucket {
  private capacity: number;
  private tokens: number;
  constructor(bucketOptions: TokenBucketOptions) {
    this.capacity = bucketOptions?.maxToken;
    this.tokens = bucketOptions?.maxToken;
    /**
     * Default interval is 1s
     */
    const interval =  bucketOptions?.refillInterval || 1000;
    setInterval(() => this.refillToken(), interval);
    console.log("New bucket is created, interval is ", interval)
  }

  refillToken(): void {
      console.log("Refill token", new Date().toTimeString())
    if (this.tokens < this.capacity) {
      this.tokens++;
    }
  }

  consum(): boolean {
    if (this.tokens > 0) {
      this.tokens--;
      return true;
    }
    return false;
  }
}
