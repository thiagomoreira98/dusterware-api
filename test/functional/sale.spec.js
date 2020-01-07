'use strict'

const { test, trait } = use('Test/Suite')('Sale')
const Sale = use('App/Models/Sale')

trait('Test/ApiClient')

test('insert sale must return status code 200', async ({ client }) => {

  const sale = {
    'tupperware_id': 1,
    'consumer_id': 1,
    'payment_method': 'cash', 
    'quantity_installments': 1,
    'description': 'first sale',
    'consumer_name': null
  };

  const response = await client
    .post('/sale')
    .send(sale)
    .end()

  if(response.error)
    console.log(response.error)

  response.assertStatus(200)
  response.assertJSONSubset({ id: 1, ...sale })
})

test('show sale must return status code 200 and have id == 1', async ({ client }) => {
  
  const id = 1;

  const response = await client
    .get(`/sale/${id}`)
    .end()

  if(response.error)
    console.log(response.error)

  response.assertStatus(200)
  response.assertJSONSubset({ id })
})

test('update sale must return status code 200 and have changed their properties', async ({ client }) => {
  
  let sale = {
    'tupperware_id': 1,
    'consumer_id': 1,
    'payment_method': 'cash', 
    'quantity_installments': 1,
    'description': 'first sale',
    'consumer_name': null
  };

  const { id } = await Sale.create(sale)

  sale.description = 'updated at today'

  const response = await client
    .put(`/sale/${id}`)
    .send(sale)
    .end()

  if(response.error)
    console.log(response.error)

  response.assertStatus(200)
  response.assertJSONSubset({ description: 'updated at today' })
})

test('insert sale must return status code 400 when consumer is not informed', async ({ client }) => {

  const sale = {
    'tupperware_id': 1,
    'consumer_id': null,
    'payment_method': 'cash', 
    'quantity_installments': 1,
    'description': 'first sale',
    'consumer_name': null
  };

  const response = await client
    .post('/sale')
    .send(sale)
    .end()

  response.assertStatus(400)
})

test('update sale must return status code 400 when consumer is not informed', async ({ client }) => {

  const sale = {
    'id': 1,
    'tupperware_id': 1,
    'consumer_id': null,
    'payment_method': 'cash', 
    'quantity_installments': 1,
    'description': 'first sale',
    'consumer_name': null
  };

  const response = await client
    .put(`/sale/${sale.id}`)
    .send(sale)
    .end()

  response.assertStatus(400)
})

test('list sales must return status code 200', async ({ client }) => {
  
  const response = await client
    .get('/sale')
    .end()

  if(response.error)
    console.log(response.error)

  response.assertStatus(200)
})
