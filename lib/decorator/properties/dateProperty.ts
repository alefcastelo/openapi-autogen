import { StringProperty } from "../../definitions"

export class DatePropertyMap {
  map(params: unknown): StringProperty {
    const property: StringProperty = { type: 'string' }

    if (typeof params['description'] !== 'undefined') {
        property.description = params['description']
    }

    if (typeof params['required'] !== 'undefined') {
      property.required = params['required']
    }

    property.format = params['format'] === 'date-time' ? 'date-time' : 'date'

    return property
  }
}
