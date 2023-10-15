import { getMultiple, create as _create, update as _update, remove as _remove } from '../services/programmingLanguages.service.js';

async function get(req, res, next) {
  try {
      res.json(await getMultiple(req.query.page));
  } catch (err) {
      console.error(`Error while getting programming languages`, err.message);
      next(err);
  }
}

async function create(req, res, next) {
  try {
    res.json(await _create(req.body));
  } catch (err) {
    console.error(`Error while creating programming language`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    res.json(await _update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating programming language`, err.message);
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    res.json(await _remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting programming language`, err.message);
    next(err);
  }
}

export {
  get,
  create,
  update,
  remove
};