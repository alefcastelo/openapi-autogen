import { keyGenerator } from "./../key"
import { addOperationId } from "./../definitions"

export function OAOperationId(operationId: string) {
  return function (target: any, methodName: string) {
    const key = keyGenerator(target.constructor.name, methodName)

    addOperationId(key, operationId)
  }
}
