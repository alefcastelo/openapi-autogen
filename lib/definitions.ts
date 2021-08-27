type Path = { path: string; method: string }
type Tags = { tags: string[] }
type Summary = { summary: string }
type Description = { description: string }
type OperationId = { operationId: string }
type Response = { status: number; description: string }
type RequestBody = { schema: string, contentType: string }
type ResponseBody = { statusCode: number, description?: string, schema?: string, contentType?: string }
type Property = {
  name: string
  required: boolean
  boolean: boolean
  type: string
  format: string
  items: string
  enum: string[]
  default: string
  description: string
}

export interface Definitions {
  path: {
    [key: string]: Path
  }
  tags: {
    [key: string]: Tags
  }
  summary: {
    [key: string]: Summary
  }
  description: {
    [key: string]: Description
  }
  operationId: {
    [key: string]: OperationId
  }
  requestBody: {
    [key: string]: RequestBody[]
  }
  responseBody: {
    [key: string]: ResponseBody[]
  }
  response: {
    [key: string]: Response
  }
  property: {
    [key: string]: Property[]
  }
}

const definitions: Definitions = {
  path: {},
  tags: {},
  summary: {},
  description: {},
  operationId: {},
  requestBody: {},
  responseBody: {},
  response: {},
  property: {}
}

export const getAllDefinitions = (): Definitions => {
  return definitions
}

export const addDescription = (key: string, description: string): void => {
  definitions.description[key] = { description }
}

export const addSummary = (key: string, summary: string): void => {
  definitions.summary[key] = { summary }
}

export const addTags = (key: string, tags: string[]): void => {
  definitions.tags[key] = { tags }
}

export const addOperationId = (key: string, operationId: string): void => {
  definitions.operationId[key] = { operationId }
}

export const addPath = (key: string, path: string, method: string): void => {
  definitions.path[key] = { path, method }
}

export const addRequestBody = (key: string, schema: string, contentType: string): void => {
  if (typeof definitions.requestBody[key] === 'undefined') {
    definitions.requestBody[key] = []
  }

  definitions.requestBody[key].push({ schema, contentType })
}

export const addResponseBody = (key: string, statusCode: number, description: string, schema?: string, contentType?: string): void => {
  if (typeof definitions.responseBody[key] === 'undefined') {
    definitions.responseBody[key] = []
  }

  definitions.responseBody[key].push({ statusCode, description, schema, contentType })
}
