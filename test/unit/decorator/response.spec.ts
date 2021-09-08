import { OAResponse } from '../../../lib'
import { keyGenerator } from '../../../lib/key'
import { getAllDefinitions } from '../../../lib/definitions'

describe('@OAResponseBody', () => {

  it('Defining Response Body', () => {
    class Action1 {
      @OAResponse({ statusCode: 200, description: 'Subscriber Full Output'})
      handle(): void {
        return
      }
    }

    const key = keyGenerator(Action1.name, 'handle')
    const definitions = getAllDefinitions()

    expect(definitions.responseBody[key][0].statusCode).toEqual(200)
    expect(definitions.responseBody[key][0].description).toEqual('Subscriber Full Output')
    expect(definitions.responseBody[key][0].contentType).toEqual('application/json')
    expect(definitions.responseBody[key][0].schema).toEqual(undefined)
  })

  it('Defining Response Body', () => {

    class Action2 {
      @OAResponse({
        schema: 'SubscriberFullOutput',
        statusCode: 200,
        description: 'Subscriber Full Output'
      })
      handle(): void {
        return
      }
    }

    const key = keyGenerator(Action2.name, 'handle')
    const definitions = getAllDefinitions()

    expect(definitions.responseBody[key][0].statusCode).toEqual(200)
    expect(definitions.responseBody[key][0].description).toEqual('Subscriber Full Output')
    expect(definitions.responseBody[key][0].schema).toEqual('SubscriberFullOutput')
    expect(definitions.responseBody[key][0].contentType).toEqual('application/json')
  })
})
