import { keyGenerator } from "./../key"
import { addPath } from "./../definitions"

export function OAPut(path: string) {
  return function (target: any, methodName: string) {
    const key = keyGenerator(target.constructor.name, methodName)

    addPath(key, path, 'put')
  }
}
