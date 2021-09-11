import { ObjectProperty } from "../../definitions"
import { Target } from "../../types"

export class ObjectPropertyMap {
  constructor(protected target: Target, protected propertyName: string) { }
  map(params: unknown): ObjectProperty {
    const violations = {}

    const property: ObjectProperty = {}

    if (typeof params['description'] !== 'undefined') {
        property.description = params['description']
    }

    if (typeof params['required'] !== 'undefined') {
      property.required = params['required']
    }

    if (typeof params['$ref'] !== 'undefined') {
      if (typeof params['$ref'].name !== 'undefined') {
        property.$ref = `#/components/schemas/${params['$ref'].name}`
      } else {
        property.$ref = `#/components/schemas/${params['$ref']}`
      }
    } else {
      const { name } = Reflect.getMetadata("design:type", this.target as Object, this.propertyName)
      property.$ref = `#/components/schemas/${name}`
    }

    return property
  }
}
