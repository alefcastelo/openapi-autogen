import { OADescription, OAGet, OAOperationId, OAPost, OAPut, OARequestBody, OAResponseBody, OAResponseJsonBody, OASummary, OATags, OpenApi } from '../../lib'

describe('OpenApi', () => {
  it('Defining Doc', () => {

    class SubscriberControler {

      @OAPost('/subscriber')
      @OATags(['subscriber'])
      @OADescription('Create a new Subscriber')
      @OARequestBody('SubscriberCreateInput')
      create(): void {
        return
      }

      @OAGet('/subscriber/{uuid}')
      @OATags(['subscriber'])
      @OADescription('Retrieve the Subscriber')
      retrieve(): void {
        return
      }

      @OAPut('/subscriber/{uuid}')
      @OATags(['subscriber'])
      @OADescription('Update the Subscriber')
      @OASummary('Update the Subscriber')
      @OAOperationId('subscriberUpdate')
      @OARequestBody('SubscriberUpdateInput')
      @OAResponseJsonBody(200, 'Subscriber Full Output', 'SubscriberFullOutput')
      @OAResponseBody(404, 'Subscriber Not Found')
      @OAResponseBody(500, 'Internal Server Error')
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
        "http://localhost:3000"
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
                  "schema": "#/components/SubscriberCreateInput"
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
              "200": {
                "description": "Subscriber Full Output",
                "content": {
                  "application/json": {
                    "schema": "#/components/SubscriberFullOutput"
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
      }
    })
  })
})
