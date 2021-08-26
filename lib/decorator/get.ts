import { keyGenerator } from '../key'
import { addPath } from '../definitions'
import { MethodTarget } from '../types'

export function OAGet(path: string): MethodDecorator {
  return function (target: MethodTarget, methodName: string | symbol): void {
    const key = keyGenerator(target.constructor.name, methodName as string)

    addPath(key, path, 'get')
  }
}
