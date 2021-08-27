import { OARequestXmlBody } from '../../../lib'
import { keyGenerator } from '../../../lib/key'
import { getAllDefinitions } from '../../../lib/definitions'

describe('@OARequestXmlBody', () => {
  class Action {
    @OARequestXmlBody('SubscriberCreateInput')
    handle(): void {
      return
    }
  }

  it('Defining Request Xml Body', () => {
    const key = keyGenerator(Action.name, 'handle')
    const definitions = getAllDefinitions()

    expect(definitions.requestBody[key][0].schema).toEqual('SubscriberCreateInput')
    expect(definitions.requestBody[key][0].contentType).toEqual('application/xml')
  })
})
