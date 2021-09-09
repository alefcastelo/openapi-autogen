import { keyGenerator } from '../key'
import { addResponse, Response } from '../definitions'
import { Target } from '../types'

type ForbiddenResponseParams = Omit<Response, 'body' | 'statusCode' | 'description'> & {
  body?: string | { name: string}
}

export function OAForbiddenResponse(params: ForbiddenResponseParams = {}): MethodDecorator {
  return function (target: Target, methodName: string | symbol): void {
    const key = keyGenerator(target.constructor.name, methodName as string)

    let response = {}
    const statusCode = 403
    const description = 'Forbidden'

    if (typeof params.body === 'string' || typeof params.body === 'undefined') {
      response = { ...params, statusCode, description, body: params.body }
    } else {
      response = { ...params, statusCode, description, body: params.body.name }
    }

    addResponse(key, response)
  }
}
