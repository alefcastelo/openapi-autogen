import { OAResponse } from '../../../lib'
import { keyGenerator } from '../../../lib/key'
import { getAllDefinitions } from '../../../lib/definitions'

describe('@OAResponse', () => {

  it('Defining Response Body', () => {
    class Action1 {
      @OAResponse({ statusCode: 200, description: 'Subscriber Full Output'})
      handle(): void {
        return
      }
    }

    const key = keyGenerator(Action1.name, 'handle')
    const definitions = getAllDefinitions()

    expect(definitions.responses[key][0].statusCode).toEqual(200)
    expect(definitions.responses[key][0].description).toEqual('Subscriber Full Output')
    expect(definitions.responses[key][0].contentType).toEqual('application/json')
    expect(definitions.responses[key][0].body).toEqual(undefined)
  })

  it('Defining Response Body', () => {

    class Action2 {
      @OAResponse({
        body: 'SubscriberFullOutput',
        statusCode: 200,
        description: 'Subscriber Full Output'
      })
      handle(): void {
        return
      }
    }

    const key = keyGenerator(Action2.name, 'handle')
    const definitions = getAllDefinitions()

    expect(definitions.responses[key][0].statusCode).toEqual(200)
    expect(definitions.responses[key][0].description).toEqual('Subscriber Full Output')
    expect(definitions.responses[key][0].body).toEqual('SubscriberFullOutput')
    expect(definitions.responses[key][0].contentType).toEqual('application/json')
  })
})
