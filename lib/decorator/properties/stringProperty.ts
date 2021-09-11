import { StringFormatType, StringProperty } from "../../definitions"

export class StringPropertyMap {
  map(params: unknown): StringProperty {
    const violations = {}
    const property: StringProperty = { type: 'string' }

    if (typeof params['description'] !== 'undefined') {
        property.description = params['description']
    }

    if (typeof params['required'] !== 'undefined') {
      property.required = params['required']
    }

    if (typeof params['format'] !== 'undefined') {
      if (typeof StringFormatType[params['format']] === 'undefined') {
        violations['format'] = `${params['format']} is not a valid format`
      }

      property.format = params['format']
    }

    if (typeof params['maxLength'] !== 'undefined') {
      property.maxLength = params['maxLength']
    }

    if (typeof params['minLength'] !== 'undefined') {
      property.minLength = params['minLength']
    }

    return property
  }
}
