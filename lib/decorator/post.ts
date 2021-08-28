import { keyGenerator } from '../key'
import { addPath } from '../definitions'
import { Target } from '../types'

export function OAPost(path: string): MethodDecorator {
  return function (target: Target, methodName: string | symbol): void {
    const key = keyGenerator(target.constructor.name, methodName as string)

    addPath(key, path, 'post')
  }
}
