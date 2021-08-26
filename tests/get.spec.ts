import { OAGet } from '../src'
import { keyGenerator } from '../src/key'
import { getAllDefinitions } from '../src/definitions'

describe('@OAGet', () => {

  class Action {

    @OAGet('/subscriber/{uuid}')
    handle(): void {
      return
    }
  }

  const key = keyGenerator(Action.name, 'handle')

  it('Defining Path', () => {
    const definitions = getAllDefinitions()

    expect(definitions.path[key].path).toEqual('/subscriber/{uuid}')
    expect(definitions.path[key].method).toEqual('get')
  })
})
