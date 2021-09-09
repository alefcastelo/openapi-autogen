import { Target } from '../types'
import { keyGenerator } from '../key'
import { addPath, MethodParam, PathParam } from '../definitions'

export function OAPath(path: PathParam, method: MethodParam): MethodDecorator {
  return function (target: Target, methodName: string | symbol): void {
    const key = keyGenerator(target.constructor.name, methodName as string)

    addPath(key, { path, method })
  }
}
