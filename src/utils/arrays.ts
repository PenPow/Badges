import type { assets, format, size } from "./badges";

type GroupByFn<T, K> = (item: T) => K
export function groupBy<T extends unknown[], K extends string>(arr: T, fn: GroupByFn<T[number], K>): Map<K, T> {
    const map = new Map();

    for(const item of arr) {
        const key = fn(item)

        const collection = map.get(key);

        if(collection) collection.push(item)
        else map.set(key, [item])
    }

    return map;
}

type PermutedArray = [typeof assets, typeof size, typeof format];

// @ts-expect-error will be defined before the recursive function ends
export function permutate(list: PermutedArray, n = 0, result: PermutedArray = [], current: PermutedArray[number] = []){
    if (n === list.length) result.push(current)
    else list[n]!.forEach((item: any) => permutate(list, n+1, result, [...current, item]))

    return result
}

export function prefixItems<TArr extends readonly string[], TPrefix extends string>(list: TArr, prefix: TPrefix) {
    return list.map((item) => prefix + item) as `${TPrefix}${TArr[number]}`[]
}
