import { keyGenerator } from '../key'
import { addResponseBody } from '../definitions'
import { ContentType, Target, Schema } from '../types'

type OkResponseParams = {
  statusCode?: number
  description?: string
  schema?: Schema,
  contentType?: ContentType,
}

export function OAOkResponse({ schema, description, contentType = 'application/json'}: OkResponseParams): MethodDecorator {
  return function (target: Target, methodName: string | symbol): void {
    const key = keyGenerator(target.constructor.name, methodName as string)

    if (typeof schema === 'string' || typeof schema === 'undefined') {
      addResponseBody(key, 200, description, schema, contentType)
    } else {
      addResponseBody(key, 200, description, schema.name, contentType)
    }
  }
}
