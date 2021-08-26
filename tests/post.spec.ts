import { OAPost } from '../src'
import { keyGenerator } from '../src/key'
import { getAllDefinitions } from '../src/definitions'

describe('@OAPost', () => {

  class Action {

    @OAPost('/subscriber')
    handle(): void {
      return
    }
  }

  it('Defining Path', () => {
    const key = keyGenerator(Action.name, 'handle')
    const definitions = getAllDefinitions()

    expect(definitions.path[key].path).toEqual('/subscriber')
    expect(definitions.path[key].method).toEqual('post')
  })
})
