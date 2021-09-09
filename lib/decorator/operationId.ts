import { keyGenerator } from '../key'
import { addOperationId, OperationId } from '../definitions'
import { Target } from '../types'

type OperationIdParam = OperationId

export function OAOperationId(operationId: OperationIdParam): MethodDecorator {
  return function (target: Target, methodName: string | symbol): void {
    const key = keyGenerator(target.constructor.name, methodName as string)

    addOperationId(key, operationId)
  }
}
