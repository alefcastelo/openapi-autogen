import { keyGenerator } from '../key'
import { addRequest, Request } from '../definitions'
import { Target } from '../types'

type RequestParams = Omit<Request, 'body'> & {
  body?: string | { name: string }
}

export function OARequest(params: RequestParams): MethodDecorator {
  return function (target: Target, methodName: string | symbol): void {
    const key = keyGenerator(target.constructor.name, methodName as string)

    if (typeof params.body === 'string') {
      addRequest(key, { ...params, body: params.body })
      return
    }

    addRequest(key, { ...params, body: params.body.name })
  }
}
