import { keyGenerator } from '../key'
import { addSummary } from '../definitions'
import { Target } from '../types'

export function OASummary(summary: string): MethodDecorator {
  return function (target: Target, methodName: string | symbol): void {
    const key = keyGenerator(target.constructor.name, methodName as string)

    addSummary(key, summary)
  }
}
