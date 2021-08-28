import { keyGenerator } from '../key'
import { addOperationId } from '../definitions'
import { Target } from '../types'

export function OAOperationId(operationId: string): MethodDecorator {
  return function (target: Target, methodName: string | symbol): void {
    const key = keyGenerator(target.constructor.name, methodName as string)

    addOperationId(key, operationId)
  }
}
