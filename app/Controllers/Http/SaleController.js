'use strict'

const Sale = use('App/Models/Sale')

class SaleController {
  async index ({ params, request }) {
    const { page = 1 } = request.get()
    const sales = await Sale.query().paginate(page)
    return sales
  }

  async store ({ request, response }) {
    const data = request.only([
      'tupperware_id',
      'consumer_id',
      'payment_method', 
      'quantity_installments',
      'description',
      'consumer_name'
    ])

    if(!data.consumer_id && !data.consumer_name) {
      return response.status(400).send({ message: 'Informe o nome do consumidor' })
    }

    const sale = await Sale.create(data)
    return sale
  }

  async show ({ params }) {
    const sale = await Sale.findOrFail(params.id)
    return sale
  }

  async update ({ params, request, response }) {
    const sale = await Sale.findOrFail(params.id)
    const data = request.only([
      'tupperware_id',
      'consumer_id',
      'payment_method', 
      'quantity_installments',
      'description',
      'consumer_name'
    ])

    if(!data.consumer_id && !data.consumer_name) {
      return response.status(400).send({ message: 'Informe o nome do consumidor' })
    }

    sale.merge(data)
    await sale.save()
    return sale
  }
}

module.exports = SaleController
