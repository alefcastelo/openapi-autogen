import {  Definitions } from '../definitions'

export interface Content {
  schema?: {
    $ref: string
  }
}

export interface Contents {
  [key: string]: Content
}

type Parameter = {
  in: 'query' | 'header' | 'path' | 'cookie' | 'body' | 'formData'
  name: string
  schema: {
    type: string,
    format: string,
  }
  description?: string
  required?: boolean
  defaultValue?: string
}

type Parameters = Parameter[]

export interface Method {
  tags?: string[]
  summary?: string
  description?: string
  operationId?: string
  parameters?: Parameters
  request?: {
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
    const {
      path,
      description,
      summary,
      tags,
      operationId,
      parameters,
      requests,
      responses
    } = this.definitions

    const paths: Paths = {}

    for (const key in path) {
      const config = {}

      if (typeof tags[key] !== 'undefined') {
        config['tags'] = tags[key]
      }

      if (typeof operationId[key] !== 'undefined') {
        config['operationId'] = operationId[key]
      }

      if (typeof description[key] !== 'undefined') {
        config['description'] = description[key]
      }

      if (typeof summary[key] !== 'undefined') {
        config['summary'] = summary[key]
      }

      if (typeof parameters[key] !== 'undefined') {
        config['parameters'] = parameters[key]
      }

      if (typeof requests[key] !== 'undefined') {
        const request = {
          content: {}
        }

        for (const content of Object.values(requests[key])) {
          request.content[content.contentType] = {
            schema: {
              $ref: `#/components/schemas/${content.body}`
            }
          }
        }

        config['requestBody'] = request
      }

      if (typeof responses[key] !== 'undefined') {
        const response = {
        }

        for (const content of Object.values(responses[key])) {
          const responseContent = content.contentType && content.body ? {
            [content.contentType]: {
              schema: {
                $ref: `#/components/schemas/${content.body}`
              }
            }
          }: undefined

          response[content.statusCode] = {
            description: content.description
          }

          if (typeof responseContent !== 'undefined') {
            response[content.statusCode].content = responseContent
          }
        }

        config['responses'] = response
      }

      if (typeof paths[path[key].path] === 'undefined') {
        paths[path[key].path] = {}
      }

      paths[path[key].path][path[key].method] = config
    }

    return paths
  }
}
