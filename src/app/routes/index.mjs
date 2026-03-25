import { Router } from 'express';

import healthRoutes from './exemplo/HealthServerRoutes.mjs';
import baseRoutes from './exemplo/baseRoutes.mjs';

const router = Router();

// agrupamento de rotas
router.use('/', baseRoutes);
router.use('/', healthRoutes);

// exemplo futuro:
// router.use('/usuarios', usuariosRoutes);
// router.use('/auth', authRoutes);

export default router;