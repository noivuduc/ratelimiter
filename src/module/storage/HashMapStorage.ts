import { IStorage } from "./IStorage";

export class HashMapStorage<K, V> implements IStorage<K, V> {
  private storage: Map<K, V>;
  constructor() {
    this.storage = new Map();
  }
  async set(key: K, value: V): Promise<boolean> {
    this.storage.set(key, value);
    return true
  }

  async get(key: K): Promise<V> {
    return this.storage.get(key);
  }
}
