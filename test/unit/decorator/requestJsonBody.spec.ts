import { OARequestJsonBody } from '../../../lib'
import { keyGenerator } from '../../../lib/key'
import { getAllDefinitions } from '../../../lib/definitions'

describe('@OARequestJsonBody', () => {
  class Action {
    @OARequestJsonBody('SubscriberCreateInput')
    handle(): void {
      return
    }
  }

  it('Defining Request Json Body', () => {
    const key = keyGenerator(Action.name, 'handle')
    const definitions = getAllDefinitions()

    expect(definitions.requestBody[key][0].schema).toEqual('SubscriberCreateInput')
    expect(definitions.requestBody[key][0].contentType).toEqual('application/json')
  })
})
