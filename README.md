```typescript
// Path
@OAPath('/subscriber', 'post')
@OAPath('/subscriber/{uuid}', 'get')
@OAPath('/subscriber/{uuid}', 'put')
@OAPath('/subscriber/{uuid}', 'delete')

// Path Method
@OAPost('/subscriber')
@OAPut('/subscriber/{uuid}')
@OAGet('/subscriber/{uuid}')
@OADelete('/subscriber/{uuid}')

// Path Parameter
@OAParameter({
  in: 'path',
  name: 'uuid',
  type: 'string',
  format: 'uuid',
  required: true,
  description: 'description',
})

// Tags
@OATags('subscriber')
@OATags('subscriber', 'global')

// Summary
@OASummary('Subscriber Create')

// Description
@OADescription('Subscriber Create Endpoint')

// OperationId
@OAOperationId('subscriberCreate')

// Request
@OARequest({
  body: SubscriberCreateInput
})

// Request with accept content type
@OARequest({
  body: SubscriberCreateInput,
  contentType: 'application/json'
})

@OARequest({
  body: SubscriberCreateInput,
  desciption: 'Create a new Subscriber'
})

// Response
@OAResponse({
  body: SubscriberFullOutput,
  statusCode: 200,
  contentType: 'application/json',
  description: 'description'
})

// Response with status code 200
@OAOkResponse({ body: SubscriberFullOutput })

// Response with status code 201
@OACreatedResponse({ body: SubscriberFullOutput })

// Response with status code 400
@OABadRequestResponse({ body: BadRequestOutput })

// Response with status code 401
@OAUnauthorizedResponse({ body: UnauthorizedOutput })

// Response with status code 403
@OAForbiddenResponse({ body: ForbiddenOutput })
@OAAccessDeniedResponse({ body: AccessDeniedOutput })

// Response with status code 500
@OAServerErrorResponse({ body: ServerErrorOutput })

// Property
@OAProperty()

// Property Int
@OAProperty({
  required: true,
  type: 'integer',
  description: 'Subscriber Id',
  format: 'int64',
  example: 1,
})

@OAPropertyInteger({
  required: true,
  description: 'Subscriber Id',
  format: 'int64',
  example: 1,
})

// Property Enum
@OAProperty({
  required: true,
  type: 'enum',
  enum: ['accepted', 'rejected'],
  description: 'Subscriber Status'
})

@OAPropertyEnum([ 'accepted', 'rejected' ], { required: true })

// Property OneOf
@OAProperty({
  required: true,
  oneOf: [
    { type: 'integer', format: 'int64', example: 1 },
    { type: 'string', format: 'uuid', example: '123e4567-e89b-12d3-a456-426614174000' }
  ],
  description: 'Subscriber Id'
})
@OAPropertyOneOf([
  { type: 'integer', format: 'int64', example: 1 },
  { type: 'string', format: 'uuid', example: '123e4567-e89b-12d3-a456-426614174000' }
], {
  required: true,
  description: 'Subscriber Id'
})

// Property OneOf
@OAProperty({
  required: true,
  oneOf: [
    AddresCreateInput,
    AddresUpdateInput
  ]
})

@OAPropertyOneOf([
  AddresCreateInput,
  AddresUpdateInput
], {
  required: true,
})

// Property OneOf
@OAProperty({
  required: true,
  oneOf: [
    AddresCreateInput,
    { type: 'string', format: 'uuid', example: '123e4567-e89b-12d3-a456-426614174000' }
  ]
})

// Property AnyOf
@OAProperty({
  required: true,
  anyOf: [
    AddresCreateInput,
    AddresUpdateInput
  ]
})
```
