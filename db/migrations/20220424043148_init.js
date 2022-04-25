/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('covidcases', table => {
        table.increments('id');
        table.string('location');
        table.date('date');
        table.string('variant');
        table.integer('num_sequences');
        table.double('perc_sequences');
        table.integer('num_sequences_total');
        table.timestamps(true, true);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('covidcases');
};
