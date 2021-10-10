import Express, { Request, Response, NextFunction } from "express";
import { RateLimiter } from "./module/ratelimiter";
import { Algorithm, Options, Units } from "./module/ratelimiter/Options";
import { TokenBucket } from "./module/ratelimiter/algorithm/tokenbucket/TokenBucket";
import { IRateLimiterAlgorithm } from "./module/ratelimiter/algorithm/RateLimiterAlgorithm";
import { RateLimiterFactory } from "./module/ratelimiter/RateLimiterFactory";
import { HashMapStorage } from "./module/storage/HashMapStorage";
import RedisStorage from "./module/storage/RedisStorage";
import AppConfig from "./config";

const app = Express();
const PORT = AppConfig.PORT;

const storage: HashMapStorage<string, TokenBucket> = new HashMapStorage<string, TokenBucket>();
// const redisStorage: RedisStorage<string, TokenBucket> = new RedisStorage<string, TokenBucket>()
const options: Options = {
  algo: Algorithm.TOKEN_BUCKET,
  requestPerUnit: AppConfig.REQUEST_PER_UNIT,
  unit: Units.SECONDS,
  numberOfUnit: AppConfig.NUMBER_OF_UNIT,
};
const tokenBucket: IRateLimiterAlgorithm<string, TokenBucket> = RateLimiterFactory.tokenBucketFactory(options, storage);

const rateLimiter: RateLimiter<string, TokenBucket> = new RateLimiter(tokenBucket);
app.use(rateLimiter.limit.bind(rateLimiter));

app.get("/data", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ status: "Hello, it's me you are looking for (^.^)" });
});

app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}.`);
});
