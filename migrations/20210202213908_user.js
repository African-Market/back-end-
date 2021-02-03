exports.up = async function(knex) {
	await knex.schema.createTable("users", (table) => {
		table.increments()
		table.string("business_name").notNull()
		table.string("email").notNull().unique()
    table.string("password").notNull()
  })
}

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists("users")
}
