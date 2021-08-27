import { OASummary } from '../../../lib'
import { keyGenerator } from '../../../lib/key'
import { getAllDefinitions } from '../../../lib/definitions'

describe('@OASummary', () => {
  class Action {
    @OASummary('User Create')
    handle(): void {
      return
    }
  }

  const key = keyGenerator(Action.name, 'handle')

  it('Defining Summary', () => {
    expect(getAllDefinitions().summary[key].summary).toEqual('User Create')
  })
})
