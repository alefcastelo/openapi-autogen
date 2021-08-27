import { OADelete } from '../../../lib'
import { keyGenerator } from '../../../lib/key'
import { getAllDefinitions } from '../../../lib/definitions'

describe('@OADelete', () => {
  class Action {
    @OADelete('/subscriber/{uuid}')
    handle(): void {
      return
    }
  }

  const key = keyGenerator(Action.name, 'handle')

  it('Defining Delete', () => {
    const definitions = getAllDefinitions()

    expect(definitions.path[key].path).toEqual('/subscriber/{uuid}')
    expect(definitions.path[key].method).toEqual('delete')
  })
})
