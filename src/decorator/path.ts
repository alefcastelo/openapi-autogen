import { keyGenerator } from "./../key"
import { addPath } from "./../definitions"

export interface PathParams {
  path: string
  method: string
}

export function OAPath(path: string, method: string) {
  return function (target: any, methodName: string) {
    const key = keyGenerator(target.constructor.name, methodName)

    addPath(key, path, method)
  }
}
