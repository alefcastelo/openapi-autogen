import { OAPath } from '../src'
import { keyGenerator } from '../src/key'
import { getAllDefinitions } from '../src/definitions'

describe('@OAPath', () => {

  class Action {

    @OAPath('/subscriber', 'post')
    handle(): void {
      return
    }
  }

  const key = keyGenerator(Action.name, 'handle')

  it('Defining Path', () => {
    const definitions = getAllDefinitions()

    expect(definitions.path[key].path).toEqual('/subscriber')
    expect(definitions.path[key].method).toEqual('post')
  })
})
