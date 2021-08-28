import { addPath } from '../definitions'
import { keyGenerator } from '../key'
import { Target } from '../types'

export function OAPut(path: string): MethodDecorator {
  return function (target: Target, methodName: string | symbol): void {
    const key = keyGenerator(target.constructor.name, methodName as string)

    addPath(key, path, 'put')
  }
}
