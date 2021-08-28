import { Paths, PathBuilder } from './builder/path.builder'
import { SchemaBuilder, Schemas } from './builder/schema.builder'
import { Definitions, getAllDefinitions } from './definitions'

export interface Tag {
  name?: string
  description?: string
  externalDocs?: {
    description?: string
    url?: string
  }
}

interface Info {
  title?: string
  description?: string
  termsOfService?: string
  contact?: {
    email: string
  }
  license?: {
    name?: string
    url?: string
  }
  version?: string
}

interface ExternalDocs {
  description?: string
  url?: string
}

interface Server {
  url: string
}

interface OpenApiDocument {
  openapi?: string
  info?: Info
  tags?: Tag[]
  servers?: Server[]
  externalDocs?: ExternalDocs
  paths?: Paths
  components?: {
    schemas?: Schemas
  }
}

export class OpenApi {
  protected oa: OpenApiDocument = {}

  constructor(protected openApiVersion: string, protected definitions: Definitions = getAllDefinitions()) {
    this.oa.openapi = openApiVersion
  }

  build(): OpenApiDocument {
    const paths = this.buildPaths()
    if (Object.keys(paths).length > 0) {
      this.oa.paths = paths
    }

    this.oa.components = {}
    const schemas = this.buildSchemas()
    if (Object.keys(schemas).length > 0) {
      this.oa.components.schemas = schemas
    }

    return this.oa
  }

  buildPaths(): Paths {
    const builder = new PathBuilder(this.definitions)

    return builder.build()
  }

  buildSchemas(): Schemas {
    const builder = new SchemaBuilder(this.definitions)

    return builder.build()
  }

  version(version: string): OpenApi {
    if (typeof this.oa.info === 'undefined') {
      this.oa.info = {}
    }

    this.oa.info.version = version

    return this
  }

  title(title: string): OpenApi {
    if (typeof this.oa.info === 'undefined') {
      this.oa.info = {}
    }

    this.oa.info.title = title

    return this
  }

  description(description: string): OpenApi {
    if (typeof this.oa.info === 'undefined') {
      this.oa.info = {}
    }

    this.oa.info.description = description

    return this
  }

  addTag(tag: Tag): OpenApi {
    if (typeof this.oa.tags === 'undefined') {
      this.oa.tags = []
    }

    this.oa.tags = [tag, ...this.oa.tags]

    return this
  }

  addServer(url: string): OpenApi {
    if (typeof this.oa.servers === 'undefined') {
      this.oa.servers = []
    }

    this.oa.servers = [{ url: url }, ...this.oa.servers]

    return this
  }
}
