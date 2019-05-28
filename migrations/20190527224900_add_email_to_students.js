
exports.up = function(knex, Promise) {
  return knex.schema.table('students', tbl => {
      tbl.string('email');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('students'), tbl => {
      tbl.dropColumn('email');
  }
};


// yarn knex migrate:rollback will undo the latest migration which would be this email for us and can check on sql