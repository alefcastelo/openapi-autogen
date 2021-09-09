import { OACreatedResponse } from '../../../lib'
import { keyGenerator } from '../../../lib/key'
import { getAllDefinitions } from '../../../lib/definitions'

describe('@OACreatedResponse', () => {

  it('Defining Response Body', () => {
    class Action1 {
      @OACreatedResponse()
      handle(): void {
        return
      }
    }

    const key = keyGenerator(Action1.name, 'handle')
    const definitions = getAllDefinitions()

    expect(definitions.responses[key][0].statusCode).toEqual(201)
    expect(definitions.responses[key][0].description).toEqual('Created')
    expect(definitions.responses[key][0].contentType).toEqual('application/json')
    expect(definitions.responses[key][0].body).toEqual(undefined)
  })

  it('Defining Response Body', () => {

    class Action2 {
      @OACreatedResponse({
        body: 'SubscriberFullOutput',
      })
      handle(): void {
        return
      }
    }

    const key = keyGenerator(Action2.name, 'handle')
    const definitions = getAllDefinitions()

    expect(definitions.responses[key][0].statusCode).toEqual(201)
    expect(definitions.responses[key][0].description).toEqual('Created')
    expect(definitions.responses[key][0].body).toEqual('SubscriberFullOutput')
    expect(definitions.responses[key][0].contentType).toEqual('application/json')
  })
})
