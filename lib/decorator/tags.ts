import { keyGenerator } from '../key'
import { addTags, Tags } from '../definitions'
import { Target } from '../types'

type TagsParams = Tags

export function OATags(...tags: TagsParams): MethodDecorator {
  return function (target: Target, methodName: string | symbol): void {
    const key = keyGenerator(target.constructor.name, methodName as string)

    addTags(key, tags)
  }
}
