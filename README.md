```typescript
@OAPath('/subscriber', 'post')
@OAPath('/subscriber/{uuid}', 'get')
@OAPath('/subscriber/{uuid}', 'put')
@OAPath('/subscriber/{uuid}', 'delete')
@OAPost('/subscriber')
@OAPut('/subscriber/{uuid}')
@OAGet('/subscriber/{uuid}')
@OADelete('/subscriber/{uuid}')
@OATags(['subscriber'])
@OASummary('Subscriber Create')
@OADescription('Subscriber Create Endpoint')
@OAOperationId('subscriberCreate')
@OARequestJsonBody(SubscriberCreateInput)
@OARequestXmlBody(SubscriberCreateInput)
@OAResponseJsonBody(SubscriberFullOutput)
@OAResponseXmlBody(SubscriberFullOutput)
@OASchema()
@OAParameter({
  name: '',
  in: 'path',
  description: 'description',
  required: true,
  type: 'string',
})
@OAParameter({
  name: '',
  in: 'query',
  description: 'description',
  required: true,
  type: 'int',
  format: 'int64',
})
@OAResponse({
  status: 200,
  description: 'description'
})
@OAResponse({
  status: 500,
  description: 'Internal Server Error',
  body: InternalServerErrorOutput
})
@OAProperty({
  required: true,
  type: 'int',
  description: 'int',
  format: 'int64',
  example: 1,
  enum: ['available', 'pending', 'sold']
})
```
