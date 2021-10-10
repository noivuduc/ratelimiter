export interface IStorage<K, V> {
    get(key: K): Promise<V>,
    set(key: K, value: V): Promise<boolean>
}