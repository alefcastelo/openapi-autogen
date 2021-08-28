import { Definitions } from '../definitions'

interface SchamaProperty {
  type: string
  description: string
  format?: string
  example?: string
  items?: string
}

export interface Schema {
  type: string
  properties: {
    [key: string]: SchamaProperty
  }
}

export interface Schemas {
  [key: string]: Schema
}

const isRef = (type) => {
  return ['string', 'number', 'integer', 'boolean', 'array'].indexOf(type) === -1
}

export class SchemaBuilder {
  constructor(protected definitions: Definitions) {}

  build(): Schemas {
    const schemas: Schemas = {}
    const schemasDef = this.definitions.property

    for(const schema in schemasDef) {
      schemas[schema] = { properties: {}, type: 'object' }

      const properties = {}

      for (const property in schemasDef[schema]) {
        const { type } = schemasDef[schema][property]
        const propType = isRef(type) ? '$ref' : 'type'

        properties[property] = {
          [propType]: type,
        }
      }

      schemas[schema].properties = properties
    }

    return schemas
  }
}
