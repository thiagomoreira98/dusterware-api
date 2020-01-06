'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.enu('type', ['consultant', 'consumer'], { enumName: 'user_type' }).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
