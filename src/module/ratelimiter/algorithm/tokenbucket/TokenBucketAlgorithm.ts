import { IStorage } from "../../../storage/IStorage";
import { Options, Units } from "../../Options";
import { IRateLimiterAlgorithm } from "../RateLimiterAlgorithm";
import { TokenBucket } from "./TokenBucket";
import { TokenBucketOptions } from "./TokenBucketOptions";

export class TokenBucketAlgorithm
  implements IRateLimiterAlgorithm<string, TokenBucket>
{
  storage: IStorage<string, TokenBucket>;
  private options: Options;
  private bucketOptions: TokenBucketOptions;
  constructor(storage: IStorage<string, TokenBucket>, options: Options) {
    this.storage = storage;
    this.options = options;
    this.bucketOptions = {
      maxToken: this.options.requestPerUnit,
      refillInterval: this.getRefillInterval(),
    };
  }

  async addRequest(key: string): Promise<boolean> {
    let bucket: TokenBucket = await this.storage.get(key);
    if (bucket == null) {
      bucket = new TokenBucket(this.bucketOptions);
      this.storage.set(key, bucket);
    }
    return bucket.consum();
  }

  private getRefillInterval(): number {
    let refillInterval: number;
    const unit = this.options.unit;
    if (unit == Units.SECONDS) {
      refillInterval = this.options.numberOfUnit * 1000;
    } else if (unit == Units.MINUTES) {
      refillInterval = this.options.numberOfUnit * 60 * 1000;
    } else if (unit == Units.HOURS) {
      refillInterval = this.options.numberOfUnit * 60 * 60 * 1000;
    } else if (unit == Units.DAYS) {
      refillInterval = this.options.numberOfUnit * 24 * 60 * 1000;
    } else {
      refillInterval = 1000;
    }
    return refillInterval;
  }
}
