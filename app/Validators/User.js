'use strict'

const Antl = use('Antl')

class User {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      email: 'required|email|confirmed|unique:users',
      password: 'required|confirmed',
      type: 'required'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = User