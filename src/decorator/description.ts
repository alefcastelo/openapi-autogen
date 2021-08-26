import { keyGenerator } from "./../key"
import { addDescription } from "./../definitions"

export function OADescription(description: string) {
  return function (target: any, methodName: string) {
    const key = keyGenerator(target.constructor.name, methodName)

    addDescription(key, description)
  }
}
