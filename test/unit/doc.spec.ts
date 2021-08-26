import { OpenApi } from '../../lib'

describe('OpenApi', () => {
  it('Defining Doc', () => {
    const openApi = new OpenApi('3.0.2')

    openApi
      .title('Eclesi API')
      .description('Eclesi is a church plataform to creates better relationship between members and churchs.')
      .version('1.0.0')
      .addTag({ name: 'members' })
      .addTag({ name: 'churchs' })
      .addTag({ name: 'groups' })
      .addServer('http://localhost:3000')

    const doc = openApi.build()
    console.log(doc)
  })
})
