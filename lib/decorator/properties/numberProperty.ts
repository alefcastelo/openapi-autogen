import { NumberFormatType, NumberProperty } from "../../definitions"

export class NumberPropertyMap {
  map(params: unknown): NumberProperty {
    const violations = {}
    const property: NumberProperty = { type: params['type'] ?? 'integer' }

    if (typeof params['description'] !== 'undefined') {
        property.description = params['description']
    }

    if (typeof params['required'] !== 'undefined') {
      property.required = params['required']
    }

    if (typeof params['format'] !== 'undefined') {
      if (typeof NumberFormatType[params['format']] === 'undefined') {
        violations['format'] = `${params['format']} is not a valid format`
      }

      property.format = params['format']
    }

    if (typeof params['maximum'] !== 'undefined') {
      property.maximum = params['maximum']
    }

    if (typeof params['minimum'] !== 'undefined') {
      property.minimum = params['minimum']
    }

    return property
  }
}
