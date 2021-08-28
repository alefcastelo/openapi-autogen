import { keyGenerator } from '../key'
import { addResponseBody } from '../definitions'
import { ContentType, Target, Schema } from '../types'

export function OAResponseXmlBody(
  statusCode: number,
  description: string,
  schema?: Schema
): MethodDecorator {
  return function (target: Target, methodName: string | symbol): void {
    const key = keyGenerator(target.constructor.name, methodName as string)
    const contentType: ContentType = 'application/xml'

    if (typeof schema === 'string' || typeof schema === 'undefined') {
      addResponseBody(key, statusCode, description, schema, contentType)
    } else {
      addResponseBody(key, statusCode, description, schema.name, contentType)
    }
  }
}
