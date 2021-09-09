import { OABadRequestResponse } from '../../../lib'
import { keyGenerator } from '../../../lib/key'
import { getAllDefinitions } from '../../../lib/definitions'

describe('@OABadRequestResponse', () => {

  it('Defining Response Body', () => {
    class Action1 {
      @OABadRequestResponse()
      handle(): void {
        return
      }
    }

    const key = keyGenerator(Action1.name, 'handle')
    const definitions = getAllDefinitions()

    expect(definitions.responses[key][0].statusCode).toEqual(400)
    expect(definitions.responses[key][0].description).toEqual('Bad Request')
    expect(definitions.responses[key][0].contentType).toEqual('application/json')
    expect(definitions.responses[key][0].body).toEqual(undefined)
  })

  it('Defining Response Body', () => {

    class Action2 {
      @OABadRequestResponse({
        body: 'SubscriberFullOutput',
      })
      handle(): void {
        return
      }
    }

    const key = keyGenerator(Action2.name, 'handle')
    const definitions = getAllDefinitions()

    expect(definitions.responses[key][0].statusCode).toEqual(400)
    expect(definitions.responses[key][0].description).toEqual('Bad Request')
    expect(definitions.responses[key][0].body).toEqual('SubscriberFullOutput')
    expect(definitions.responses[key][0].contentType).toEqual('application/json')
  })
})
