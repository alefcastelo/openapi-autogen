import { keyGenerator } from '../key'
import { addPath, PathParam } from '../definitions'
import { Target } from '../types'

export function OAPatch(path: PathParam): MethodDecorator {
  return function (target: Target, methodName: string | symbol): void {
    const key = keyGenerator(target.constructor.name, methodName as string)

    addPath(key, { path, method: 'patch' })
  }
}
