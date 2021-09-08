```typescript
@OAPath('/subscriber', 'post')
@OAPath('/subscriber/{uuid}', 'get')
@OAPath('/subscriber/{uuid}', 'put')
@OAPath('/subscriber/{uuid}', 'delete')
@OAPost('/subscriber')
@OAPut('/subscriber/{uuid}')
@OAGet('/subscriber/{uuid}')
@OADelete('/subscriber/{uuid}')
@OATags('subscriber')
@OASummary('Subscriber Create')
@OADescription('Subscriber Create Endpoint')
@OAOperationId('subscriberCreate')
@OARequestJsonBody(SubscriberCreateInput)
@OARequestXmlBody(SubscriberCreateInput)
@OAResponse({
  status: 200,
  type: SubscriberFullOutput,
  description: 'Subscriber Full Xml Output',
  contentType: 'application/json'
})
@OAResponse(200, 'Subscriber Full Xml Output', 'SubscriberFullOutput')
@OAOkResponseJson('SubscriberFullOutput', 'Status Code 200 to ')
@OACreatedResponseJson('SubscriberFullOutput', 'Subscriber Full Xml Output')
@OASchema()
@OAParameter({
  in: 'query',
  name: 'uuid',
  type: 'string',
  format: 'uuid',
  required: true,
  description: 'description',
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
