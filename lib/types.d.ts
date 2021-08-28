export interface Target {
  constructor: { name: string }
}

export type Schema = string | { name: string }

export type ContentType = 'application/json' | 'application/xml' | 'application/x-www-form-urlencoded'
