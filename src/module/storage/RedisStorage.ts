import { IStorage } from "./IStorage";
import { createClient, RedisClient } from "redis";
import AppConfig from "../../config";

export default class RedisStorage<V> implements IStorage<string, V> {
    private client: RedisClient;

    constructor() {
        this.client = createClient({
            host: AppConfig.REDIS_HOST,
            port: AppConfig.REDIS_PORT
        })
    }
    async get(key: string): Promise<V> {
        // TODO: Get data from redis cache
        return null;
    }

    async set(key: string, value: V): Promise<boolean> {
        // TODO: set data to redis
        return true;
    }
}