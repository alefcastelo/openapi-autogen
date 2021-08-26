import { keyGenerator } from '../key'
import { addSummary } from '../definitions'
import { MethodTarget } from '../types'

export function OASummary(summary: string): MethodDecorator {
  return function (target: MethodTarget, methodName: string | symbol): void {
    const key = keyGenerator(target.constructor.name, methodName as string)

    addSummary(key, summary)
  }
}
