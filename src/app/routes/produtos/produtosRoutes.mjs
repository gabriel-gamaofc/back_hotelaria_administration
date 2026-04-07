import {Router} from 'express';

import {listagemProdutos} from '../../controllers/produtos/produtosControllers.mjs'

const   router = Router();


router.get('/', listagemProdutos);

export default router