'use strict'

const Consumer = use('App/Models/Consumer')
class ConsumerController {
  async index ({ params, request }) {
    const { page = 1 } = request.get()
    const consumers = await Consumer.query().paginate(page)
    return consumers
  }

  async store ({ request }) {
    const data = request.only([
      'name',
      'phone_number',
      'address', 
      'house_number',
      'neighborhood',
      'zip_code',
      'state',
      'country'
    ])
    const consumer = await Consumer.create(data)
    return consumer
  }

  async show ({ params }) {
    const consumer = await Consumer.findOrFail(params.id)
    return consumer
  }

  async update ({ params, request }) {
    const consumer = await Consumer.findOrFail(params.id)
    const data = request.only([
      'name',
      'phone_number',
      'address', 
      'house_number',
      'neighborhood',
      'zip_code',
      'state',
      'country'
    ])
    consumer.merge(data)
    await consumer.save()
    return consumer
  }

  async destroy ({ params }) {
    const consumer = await Consumer.findOrFail(params.id)
    consumer.delete()
  }
}

module.exports = ConsumerController
