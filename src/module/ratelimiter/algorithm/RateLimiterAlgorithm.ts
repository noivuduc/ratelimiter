import { IStorage } from "../../storage/IStorage";

export interface IRateLimiterAlgorithm<K, V> {
    storage: IStorage<K, V>;
    addRequest(key: string): Promise<boolean>
}