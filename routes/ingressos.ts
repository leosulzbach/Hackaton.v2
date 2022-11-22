import express, {Express, Request, Response, NextFunction} from 'express';
import Router from 'express'
const router = Router();
import Ingresso from '../models/Ingresso';
import IngressosController from '../controllers/IngressosController';

const validaIngressoId = async (req: Request, res: Response, next: NextFunction) => {
  const ingresso = await Ingresso.findByPk(req.params.ingressoId);
  if (!ingresso) {
    return res.status(404).json({ error: 'Ingresso não encontrado!' });
  }
  next();
}

router.get('/ingressos', IngressosController.index);

router.post('/ingressos', IngressosController.create);

router.put('/ingressos/:ingressoId', validaIngressoId, IngressosController.update);

router.delete('/ingressos/:ingressoId', validaIngressoId, IngressosController.delete); 

router.get('/email/:email', IngressosController._sendMail);

export default router;