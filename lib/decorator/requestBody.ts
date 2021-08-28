import { keyGenerator } from '../key'
import { addRequestBody } from '../definitions'
import { ContentType, Target, Schema } from '../types'

export function OARequestBody(schema: Schema, contentType: ContentType = 'application/json'): MethodDecorator {
  return function (target: Target, methodName: string | symbol): void {
    const key = keyGenerator(target.constructor.name, methodName as string)

    if (typeof schema === 'string') {
      addRequestBody(key, schema, contentType)
    } else {
      addRequestBody(key, schema.name, contentType)
    }
  }
}
