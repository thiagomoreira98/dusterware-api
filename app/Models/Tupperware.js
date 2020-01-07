'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tupperware extends Model {

  pictures () {
    return this.hasMany('App/Models/Picture')
  }
}

module.exports = Tupperware
