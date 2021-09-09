import { keyGenerator } from '../key'
import { addSummary, Summary } from '../definitions'
import { Target } from '../types'

type SummaryParam = Summary

export function OASummary(summary: SummaryParam): MethodDecorator {
  return function (target: Target, methodName: string | symbol): void {
    const key = keyGenerator(target.constructor.name, methodName as string)

    addSummary(key, summary)
  }
}
