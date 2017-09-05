
exports.up = function(knex, Promise) {
  return knex.schema.createTable('epl_club_data', function(table){
      table.string('key').notNullable().unique().primary();
      table.string('name').notNullable().unique();
      table.string('code').notNullable();
  });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('epl_club_data');
};
