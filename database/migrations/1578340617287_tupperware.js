'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TupperwareSchema extends Schema {
  up () {
    this.create('tupperwares', (table) => {
      table.increments()
      table.string('name', 300).notNullable()
      table.integer('quantity').notNullable()
      table.decimal('costPrice', 8, 2).notNullable()
      table.string('description', 500).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tupperwares')
  }
}

module.exports = TupperwareSchema
