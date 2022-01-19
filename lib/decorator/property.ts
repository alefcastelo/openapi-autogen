import { addProperty, Property } from "../definitions"
import { Target } from "../types"
import { ArrayPropertyMap } from "./properties/arrayProperty"
import { EnumPropertyMap } from "./properties/enumProperty"
import { NumberPropertyMap } from "./properties/numberProperty"
import { ObjectPropertyMap } from "./properties/objectProperty"
import { StringPropertyMap } from "./properties/stringProperty"
import { DatePropertyMap } from "./properties/dateProperty"

export type PropertyParams = Property | {}

enum PropertyReflectType {
  String="string",
  Date="date",
  Number="number",
  Integer="integer",
  Boolean="boolean",
  Array="array"
}

export function OAProperty(params: PropertyParams = {}): PropertyDecorator {
  return function (target: Target, propertyName: string) {
    const { name } = Reflect.getMetadata("design:type", target as Object, propertyName)

    if (typeof params['type'] === 'undefined') {
      params['type'] = PropertyReflectType[name] ?? 'object'
    }

    if (typeof params['enum'] !== 'undefined') {
      const enumProperty = new EnumPropertyMap()
      addProperty(target.constructor.name, propertyName, enumProperty.map(params))

      return
    }

    if (params['type'] === 'string') {
      const stringProperty = new StringPropertyMap()
      addProperty(target.constructor.name, propertyName, stringProperty.map(params))

      return
    }

    if (params['type'] === 'date') {
      const dateProperty = new DatePropertyMap()
      addProperty(target.constructor.name, propertyName, dateProperty.map(params))

      return
    }

    if (params['type'] === 'array') {
      const arrayProperty = new ArrayPropertyMap()
      addProperty(target.constructor.name, propertyName, arrayProperty.map(params))

      return
    }


    if (params['type'] === 'number' || params['type'] === 'integer') {
      const numberProperty = new NumberPropertyMap()
      addProperty(target.constructor.name, propertyName, numberProperty.map(params))

      return
    }

    if (params['type'] === 'object') {
      const objectProperty = new ObjectPropertyMap(target, propertyName)
      addProperty(target.constructor.name, propertyName, objectProperty.map(params))
    }
  }
}
