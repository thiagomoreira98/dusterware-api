'use strict'

const Antl = use('Antl')

class Tupperware {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      name: 'required',
      quantity: 'required',
      costPrice: 'required'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = Tupperware