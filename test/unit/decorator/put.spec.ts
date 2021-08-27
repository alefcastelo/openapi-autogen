import { OAPut } from '../../../lib'
import { keyGenerator } from '../../../lib/key'
import { getAllDefinitions } from '../../../lib/definitions'

describe('@OAPut', () => {
  class Action {
    @OAPut('/subscriber/{uuid}')
    handle(): void {
      return
    }
  }

  const key = keyGenerator(Action.name, 'handle')

  it('Defining Put', () => {
    const definitions = getAllDefinitions()

    expect(definitions.path[key].path).toEqual('/subscriber/{uuid}')
    expect(definitions.path[key].method).toEqual('put')
  })
})
