import { Path, PathBuilder } from './builder/path.builder'
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

interface OpenApiDocument {
  openapi?: string
  info?: Info
  tags?: Tag[]
  servers?: string[]
  externalDocs?: ExternalDocs
  paths?: Path
}

export class OpenApi {
  protected oa: OpenApiDocument = {}

  constructor(protected openApiVersion: string, protected definitions: Definitions = getAllDefinitions()) {
    this.oa.openapi = openApiVersion
  }

  build(): OpenApiDocument {
    const path = this.buildPaths()
    if (Object.keys(path).length > 0) {
      this.oa.paths = path
    }

    return this.oa
  }

  buildPaths(): Path {
    const builder = new PathBuilder(this.definitions)

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

    this.oa.servers = [url, ...this.oa.servers]

    return this
  }
}
