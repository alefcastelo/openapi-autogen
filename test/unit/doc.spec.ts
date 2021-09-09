import { OADescription, OAGet, OANotFoundResponse, OAOkResponse, OAOperationId, OAParameter, OAPost, OAProperty, OAPut, OARequest, OAResponse, OAServerErrorResponse, OASummary, OATags, OpenApi } from '../../lib'

describe('OpenApi', () => {
  it('Defining Doc', () => {

    class AddressCreateInput {
      @OAProperty()
      public street: string

      @OAProperty()
      public number: number
    }

    class SubscriberCreateInput {
      @OAProperty()
      public firstName: string

      @OAProperty()
      public lastName: string

      @OAProperty()
      public email: string

      @OAProperty()
      public address: AddressCreateInput
    }

    class SubscriberUpdateInput {
      @OAProperty()
      public firstName: string

      @OAProperty()
      public lastName: string

      @OAProperty()
      public email: string

      @OAProperty()
      public address: AddressCreateInput
    }

    class SubscriberFullOutput {
      @OAProperty()
      public firstName: string

      @OAProperty()
      public lastName: string

      @OAProperty()
      public email: string
    }

    class SubscriberControler {

      @OAPost('/subscriber')
      @OATags('subscriber')
      @OADescription('Create a new Subscriber')
      @OARequest({
        body: SubscriberCreateInput
      })
      @OAResponse({
        body: SubscriberFullOutput,
        statusCode: 200,
        description: 'Subscriber Full Output'
      })
      create(): void {
        return
      }

      @OAGet('/subscriber/{uuid}')
      @OATags('subscriber')
      @OADescription('Retrieve the Subscriber')
      @OAParameter({
        in: 'path',
        name: 'uuid',
        type: 'string',
        format: 'uuid',
        required: true
      })
      @OAOkResponse({
        body: SubscriberFullOutput,
        description: 'Subscriber Full Output'
      })
      retrieve(): void {
        return
      }

      @OAPut('/subscriber/{uuid}')
      @OAParameter({
        in: 'path',
        name: 'uuid',
        type: 'string',
        format: 'uuid',
        required: true
      })
      @OATags('subscriber')
      @OADescription('Update the Subscriber')
      @OASummary('Update the Subscriber')
      @OAOperationId('subscriberUpdate')
      @OARequest({
        body: SubscriberUpdateInput
      })
      @OAOkResponse({
        body: SubscriberFullOutput,
        description: 'Subscriber Full Output'
      })
      @OANotFoundResponse({
        description: 'Subscriber Not Found'
      })
      @OAServerErrorResponse()
      update(): void {
        return
      }
    }

    const openApi = new OpenApi('3.0.2')

    openApi
      .title('Eclesi API')
      .description('Eclesi is a church plataform to creates better relationship between members and churchs.')
      .version('1.0.0')
      .addTag({ name: 'members' })
      .addTag({ name: 'churchs' })
      .addTag({ name: 'groups' })
      .addServer('http://localhost:3000')

    const doc = openApi.build()

    expect(doc).toEqual({
      "openapi": "3.0.2",
      "info": {
        "title": "Eclesi API",
        "description": "Eclesi is a church plataform to creates better relationship between members and churchs.",
        "version": "1.0.0"
      },
      "tags": [
        {
          "name": "groups"
        },
        {
          "name": "churchs"
        },
        {
          "name": "members"
        }
      ],
      "servers": [
        {
          "url": "http://localhost:3000"
        }
      ],
      "paths": {
        "/subscriber": {
          "post": {
            "tags": [
              "subscriber"
            ],
            "description": "Create a new Subscriber",
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SubscriberCreateInput"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Subscriber Full Output",
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/SubscriberFullOutput"
                    }
                  }
                }
              }
            }
          }
        },
        "/subscriber/{uuid}": {
          "get": {
            "tags": [
              "subscriber"
            ],
            "description": "Retrieve the Subscriber",
            "parameters": [
              {
                "in": "path",
                "name": "uuid",
                "required": true,
                "schema": {
                  "type": "string",
                  "format": "uuid"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Subscriber Full Output",
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/SubscriberFullOutput"
                    }
                  }
                }
              }
            }
          },
          "put": {
            "tags": [
              "subscriber"
            ],
            "operationId": "subscriberUpdate",
            "description": "Update the Subscriber",
            "summary": "Update the Subscriber",
            "parameters": [
              {
                "in": "path",
                "name": "uuid",
                "required": true,
                "schema": {
                  "type": "string",
                  "format": "uuid"
                }
              }
            ],
            "requestBody": {
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SubscriberUpdateInput"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Subscriber Full Output",
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/SubscriberFullOutput"
                    }
                  }
                }
              },
              "404": {
                "description": "Subscriber Not Found"
              },
              "500": {
                "description": "Internal Server Error"
              }
            }
          }
        }
      },
      "components": {
        "schemas": {
          "AddressCreateInput": {
            "properties": {
              "street": {
                "type": "string"
              },
              "number": {
                "type": "integer"
              }
            },
            "type": "object"
          },
          "SubscriberCreateInput": {
            "properties": {
              "firstName": {
                "type": "string"
              },
              "lastName": {
                "type": "string"
              },
              "email": {
                "type": "string"
              },
              "address": {
                "$ref": "#/components/schemas/AddressCreateInput"
              }
            },
            "type": "object"
          },
          "SubscriberUpdateInput": {
            "properties": {
              "firstName": {
                "type": "string"
              },
              "lastName": {
                "type": "string"
              },
              "email": {
                "type": "string"
              },
              "address": {
                "$ref": "#/components/schemas/AddressCreateInput"
              }
            },
            "type": "object"
          },
          "SubscriberFullOutput": {
            "properties": {
              "firstName": {
                "type": "string"
              },
              "lastName": {
                "type": "string"
              },
              "email": {
                "type": "string"
              }
            },
            "type": "object"
          }
        }
      }
    })
  })
})
