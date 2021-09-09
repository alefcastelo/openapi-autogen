import { OAServerErrorResponse } from '../../../lib'
import { keyGenerator } from '../../../lib/key'
import { getAllDefinitions } from '../../../lib/definitions'

describe('@OAServerErrorResponse', () => {

  it('Defining Response Body', () => {
    class Action1 {
      @OAServerErrorResponse()
      handle(): void {
        return
      }
    }

    const key = keyGenerator(Action1.name, 'handle')
    const definitions = getAllDefinitions()

    expect(definitions.responses[key][0].statusCode).toEqual(500)
    expect(definitions.responses[key][0].description).toEqual('Internal Server Error')
    expect(definitions.responses[key][0].contentType).toEqual('application/json')
    expect(definitions.responses[key][0].body).toEqual(undefined)
  })

  it('Defining Response Body', () => {

    class Action2 {
      @OAServerErrorResponse({
        body: 'SubscriberFullOutput',
      })
      handle(): void {
        return
      }
    }

    const key = keyGenerator(Action2.name, 'handle')
    const definitions = getAllDefinitions()

    expect(definitions.responses[key][0].statusCode).toEqual(500)
    expect(definitions.responses[key][0].description).toEqual('Internal Server Error')
    expect(definitions.responses[key][0].body).toEqual('SubscriberFullOutput')
    expect(definitions.responses[key][0].contentType).toEqual('application/json')
  })
})
