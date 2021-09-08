import { keyGenerator } from '../key'
import { addResponseBody } from '../definitions'
import { ContentType, Target, Schema } from '../types'

export type ResponseParams = {
  statusCode?: number
  description?: string
  schema?: Schema,
  contentType?: ContentType,
}

export function OAResponse({ schema, statusCode, description, contentType = 'application/json'}: ResponseParams): MethodDecorator {
  return function (target: Target, methodName: string | symbol): void {
    const key = keyGenerator(target.constructor.name, methodName as string)

    if (typeof schema === 'string' || typeof schema === 'undefined') {
      addResponseBody(key, statusCode, description, schema, contentType)
    } else {
      addResponseBody(key, statusCode, description, schema.name, contentType)
    }
  }
}
