import { Router } from 'express';

import healthRoutes from './exemplo/HealthServerRoutes.mjs';
import baseRoutes from './exemplo/baseRoutes.mjs';
import produtosRoutes from './produtos/produtosRoutes.mjs';

const router = Router();

// agrupamento de rotas
router.use('/', baseRoutes);
router.use('/', healthRoutes);

// exemplo futuro:
router.use('/produtos', produtosRoutes);


export default router;