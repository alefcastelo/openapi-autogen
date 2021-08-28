import { Definitions } from '../definitions'

export interface Content {
  schema?: {
    $ref: string
  }
}

export interface Contents {
  [key: string]: Content
}


export interface Method {
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
      content: Contents
    }
  }
}

export interface Path {
  [key: string]: Method
}

export interface Paths {
  [key: string]: Path
}

export class PathBuilder {
  constructor(protected definitions: Definitions) {}

  build(): Paths {
    const pathsDef = this.definitions.path
    const tagsDef = this.definitions.tags
    const operationIdDef = this.definitions.operationId
    const descriptionDef = this.definitions.description
    const summaryDef = this.definitions.summary
    const requestBodyDef = this.definitions.requestBody
    const responseBodyDef = this.definitions.responseBody

    const paths: Paths = {}

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
            schema: {
              $ref: `#/components/schemas/${content.schema}`
            }
          }
        }

        config['requestBody'] = requestBody
      }

      if (typeof responseBodyDef[key] !== 'undefined') {
        const responseBody = {
        }

        for (const content of Object.values(responseBodyDef[key])) {
          const responseBodyContent = content.contentType && content.schema ? {
            [content.contentType]: {
              schema: {
                $ref: `#/components/schemas/${content.schema}`
              }
            }
          }: undefined

          responseBody[content.statusCode] = {
            description: content.description
          }

          if (typeof responseBodyContent !== 'undefined') {
            responseBody[content.statusCode].content = responseBodyContent
          }
        }

        config['responses'] = responseBody
      }

      if (typeof paths[path] === 'undefined') {
        paths[path] = {}
      }

      paths[path][method] = config
    }

    return paths
  }
}
