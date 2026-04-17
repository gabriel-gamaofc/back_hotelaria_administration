import {Router} from 'express';

import {listagemVendas} from '../../controllers/vendas/vendasController.mjs'

const   router = Router();


router.get('/', listagemVendas);

export default router