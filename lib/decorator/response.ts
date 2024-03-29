import { keyGenerator } from '../key'
import { addResponse, Response } from '../definitions'
import { Target } from '../types'

type ResponseParams = Omit<Response, 'body'> & {
  body?: string | { name: string}
}

export function OAResponse(params: ResponseParams = {}): MethodDecorator {
  return function (target: Target, methodName: string | symbol): void {
    const key = keyGenerator(target.constructor.name, methodName as string)

    let response = {}
    if (typeof params.body === 'string' || typeof params.body === 'undefined') {
      response = { ...params, body: params.body }
    } else {
      response = { ...params, body: params.body.name }
    }

    addResponse(key, response)
  }
}
