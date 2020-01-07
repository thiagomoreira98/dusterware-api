'use strict'

const { test, trait } = use('Test/Suite')('Tupperware')
const Tupperware = use('App/Models/Tupperware')

trait('Test/ApiClient')

test('insert tupperware must return status code 200', async ({ client }) => {

  const tupper = {
    'name': 'tupper 1',
    'quantity': 1,
    'costPrice': 120.45,
    'description': 'first tupperware in stock'
  };

  const response = await client
    .post('/tupperware')
    .send(tupper)
    .end()

  if(response.error)
    console.log(response.error)

  response.assertStatus(200)
  response.assertJSONSubset({ id: 1, ...tupper })
})

test('list tupperwares must return status code 200', async ({ client }) => {
  
  const response = await client
    .get('/tupperware')
    .end()

  if(response.error)
    console.log(response.error)

  response.assertStatus(200)
})

test('show tupperware must return status code 200 and have id == 1', async ({ client }) => {
  
  const id = 1;

  const response = await client
    .get(`/tupperware/${id}`)
    .end()

  if(response.error)
    console.log(response.error)

  response.assertStatus(200)
  response.assertJSONSubset({ id, pictures: [] })
})

test('update tupperware must return status code 200 and have changed their properties', async ({ client }) => {
  
  let tupper = {
    'name': 'tupper 2',
    'quantity': 1,
    'costPrice': 120.45,
    'description': 'another tupperware'
  };

  const { id } = await Tupperware.create(tupper)

  tupper.name = 'tupper updated'
  tupper.quantity = 2

  const response = await client
    .put(`/tupperware/${id}`)
    .send(tupper)
    .end()

  if(response.error)
    console.log(response.error)

  response.assertStatus(200)
  response.assertJSONSubset({ name: 'tupper updated', quantity: 2 })
})

test('destroy tupperware must return status code 200', async ({ client }) => {
  
  const id = 1

  const response = await client
    .delete(`/tupperware/${id}`)
    .end()

  if(response.error)
    console.log(response.error)

  response.assertStatus(204)
})