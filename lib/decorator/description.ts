import { keyGenerator } from '../key'
import { addDescription, Description } from '../definitions'
import { Target } from '../types'

type DescriptionParam = Description

export function OADescription(description: DescriptionParam): MethodDecorator {
  return function (target: Target, methodName: string | symbol): void {
    const key = keyGenerator(target.constructor.name, methodName as string)

    addDescription(key, description)
  }
}
