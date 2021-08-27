import { OAPost } from '../../../lib'
import { keyGenerator } from '../../../lib/key'
import { getAllDefinitions } from '../../../lib/definitions'

describe('@OAPost', () => {
  class Action {
    @OAPost('/subscriber')
    handle(): void {
      return
    }
  }

  it('Defining Post', () => {
    const key = keyGenerator(Action.name, 'handle')
    const definitions = getAllDefinitions()

    expect(definitions.path[key].path).toEqual('/subscriber')
    expect(definitions.path[key].method).toEqual('post')
  })
})
