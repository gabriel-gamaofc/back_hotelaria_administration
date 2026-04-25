import {Router} from 'express';

import {listagemProdutos,novoProduto} from '../../controllers/produtos/produtosControllers.mjs'

const   router = Router();

router.post('/', novoProduto);
router.get('/', listagemProdutos);

export default router