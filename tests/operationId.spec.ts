import { OAOperationId } from '../src'
import { keyGenerator } from '../src/key'
import { getAllDefinitions } from '../src/definitions'

describe('@OAOperationId', () => {

  class Action {

    @OAOperationId('create')
    handle(): void {
      return
    }
  }

  const key = keyGenerator(Action.name, 'handle')

  it('Defining OperationId', () => {
    expect(getAllDefinitions().operationId[key].operationId).toEqual('create')
  })
})
