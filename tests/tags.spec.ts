import { OATags } from '../src'
import { keyGenerator } from '../src/key'
import { getAllDefinitions } from '../src/definitions'

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
