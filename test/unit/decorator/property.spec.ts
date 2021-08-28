import { OAProperty } from '../../../lib'
import { getAllDefinitions } from '../../../lib/definitions'

describe('@OAProperty', () => {

  it('Defining OperationId', () => {

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
        type: '#/components/schemas/AddressCreateInput',
      }
    })
  })
})
