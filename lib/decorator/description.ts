import { keyGenerator } from '../key'
import { addDescription } from '../definitions'
import { Target } from '../types'

export function OADescription(description: string): MethodDecorator {
  return function (target: Target, methodName: string | symbol): void {
    const key = keyGenerator(target.constructor.name, methodName as string)

    addDescription(key, description)
  }
}
