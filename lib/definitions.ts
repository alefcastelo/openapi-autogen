export type StatusCode = 200 | 201 | 202 | 204 | 400 | 401 | 403 | 404 | 405 | 500
export type PathParam = string
export type MethodParam = 'post' | 'get' | 'put' | 'delete' | 'patch'
export type ContentType = 'application/json' | 'application/xml' | 'application/x-www-form-urlencoded'

export type Path = {
  path: PathParam
  method: MethodParam
}

export type Tags = string[]

export type Summary = string

export type Description = string

export type OperationId = string

export type Request = {
  body?: string,
  contentType?: ContentType
}

export type Response = {
  body?: string,
  statusCode?: StatusCode,
  description?: Description,
  contentType?: ContentType
}

type PropertyInterface = {
  type: 'string' | 'number' | 'integer' | 'boolean' | 'array' | 'object'
  required?: boolean
  description?: string
}

export enum StringFormatType {
  'date'='date',
  'date-time'='date-time',
  'password'='password',
  'email'='email',
  'uuid'='uuid',
  'hostname'='hostname',
  'ipv4'='ipv4',
  'ipv6'='ipv6',
  'uri'='uri',
}

export type StringProperty = Omit<PropertyInterface, 'type'> & {
  type: 'string'
  minLength?: number
  maxLength?: number
  format?: StringFormatType
}

export type EnumProperty = Omit<PropertyInterface, 'type'> & {
  type?: 'string' | 'number'
  enum: unknown[]
  useKeys?: boolean
}

export enum NumberFormatType {
  'float'='float',
  'double'='double',
  'int32'='int32',
  'int64'='int64',
}

export type NumberProperty = Omit<PropertyInterface, 'type'> & {
  type: 'integer' | 'number'
  minimum?: number
  maximum?: number
  format?: NumberFormatType
}

type ArrayTypeProperty = {
  type: 'string' | 'number' | 'boolean' | 'integer'
}

type ArrayRefProperty = {
  $ref: string
}

type ArrayMixedTypeProperty = {
  oneOf: ArrayTypeProperty[] | ArrayRefProperty[]
}

export type ArrayProperty = Omit<PropertyInterface, 'type'> & {
  type: 'array'
  items?: ArrayTypeProperty | ArrayRefProperty | ArrayMixedTypeProperty
}

export type ObjectProperty = Omit<PropertyInterface, 'type'> & {
  type?: 'object'
  $ref?: string
}

export type Property = StringProperty | EnumProperty | NumberProperty | ArrayProperty | ObjectProperty

export type Parameter = {
  in?: 'query' | 'header' | 'path' | 'cookie' | 'body' | 'formData'
  name?: string
  schema?: {
    type?: string,
    format?: string,
  }
  required?: boolean
  description?: Description
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
  requests: {
    [key: string]: Request[]
  }
  responses: {
    [key: string]: Response[]
  }
  property: {
    [key: string]: { [key: string]: Property }
  }
  parameters: {
    [key: string]: Parameter[]
  }
}

const definitions: Definitions = {
  path: {},
  tags: {},
  summary: {},
  description: {},
  operationId: {},
  requests: {},
  responses: {},
  property: {},
  parameters: {}
}

export const getAllDefinitions = (): Definitions => {
  return definitions
}

export const addDescription = (key: string, description: string): void => {
  definitions.description[key] = description
}

export const addSummary = (key: string, summary: string): void => {
  definitions.summary[key] = summary
}

export const addTags = (key: string, tags: Tags): void => {
  definitions.tags[key] = tags
}

export const addOperationId = (key: string, operationId: string): void => {
  definitions.operationId[key] = operationId
}

export const addPath = (key: string, path: Path): void => {
  definitions.path[key] = path
}

export const addRequest = (key: string, request: Request): void => {
  if (typeof definitions.requests[key] === 'undefined') {
    definitions.requests[key] = []
  }

  if (typeof request.contentType === 'undefined') {
    request.contentType = 'application/json'
  }

  definitions.requests[key].push(request)
}

export const addResponse = (key: string, response: Response): void => {
  if (typeof definitions.responses[key] === 'undefined') {
    definitions.responses[key] = []
  }

  if (typeof response.contentType === 'undefined') {
    response.contentType = 'application/json'
  }

  definitions.responses[key].push(response)
}

export const addProperty = (key: string, name: string, property: Property): void => {
  if (typeof definitions.property[key] === 'undefined') {
    definitions.property[key] = {}
  }

  definitions.property[key][name] = property
}

export const addParameter = (key: string, parameter: Parameter): void => {
  if (typeof definitions.parameters[key] === 'undefined') {
    definitions.parameters[key] = []
  }

  definitions.parameters[key].push(parameter)
}
