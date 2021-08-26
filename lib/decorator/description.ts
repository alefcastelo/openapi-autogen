import { keyGenerator } from '../key'
import { addDescription } from '../definitions'
import { MethodTarget } from '../types'

export function OADescription(description: string): MethodDecorator {
  return function (target: MethodTarget, methodName: string | symbol): void {
    const key = keyGenerator(target.constructor.name, methodName as string)

    addDescription(key, description)
  }
}
