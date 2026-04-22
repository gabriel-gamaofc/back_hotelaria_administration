import {Router} from 'express';

import {listarClientes, novoCliente} from '../../controllers/cliente/clienteControllers.mjs'

const   router = Router();


router.get('/', listarClientes);
router.post('/', novoCliente);

export default router