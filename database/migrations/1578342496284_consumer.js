'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ConsumerSchema extends Schema {
  up () {
    this.create('consumers', (table) => {
      table.increments()
      table.string('name', 200).notNullable()
      table.bigInteger('phone_number')
      table.string('address', 200)
      table.string('house_number', 10)
      table.string('neighborhood', 100)
      table.integer('zip_code')
      table.string('state', 100)
      table.string('country', 100)
      table.timestamps()
    })
  }

  down () {
    this.drop('consumers')
  }
}

module.exports = ConsumerSchema
