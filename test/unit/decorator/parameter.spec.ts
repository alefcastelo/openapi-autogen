import { OAParameter } from '../../../lib'
import { keyGenerator } from '../../../lib/key'
import { getAllDefinitions } from '../../../lib/definitions'

describe('@OAParameter', () => {
  class Action {
    @OAParameter({
      in: 'query',
      name: 'uuid',
      type: 'string',
      format: 'uuid',
      required: true,
    })
    handle(): void {
      return
    }
  }

  const key = keyGenerator(Action.name, 'handle')

  it('Defining Tags', () => {
    expect(getAllDefinitions().parameter[key][0]).toEqual({
      in: "query",
      name: "uuid",
      required: true,
      schema: {
        type: "string",
        format: "uuid",
      }
    })
  })
})
