exports.up = async function(knex) {
	await knex.schema.createTable("items", (table) => {
		table.increments()
		table.string("location").notNull()
		table.string("name").notNull()
    table.text("description").notNull()
    table.float("price").notNull()
    table
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
}

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists("items")
}
