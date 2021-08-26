import { addPath } from '../definitions'
import { keyGenerator } from '../key'
import { MethodTarget } from '../types'

export function OAPut(path: string): MethodDecorator {
  return function (target: MethodTarget, methodName: string | symbol): void {
    const key = keyGenerator(target.constructor.name, methodName as string)

    addPath(key, path, 'put')
  }
}
