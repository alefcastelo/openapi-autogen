import { OASummary } from '../src'
import { keyGenerator } from '../src/key'
import { getAllDefinitions } from '../src/definitions'

describe('@OASummary', () => {

  class Action {

    @OASummary('User Create')
    handle(): void {
      return
    }
  }

  const key = keyGenerator(Action.name, 'handle')

  it('Defining OperationId', () => {
    expect(getAllDefinitions().summary[key].summary).toEqual('User Create')
  })
})
