import { OADescription } from '../../../lib'
import { keyGenerator } from '../../../lib/key'
import { getAllDefinitions } from '../../../lib/definitions'

describe('@OADescription', () => {
  class Action {
    @OADescription('User Create')
    handle(): void {
      return
    }
  }

  const key = keyGenerator(Action.name, 'handle')

  it('Defining Description', () => {
    expect(getAllDefinitions().description[key]).toEqual('User Create')
  })
})
