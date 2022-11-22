import cors from 'cors';
import express, { } from 'express';
import tipos from './tipos';
import categorias from './categorias';
import ingressos from './ingressos';

const router = express.Router();

router.use(cors());

router.use(ingressos);
router.use(categorias);
router.use(tipos);

export default router;