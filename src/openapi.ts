import { Path, PathBuilder } from "./builder/path";
import { Definitions, getAllDefinitions } from "./../definitions";


export interface Tag {
  name?: string
  description?: string
  externalDocs?: {
    description?: string
    url?: string
  }
}

export interface OpenApi {
  openapi?: string
  info?: {
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
  externalDocs?: {
    description?: string
    url?: string
  }
  servers?: string[]
  tags?: Tag[]
  paths?: Path[]
}

export class OpenApiDoc {

  protected oa: OpenApi = {
    openapi: undefined
  };

  constructor(version: string, protected definitions: Definitions = getAllDefinitions()){
    this.oa.openapi = version
  }

  build(): OpenApi {
    this.oa.paths = this.buildPaths(this.definitions)

    return this.oa
  }

  buildPaths(definitions: Definitions): Path[] {
    const builder = new PathBuilder(definitions)

    return builder.build()
  }

  version(version: string): OpenApiDoc {
    if (!this.oa.hasOwnProperty('info')) {
      this.oa.info = {}
    }

    this.oa.info!.version = version

    return this
  }

  title(title: string): OpenApiDoc {
    if (!this.oa.hasOwnProperty('info')) {
      this.oa.info = {}
    }

    this.oa.info!.title = title

    return this
  }

  description(description: string): OpenApiDoc {
    if (!this.oa.hasOwnProperty('info')) {
      this.oa.info = {}
    }

    this.oa.info!.description = description

    return this
  }

  addTag(tag: Tag): OpenApiDoc {
    if (!this.oa.hasOwnProperty('tags')) {
      this.oa.tags = []
    }

    this.oa.tags!.push(tag)

    return this
  }

  addServer(url: string): OpenApiDoc {
    if (!this.oa.hasOwnProperty('servers')) {
      this.oa.servers = []
    }

    this.oa.servers!.push(url)

    return this
  }
}
