type Path = { path: string; method: string }
type Tags = { tags: string[] }
type Summary = { summary: string }
type Description = { description: string }
type OperationId = { operationId: string }
type Response = { status: number; description: string }
type RequestJsonBody = { schema: string }
type RequestXmlBody = { schema: string }
type ResponseJsonBody = { schema: string }
type ResponseXmlBody = { schema: string }
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
  requestJsonBody: {
    [key: string]: RequestJsonBody
  }
  requestXmlBody: {
    [key: string]: RequestXmlBody
  }
  responseJsonBody: {
    [key: string]: ResponseJsonBody
  }
  responseXmlBody: {
    [key: string]: ResponseXmlBody
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
  requestJsonBody: {},
  requestXmlBody: {},
  responseJsonBody: {},
  responseXmlBody: {},
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
