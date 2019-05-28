// implement changes to the schema
exports.up = function(knex, Promise) {
  return knex.schema.createTable('roles', tbl => {
      // each table needs primary key
      // we'll call it id, integer, autoincrement
      tbl.increments();

      tbl.string('name', 128).notNullable().unique();
      tbl.timestamps(true, true); // created_at and updated_at
  }) 
};


// undo the changes
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('roles');
};
