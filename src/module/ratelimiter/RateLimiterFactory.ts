import { IStorage } from "../storage/IStorage";
import { IRateLimiterAlgorithm } from "./algorithm/RateLimiterAlgorithm";
import { TokenBucket } from "./algorithm/tokenbucket/TokenBucket";
import { TokenBucketAlgorithm } from "./algorithm/tokenbucket/TokenBucketAlgorithm";
import { Options } from "./Options";

export class RateLimiterFactory {
    static tokenBucketFactory(bucketOptions: Options, storage: IStorage<string, TokenBucket>): IRateLimiterAlgorithm<string, TokenBucket> {
        return new TokenBucketAlgorithm(storage, bucketOptions);
    }

};