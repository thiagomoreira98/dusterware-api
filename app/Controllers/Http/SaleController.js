'use strict'

const Sale = use('App/Models/Sale')

class SaleController {
  async index ({ params, request }) {
    const { page = 1 } = request.get()
    const sales = await Sale.query().paginate(page)
    return sales
  }

  async store ({ request }) {
    const data = request.only([
      'tupperware_id',
      'consumer_id',
      'payment_method', 
      'quantity_installments',
      'description',
      'consumer_name'
    ])
    const sale = await Sale.create(data)
    return sale
  }

  async show ({ params }) {
    const sale = await Sale.findOrFail(params.id)
    return sale
  }

  async update ({ params, request }) {
    const sale = await Sale.findOrFail(params.id)
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

    sale.merge(data)
    await sale.save()
    return sale
  }

  async destroy ({ params }) {
    const sale = await Sale.findOrFail(params.id)
    sale.delete()
  }
}

module.exports = SaleController
