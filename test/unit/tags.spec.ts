import { OATags } from '../../lib'
import { keyGenerator } from '../../lib/key'
import { getAllDefinitions } from '../../lib/definitions'

describe('@OATags', () => {
  class Action {
    @OATags(['subscriber', 'global'])
    handle(): void {
      return
    }
  }

  const key = keyGenerator(Action.name, 'handle')

  it('Defining Tags', () => {
    expect(getAllDefinitions().tags[key].tags).toEqual(['subscriber', 'global'])
  })
})
