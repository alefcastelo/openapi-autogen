import { OAResponseJsonBody } from '../../../lib'
import { keyGenerator } from '../../../lib/key'
import { getAllDefinitions } from '../../../lib/definitions'

describe('@OAResponseJsonBody', () => {

  it('Defining Response Body', () => {
    class Action1 {
      @OAResponseJsonBody(200, 'Subscriber Full Json Output')
      handle(): void {
        return
      }
    }

    const key = keyGenerator(Action1.name, 'handle')
    const definitions = getAllDefinitions()

    expect(definitions.responseBody[key][0].statusCode).toEqual(200)
    expect(definitions.responseBody[key][0].description).toEqual('Subscriber Full Json Output')
    expect(definitions.responseBody[key][0].schema).toEqual(undefined)
    expect(definitions.responseBody[key][0].contentType).toEqual('application/json')
  })

  it('Defining Response Body', () => {

    class Action2 {
      @OAResponseJsonBody(200, 'Subscriber Full Json Output', 'SubscriberFullOutput')
      handle(): void {
        return
      }
    }

    const key = keyGenerator(Action2.name, 'handle')
    const definitions = getAllDefinitions()

    expect(definitions.responseBody[key][0].statusCode).toEqual(200)
    expect(definitions.responseBody[key][0].description).toEqual('Subscriber Full Json Output')
    expect(definitions.responseBody[key][0].schema).toEqual('SubscriberFullOutput')
    expect(definitions.responseBody[key][0].contentType).toEqual('application/json')
  })
})
