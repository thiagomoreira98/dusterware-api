'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PictureSchema extends Schema {
  up () {
    this.create('pictures', (table) => {
      table.increments()
      table.integer('tupperware_id').unsigned().references('id').inTable('tupperwares')
      table.string('name', 300).notNullable()
      table.string('encrypted_name', 200).notNullable()
      table.string('path_url', 300).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('pictures')
  }
}

module.exports = PictureSchema
