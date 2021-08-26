import { OADelete } from '../src'
import { keyGenerator } from '../src/key'
import { getAllDefinitions } from '../src/definitions'

describe('@OADelete', () => {

  class Action {

    @OADelete('/subscriber/{uuid}')
    handle(): void {
      return
    }
  }

  const key = keyGenerator(Action.name, 'handle')

  it('Defining Path', () => {
    const definitions = getAllDefinitions()

    expect(definitions.path[key].path).toEqual('/subscriber/{uuid}')
    expect(definitions.path[key].method).toEqual('delete')
  })
})
