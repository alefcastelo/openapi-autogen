import { keyGenerator } from '../key'
import { addRequest, Request } from '../definitions'
import { Target } from '../types'

type RequestParams = Omit<Request, 'body'> & {
  body?: string | { name: string }
}

export function OARequest({body, contentType = 'application/json'}: RequestParams): MethodDecorator {
  return function (target: Target, methodName: string | symbol): void {
    const key = keyGenerator(target.constructor.name, methodName as string)

    if (typeof body === 'string') {
      addRequest(key, { body, contentType })
      return
    }

    addRequest(key, { body: body.name, contentType })
  }
}
