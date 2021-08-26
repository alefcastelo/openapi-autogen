import { keyGenerator } from "./../key"
import { addTags } from "./../definitions"

export function OATags(tags: string[]) {
  return function (target: any, methodName: string) {
    const key = keyGenerator(target.constructor.name, methodName)

    addTags(key, tags)
  }
}
