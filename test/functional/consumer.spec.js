'use strict'

const { test, trait } = use('Test/Suite')('Consumer')
const Consumer = use('App/Models/Consumer')

trait('Test/ApiClient')

test('insert consumer must return status code 200', async ({ client }) => {

  const consumer = {
    'name': 'first consumer',
    'phone_number': 16999999999,
    'address': 'Av. Miguel S. Antonio',
    'house_number': '1800',
    'neighborhood': 'Centro',
    'zip_code': 14400470,
    'state': 'São Paulo',
    'city': 'Franca'
  };

  const response = await client
    .post('/consumer')
    .send(consumer)
    .end()

  if(response.error)
    console.log(response.error)

  response.assertStatus(200)
  response.assertJSONSubset({ id: 1, ...consumer })
})

test('list consumers must return status code 200', async ({ client }) => {
  
  const response = await client
    .get('/consumer')
    .end()

  if(response.error)
    console.log(response.error)

  response.assertStatus(200)
})


test('show consumer must return status code 200 and have id == 1', async ({ client }) => {
  
  const id = 1;

  const response = await client
    .get(`/consumer/${id}`)
    .end()

  if(response.error)
    console.log(response.error)

  response.assertStatus(200)
  response.assertJSONSubset({ id })
})

test('update consumer must return status code 200 and have changed their properties', async ({ client }) => {
  
  let consumer = {
    'name': 'first consumer',
    'phone_number': 16999999999,
    'address': 'Av. Miguel S. Antonio',
    'house_number': '1800',
    'neighborhood': 'Centro',
    'zip_code': 14400470,
    'state': 'São Paulo',
    'city': 'Franca'
  };

  const { id } = await Consumer.create(consumer)

  consumer.name = 'consumer updated'
  consumer.phone_number = 1234

  const response = await client
    .put(`/consumer/${id}`)
    .send(consumer)
    .end()

  if(response.error)
    console.log(response.error)

  response.assertStatus(200)
  response.assertJSONSubset({ name: 'consumer updated', phone_number: 1234 })
})

test('destroy consumer must return status code 200', async ({ client }) => {
  
  const id = 1

  const response = await client
    .delete(`/consumer/${id}`)
    .end()

  if(response.error)
    console.log(response.error)

  response.assertStatus(204)
})
