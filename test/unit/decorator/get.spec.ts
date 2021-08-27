import { OAGet } from '../../../lib'
import { keyGenerator } from '../../../lib/key'
import { getAllDefinitions } from '../../../lib/definitions'

describe('@OAGet', () => {
  class Action {
    @OAGet('/subscriber/{uuid}')
    handle(): void {
      return
    }
  }

  const key = keyGenerator(Action.name, 'handle')

  it('Defining Get', () => {
    const definitions = getAllDefinitions()

    expect(definitions.path[key].path).toEqual('/subscriber/{uuid}')
    expect(definitions.path[key].method).toEqual('get')
  })
})
