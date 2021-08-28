import { keyGenerator } from '../key'
import { addTags } from '../definitions'
import { Target } from '../types'

export function OATags(tags: string[]): MethodDecorator {
  return function (target: Target, methodName: string | symbol): void {
    const key = keyGenerator(target.constructor.name, methodName as string)

    addTags(key, tags)
  }
}
