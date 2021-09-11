import { EnumProperty } from "../../definitions"


const enumToArray = (enumeration, useKeys: boolean): unknown[] => {

  if (Array.isArray(enumeration)) {
    return enumeration
  }

  const enumValues = Object.keys(enumeration)
    .filter(key => isNaN(Number(key)))

  if (useKeys) {
    return enumValues
  }

  return enumValues.map(key => enumeration[key])
      .filter(val => typeof val === "number" || typeof val === "string")
}

export class EnumPropertyMap {
  map(params: unknown): EnumProperty {
    const violations = {}

    const enumValues = enumToArray(params['enum'], params['useKeys'])

    const property: EnumProperty = { type: params['type'], enum:  enumValues}

    if (typeof params['description'] !== 'undefined') {
        property.description = params['description']
    }

    if (typeof params['required'] !== 'undefined') {
      property.required = params['required']
    }

    return property
  }
}
