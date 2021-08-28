import { addProperty } from "../definitions"
import { Target } from "../types"

type PropertyParams = {
  required?: boolean
  type?: 'string' | 'integer'
  description?: string
}

export const PropTypeEnum = {
  String: "string",
  Number: "integer",
}

const getPropType = (target: Target, propertyName: string, params: PropertyParams) => {
  if (typeof params.type !== 'undefined') {
    return params.type
  }

  const { name } = Reflect.getMetadata("design:type", target as Object, propertyName)

  if (typeof PropTypeEnum[name] !== 'undefined') {
    return PropTypeEnum[name]
  }

  return `#/components/schemas/${name}`
}

export function OAProperty(params: PropertyParams = {}): PropertyDecorator {
  return function (target: Target, propertyName: string) {
    const type = getPropType(target, propertyName, params)

    addProperty(target.constructor.name, propertyName, { ...params, type})
  }
}
