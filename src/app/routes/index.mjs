import { Router } from 'express';

import healthRoutes from './exemplo/HealthServerRoutes.mjs';
import baseRoutes from './exemplo/baseRoutes.mjs';
import produtosRoutes from './produtos/produtosRoutes.mjs';
import vendasRoutes from './vendas/vendasRoutes.mjs';
import clientesRoutes from './clientes/clientesRoutes.mjs'
import categoriasRoutes from './categorias/categoriasRoutes.mjs';
const router = Router();

// agrupamento de rotas
router.use('/', baseRoutes);
router.use('/', healthRoutes);

// exemplo futuro:
router.use('/produtos', produtosRoutes);
router.use('/vendas', vendasRoutes);
router.use('/clientes', clientesRoutes);
router.use('/categorias', categoriasRoutes);

export default router;