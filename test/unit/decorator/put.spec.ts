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

    expect(definitions.path[key]).toEqual({ path: '/subscriber/{uuid}', method: 'put' })
  })
})
