const {knex} = require('knex');

const createOnUpdateTrigger = (tableName: string) => `
  CREATE TRIGGER "${tableName}_updated_at"
  BEFORE UPDATE ON "${tableName}"
  FOR EACH ROW
  EXECUTE PROCEDURE on_update_timestamp();`;

const deleteOnUpdateTrigger = (tableName: string) => `
  DROP TRIGGER "${tableName}_updated_at" ON "${tableName}";
`;

const defaultHistoryFields = (knex: Knex, table: Knex.CreateTableBuilder): void => {
	table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
	table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
	table.timestamp('deleted_at');
};

module.exports = {
	createOnUpdateTrigger,
	deleteOnUpdateTrigger,
	defaultHistoryFields
}
