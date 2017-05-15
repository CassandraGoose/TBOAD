exports.up = function(knex) {
  return knex.schema
    .createTable('message', function(table) {
      table.increments('id').primary();
      table.string('name').notNull();
      table.string('text').notNull();
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('message')
};
