import {Router} from 'express';

import {listagemVendas, adicionarVendas} from '../../controllers/vendas/vendasController.mjs'

const   router = Router();

router.get('/', listagemVendas);
router.post('/add', adicionarVendas);

export default router