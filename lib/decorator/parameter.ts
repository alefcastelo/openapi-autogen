import { keyGenerator } from '../key'
import { addParameter } from '../definitions'
import { Target } from '../types'

type ParameterParams = {
  in: 'query' | 'header' | 'path' | 'cookie' | 'body' | 'formData'
  name: string
  type?: string,
  format?: string,
  description?: string
  required: boolean
  defaultValue?: string
}

export function OAParameter({ type, format, ...parameter}: ParameterParams): MethodDecorator {
  return function (target: Target, methodName: string | symbol): void {
    const key = keyGenerator(target.constructor.name, methodName as string)

    addParameter(key, {
      ...parameter,
      schema: {
        type,
        format,
      },
    })
  }
}
