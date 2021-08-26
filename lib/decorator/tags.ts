import { keyGenerator } from '../key'
import { addTags } from '../definitions'
import { MethodTarget } from '../types'

export function OATags(tags: string[]): MethodDecorator {
  return function (target: MethodTarget, methodName: string | symbol): void {
    const key = keyGenerator(target.constructor.name, methodName as string)

    addTags(key, tags)
  }
}
