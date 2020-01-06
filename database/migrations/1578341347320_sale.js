'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SaleSchema extends Schema {
  up () {
    this.create('sales', (table) => {
      table.increments()
      table.integer('tupperware_id').unsigned().references('id').inTable('tupperwares')
      table.integer('consumer_id').unsigned().references('id').inTable('consumers')
      table.enum('payment_method', ['cash', 'credit_card', 'debit_card', 'spun']).notNullable()
      table.integer('quantity_installments').notNullable()
      table.string('description', 500)
      table.string('consumer_name', 200)
      table.timestamps()
    })
  }

  down () {
    this.drop('sales')
  }
}

module.exports = SaleSchema
