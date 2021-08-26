import { keyGenerator } from '../key'
import { addPath } from '../definitions'
import { MethodTarget } from '../types'

export interface PathParams {
  path: string
  method: string
}

export function OAPath(path: string, method: string): MethodDecorator {
  return function (target: MethodTarget, methodName: string | symbol): void {
    const key = keyGenerator(target.constructor.name, methodName as string)

    addPath(key, path, method)
  }
}
