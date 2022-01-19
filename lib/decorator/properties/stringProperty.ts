import { StringProperty } from "../../definitions"

export class StringPropertyMap {
  map(params: unknown): StringProperty {
    const property: StringProperty = { type: 'string' }

    if (typeof params['description'] !== 'undefined') {
        property.description = params['description']
    }

    if (typeof params['required'] !== 'undefined') {
      property.required = params['required']
    }

    if (typeof params['format'] !== 'undefined') {
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
