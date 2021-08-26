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
      security: {
        [key: string]: string[]
      }
    }
  }
}

export class PathBuilder {
  constructor(protected definitions: Definitions) {}

  build(): Path[] {
    const paths = this.definitions.path

    for (const path in paths) {
      console.log(paths[path])
    }

    return []
  }
}
