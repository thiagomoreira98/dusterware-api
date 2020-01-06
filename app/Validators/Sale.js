'use strict'

const Antl = use('Antl')

class Sale {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      payment_method: 'required',
      quantity_installments: 'required'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = Sale