import { keyGenerator } from '../key'
import { addRequestBody } from '../definitions'
import { ContentType, Target, Schema } from '../types'

export function OARequestJsonBody(schema: Schema): MethodDecorator {
  return function (target: Target, methodName: string | symbol): void {
    const key = keyGenerator(target.constructor.name, methodName as string)
    const contentType: ContentType = 'application/json'

    if (typeof schema === 'string') {
      addRequestBody(key, schema, contentType)
    } else {
      addRequestBody(key, schema.name, contentType)
    }
  }
}
