import {Router} from 'express';

import {listarCategorias, novoCategorias} from '../../controllers/categorias/categoriasControllers.mjs'
const   router = Router();


router.get('/', listarCategorias);
router.post('/', novoCategorias);

export default router