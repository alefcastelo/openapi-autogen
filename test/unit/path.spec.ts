import { OAPath } from '../../lib'
import { keyGenerator } from '../../lib/key'
import { getAllDefinitions } from '../../lib/definitions'

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
