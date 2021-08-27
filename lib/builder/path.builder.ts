import { Definitions } from '../definitions'

export interface Content {
  [key: string]: {
    schema?: {
      $ref: string
    }
  }
}

export interface Path {
  [key: string]: {
    [key: string]: {
      tags?: string[]
      summary?: string
      description?: string
      operationId?: string
      requestBody?: {
        description?: string
        content: Content
        required?: boolean
      }
      responses?: {
        [key: string]: {
          description: string
          content: Content
        }
      }
    }
  }
}

export class PathBuilder {
  constructor(protected definitions: Definitions) {}

  build(): Path {
    const pathsDef = this.definitions.path
    const tagsDef = this.definitions.tags
    const operationIdDef = this.definitions.operationId
    const descriptionDef = this.definitions.description
    const summaryDef = this.definitions.summary
    const requestBodyDef = this.definitions.requestBody
    const responseBodyDef = this.definitions.responseBody

    const paths: Path = {}

    for (const key in pathsDef) {
      const { path, method } = pathsDef[key]
      const config = {}

      if (typeof tagsDef[key] !== 'undefined') {
        config['tags'] = tagsDef[key].tags
      }

      if (typeof operationIdDef[key] !== 'undefined') {
        config['operationId'] = operationIdDef[key].operationId
      }

      if (typeof descriptionDef[key] !== 'undefined') {
        config['description'] = descriptionDef[key].description
      }

      if (typeof summaryDef[key] !== 'undefined') {
        config['summary'] = summaryDef[key].summary
      }

      if (typeof requestBodyDef[key] !== 'undefined') {
        const requestBody = {
          content: {}
        }

        for (const content of Object.values(requestBodyDef[key])) {
          requestBody.content[content.contentType] = {
            schema: `#/components/${content.schema}`
          }
        }

        config['requestBody'] = requestBody
      }

      if (typeof responseBodyDef[key] !== 'undefined') {
        const requestBody = {
        }

        for (const content of Object.values(responseBodyDef[key])) {
          const requestBodyContent = content.contentType && content.schema ? {
            [content.contentType]: {
              schema: `#/components/${content.schema}`
            }
          }: undefined

          requestBody[content.statusCode] = {
            description: content.description,
            content: requestBodyContent
          }
        }

        config['requestBody'] = requestBody
      }

      if (typeof paths[path] === 'undefined') {
        paths[path] = {}
      }

      paths[path][method] = config
    }

    return paths
  }
}
