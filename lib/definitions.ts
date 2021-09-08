type Path = { path: string; method: string }
type Tags = { tags: string[] }
type Summary = { summary: string }
type Description = { description: string }
type OperationId = { operationId: string }
type Response = { status: number; description: string }
type RequestBody = { schema: string, contentType: string }
type ResponseBody = { statusCode: number, description?: string, schema?: string, contentType?: string }
type Property = {
  required?: boolean
  type?: string
  $ref?: string
  description?: string
}
type Parameter = {
  in?: 'query' | 'header' | 'path' | 'cookie'
  name?: string
  schema?: {
    type?: string
  }
  required?: boolean
  description?: string
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
    [key: string]: { [key: string]: Property }
  }
  parameter: {
    [key: string]: Parameter[]
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
  property: {},
  parameter: {}
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

export const addProperty = (key: string, name: string, propertyParams: unknown): void => {
  if (typeof definitions.property[key] === 'undefined') {
    definitions.property[key] = {}
  }

  definitions.property[key][name] = propertyParams
}

export const addParameter = (key: string, parameterParams: unknown): void => {
  if (typeof definitions.parameter[key] === 'undefined') {
    definitions.parameter[key] = []
  }

  definitions.parameter[key].push(parameterParams)
}
