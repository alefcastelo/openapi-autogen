import { OADescription } from '../src'
import { keyGenerator } from '../src/key'
import { getAllDefinitions } from '../src/definitions'

describe('@OADescription', () => {

  class Action {

    @OADescription('User Create')
    handle(): void {
      return
    }
  }

  const key = keyGenerator(Action.name, 'handle')

  it('Defining OperationId', () => {
    expect(getAllDefinitions().description[key].description).toEqual('User Create')
  })
})
