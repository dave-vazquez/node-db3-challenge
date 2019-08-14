const db = require('../data/db-config.js');

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
  update,
  remove
};

function find() {
  return db('schemes');
}

function findById(id) {
  return db('schemes')
    .where({ id })
    .first();
}

function findStep(id) {
  return db('steps')
    .where({ id })
    .first();
}

function findSteps(scheme_id) {
  return db('steps as st')
    .join('schemes as sch', 'st.scheme_id', 'sch.id')
    .select('st.id', 'sch.scheme_name', 'st.step_number', 'st.instructions')
    .where({ scheme_id })
    .orderBy('step_number', 'asc');
}

async function add(scheme) {
  const [id] = await db('schemes').insert(scheme);

  return findById(id);
}

async function addStep(step, scheme_id) {
  const [id] = await db('steps').insert({ ...step, scheme_id });

  return findStep(id);
}

async function update(changes, id) {
  await db('schemes')
    .where({ id })
    .update(changes);

  return findById(id);
}

async function remove(id) {
  const scheme = await findById(id);

  await db('schemes')
    .where({ id })
    .del();

  return scheme;
}
