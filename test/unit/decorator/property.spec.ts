import { OAProperty } from '../../../lib'
import { keyGenerator } from '../../../lib/key'
import { getAllDefinitions } from '../../../lib/definitions'

describe('@OAProperty', () => {
  class AddressCreateInput {
    @OAProperty()
    public street: string

    @OAProperty()
    public number: number
  }

  class SubscriberCreateInput {
    @OAProperty()
    public firstName: string

    @OAProperty()
    public lastName: string

    @OAProperty()
    public email: string

    @OAProperty()
    public address: AddressCreateInput
  }

  const key = keyGenerator(SubscriberCreateInput.name)

  it('Defining OperationId', () => {
    expect(getAllDefinitions().property[AddressCreateInput.name]).toEqual({
      street: {
        type: 'string',
      },
      number: {
        type: 'integer',
      }
    })

    expect(getAllDefinitions().property[SubscriberCreateInput.name]).toEqual({
      firstName: {
        type: 'string',
      },
      lastName: {
        type: 'string',
      },
      email: {
        type: 'string',
      },
      address: {
        type: 'AddressCreateInput',
      }
    })
  })
})
