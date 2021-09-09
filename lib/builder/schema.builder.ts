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

export class SchemaBuilder {
  constructor(protected definitions: Definitions) {}

  build(): Schemas {
    const schemas: Schemas = {}
    const schemasDef = this.definitions.property

    for(const schema in schemasDef) {
      schemas[schema] = { properties: {}, type: 'object' }

      const properties = {}

      for (const property in schemasDef[schema]) {
        properties[property] = schemasDef[schema][property]
      }

      schemas[schema].properties = properties
    }

    return schemas
  }
}
