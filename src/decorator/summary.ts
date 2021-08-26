import { addSummary } from "./../definitions"
import { keyGenerator } from "./../key"

export function OASummary(summary: string) {
  return function (target: any, methodName: string) {
    const key = keyGenerator(target.constructor.name, methodName)

    addSummary(key, summary)
  }
}
