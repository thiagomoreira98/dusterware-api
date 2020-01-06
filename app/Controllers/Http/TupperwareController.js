'use strict'

const Tupperware = use('App/Models/Tupperware')

class TupperwareController {
  async index ({ params, request }) {
    const { page = 1 } = request.get()
    const tupperwares = await Tupperware.query().paginate(page)
    return tupperwares
  }

  async store ({ request }) {
    const data = request.only([
      'name',
      'quantity',
      'costPrice', 
      'description'
    ])
    const tupperware = await Tupperware.create(data)
    return tupperware
  }

  async show ({ params }) {
    const tupperware = await Tupperware.findOrFail(params.id)
    return tupperware
  }

  async update ({ params, request }) {
    const tupperware = await Tupperware.findOrFail(params.id)
    const data = request.only([
      'name',
      'quantity',
      'costPrice', 
      'description'
    ])

    tupperware.merge(data)
    await tupperware.save()
    return tupperware
  }

  async destroy ({ params }) {
    const tupperware = await Tupperware.findOrFail(params.id)
    tupperware.delete()
  }
}

module.exports = TupperwareController
