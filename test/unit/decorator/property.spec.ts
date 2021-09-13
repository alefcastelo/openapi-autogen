import { OAProperty } from '../../../lib'
import { getAllDefinitions } from '../../../lib/definitions'

describe('@OAProperty', () => {

  it('Defining OperationId', () => {

    enum Status {
      Active='active',
      Inactive='inactive'
    }

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

      @OAProperty({
        enum: Status
      })
      public status: Status

      @OAProperty({
        $ref: 'AddressCreateInput'
      })
      public shippingAddress: unknown

      @OAProperty()
      public billingAddress: AddressCreateInput
    }

    expect(getAllDefinitions().property[AddressCreateInput.name]).toEqual({
      street: {
        type: 'string',
      },
      number: {
        type: 'number',
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
      shippingAddress: {
        $ref: '#/components/schemas/AddressCreateInput',
      },
      status: {
        type: "string",
        enum:  [
          "active",
          "inactive",
        ]
      },
      billingAddress: {
        $ref: '#/components/schemas/AddressCreateInput',
      }
    })
  })
})
