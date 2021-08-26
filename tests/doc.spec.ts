import { OpenApiDoc } from '../src'

describe('OpenApiDoc', () => {

  it('Defining Doc', () => {
    const openApiDoc = new OpenApiDoc('3.0.2')

    openApiDoc.title('Eclesi API')
      .description('Eclesi is a church plataform to creates better relationship between members and churchs.')
      .version('1.0.0')
      .addTag({ name: 'members' })
      .addTag({ name: 'churchs' })
      .addTag({ name: 'groups' })
      .addServer('http://localhost:3000')

    const doc = openApiDoc.build()

    expect(openApiDoc.build()).toEqual({
      openapi: '3.0.2',
      info: {
        title: 'Eclesi API',
        description: 'Eclesi is a church plataform to creates better relationship between members and churchs.',
        version: '1.0.0'
      },
      tags: [ { name: 'members' }, { name: 'churchs' }, { name: 'groups' } ],
      servers: [ 'http://localhost:3000' ]
    })
  })
})
