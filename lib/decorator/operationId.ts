import { keyGenerator } from '../key'
import { addOperationId } from '../definitions'
import { MethodTarget } from '../types'

export function OAOperationId(operationId: string): MethodDecorator {
  return function (target: MethodTarget, methodName: string | symbol): void {
    const key = keyGenerator(target.constructor.name, methodName as string)

    addOperationId(key, operationId)
  }
}
