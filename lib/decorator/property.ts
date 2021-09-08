import { addProperty } from "../definitions"
import { Target } from "../types"

type PropertyParams = {
  required?: boolean
  type?: 'string' | 'integer' | 'number' | 'boolean' | 'array' | 'object'
  $ref?: string
  description?: string
}

export const PropType = {
  String: "string",
  Number: "integer",
}

export function OAProperty(params: PropertyParams = {}): PropertyDecorator {
  return function (target: Target, propertyName: string) {

    if (typeof params.type !== 'undefined') {
      addProperty(target.constructor.name, propertyName, params)
      return
    }

    const { name } = Reflect.getMetadata("design:type", target as Object, propertyName)

    if (typeof PropType[name] !== 'undefined') {
      addProperty(target.constructor.name, propertyName, { ...params, type: PropType[name] })
      return
    }

    addProperty(target.constructor.name, propertyName, { ...params, $ref: `#/components/schemas/${name}`})
  }
}
