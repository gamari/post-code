import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// TODO 型を使ったデータ変換処理を書く
type PickKeys<T, K extends keyof T> = {
  [P in K]: T[P];
};

export function converDataToFormData<T, K extends keyof T>(obj: T, keys: K[]): PickKeys<T, K> {
  const result: Partial<T> = {};
  keys.forEach(key => {
    result[key] = obj[key];
  });
  return result as PickKeys<T, K>;
}