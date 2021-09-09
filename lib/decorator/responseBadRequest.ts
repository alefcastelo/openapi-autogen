import { keyGenerator } from '../key'
import { addResponse, Response } from '../definitions'
import { Target } from '../types'

type BadRequestResponseParams = Omit<Response, 'body' | 'statusCode'> & {
  body?: string | { name: string}
}

export function OABadRequestResponse(params: BadRequestResponseParams = {}): MethodDecorator {
  return function (target: Target, methodName: string | symbol): void {
    const key = keyGenerator(target.constructor.name, methodName as string)

    let response = {}
    const statusCode = 400
    const description = params.description ?? 'Bad Request'

    if (typeof params.body === 'string' || typeof params.body === 'undefined') {
      response = { ...params, statusCode, description, body: params.body }
    } else {
      response = { ...params, statusCode, description, body: params.body.name }
    }

    addResponse(key, response)
  }
}
