import { OAOperationId } from '../../../lib'
import { keyGenerator } from '../../../lib/key'
import { getAllDefinitions } from '../../../lib/definitions'

describe('@OAOperationId', () => {
  class Action {
    @OAOperationId('create')
    handle(): void {
      return
    }
  }

  const key = keyGenerator(Action.name, 'handle')

  it('Defining OperationId', () => {
    expect(getAllDefinitions().operationId[key]).toEqual('create')
  })
})
