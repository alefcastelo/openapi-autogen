import { ArrayProperty } from "../../definitions"

export class ArrayPropertyMap {
  map(params: unknown): ArrayProperty {
    const property: ArrayProperty = { type: 'array' }

    if (typeof params['description'] !== 'undefined') {
        property.description = params['description']
    }

    if (typeof params['required'] !== 'undefined') {
      property.required = params['required']
    }

    return property
  }
}
