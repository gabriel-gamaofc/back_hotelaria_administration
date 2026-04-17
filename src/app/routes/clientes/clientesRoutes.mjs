import {Router} from 'express';

import {listarClientes} from '../../controllers/cliente/clienteControllers.mjs'

const   router = Router();


router.get('/', listarClientes);

export default router