
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.text('email').notNullable();
    table.text('first_name').notNullable();
    table.text('last_name').notNullable();
    table.text('password_hash').notNullable();
    table.text('password_hash_random_salt').notNullable();
    table.boolean('password_reset_active').defaultTo(false).notNullable();
    table.text('password_reset_hash').notNullable();
    table.datetime('password_reset_time').notNullable();
    table.datetime('created_at').notNullable();
    table.datetime('updated_at').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
