import { getAllDefinitions } from '../../../lib/definitions'
import { PathBuilder } from '../../../lib/builder/path.builder'
import { OADescription, OAGet, OAOperationId, OAPost, OAPut, OARequestBody, OAResponse, OASummary, OATags } from '../../../lib'

describe('PathBuilder', () => {

  class SubscriberControler {

    @OAPost('/subscriber')
    @OATags('subscriber')
    @OADescription('Create a new Subscriber')
    @OARequestBody('SubscriberCreateInput')
    create(): void {
      return
    }


    @OAGet('/subscriber/{uuid}')
    @OATags('subscriber')
    @OADescription('Retrieve the Subscriber')
    retrieve(): void {
      return
    }

    @OAPut('/subscriber/{uuid}')
    @OATags('subscriber')
    @OADescription('Update the Subscriber')
    @OASummary('Update the Subscriber')
    @OAOperationId('subscriberUpdate')
    @OARequestBody('SubscriberUpdateInput')
    @OAResponse({ schema: 'SubscriberFullOutput', statusCode:200, description: 'Subscriber Full Output'})
    @OAResponse({ statusCode:404, description: 'Subscriber Not Found'})
    @OAResponse({ statusCode:500, description: 'Internal Server Error'})
    update(): void {
      return
    }
  }

  it('Defining Path', () => {
    const definitions = getAllDefinitions()
    const builder = new PathBuilder(definitions)
    const paths = builder.build()

    expect(paths).toEqual({
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
          }
        }
      },
      "/subscriber/{uuid}": {
        "get": {
          "tags": [
            "subscriber"
          ],
          "description": "Retrieve the Subscriber"
        },
        "put": {
          "tags": [
            "subscriber"
          ],
          "operationId": "subscriberUpdate",
          "description": "Update the Subscriber",
          "summary": "Update the Subscriber",
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
    })
  })
})
