import { OARequest } from '../../../lib'
import { keyGenerator } from '../../../lib/key'
import { getAllDefinitions } from '../../../lib/definitions'

describe('@OARequest', () => {

  it('Defining Request Body', () => {
    class Action1 {
      @OARequest({
        body: 'SubscriberCreateInput'
      })
      handle(): void {
        return
      }
    }
    const key = keyGenerator(Action1.name, 'handle')
    const definitions = getAllDefinitions()

    expect(definitions.requests[key][0].body).toEqual('SubscriberCreateInput')
    expect(definitions.requests[key][0].contentType).toEqual('application/json')
  })

  it('Defining Request Body', () => {
    class Action2 {
      @OARequest({
        body: 'SubscriberCreateInput',
        contentType: 'application/x-www-form-urlencoded'
      })
      handle(): void {
        return
      }
    }
    const key = keyGenerator(Action2.name, 'handle')
    const definitions = getAllDefinitions()

    expect(definitions.requests[key][0]).toEqual({
      body: 'SubscriberCreateInput',
      contentType: 'application/x-www-form-urlencoded'
    })
  })
})
