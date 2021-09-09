import { keyGenerator } from '../key'
import { addResponse, Response } from '../definitions'
import { Target } from '../types'

type ServerErrorResponseParams = Omit<Response, 'body' | 'statusCode' | 'description'> & {
  body?: string | { name: string}
}

export function OAServerErrorResponse(params: ServerErrorResponseParams = {}): MethodDecorator {
  return function (target: Target, methodName: string | symbol): void {
    const key = keyGenerator(target.constructor.name, methodName as string)

    let response = {}
    const statusCode = 500
    const description = 'Internal Server Error'

    if (typeof params.body === 'string' || typeof params.body === 'undefined') {
      response = { ...params, statusCode, description, body: params.body }
    } else {
      response = { ...params, statusCode, description, body: params.body.name }
    }

    addResponse(key, response)
  }
}
