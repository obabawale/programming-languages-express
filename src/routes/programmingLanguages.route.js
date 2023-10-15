import { Router } from 'express';
const router = Router();
import { get, create, update, remove } from '../controllers/programmingLanguages.controller.js';

/* GET programming languages. */
router.get('/', get);
  
/* POST programming language */
router.post('/', create);

/* PUT programming language */
router.put('/:id', update);

/* DELETE programming language */
router.delete('/:id', remove);

export default router;