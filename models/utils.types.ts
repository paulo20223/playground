export type Nullable<T> = T | null
export type Optional<T> = T | undefined
export type MaybePromise<T> = T | Promise<T>
export type MaybeArray<T> = T | T[]

export type Entries<TKey = string, TValue = any> = [TKey, TValue][]
