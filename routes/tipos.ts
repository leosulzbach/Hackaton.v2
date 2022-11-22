import express, {Express, Request, Response, NextFunction} from 'express';
import Router from 'express'
const router = Router();
import Tipo from '../models/Tipos';
import TiposController from '../controllers/TiposController';

const validateTipoId = async (req: Request, res: Response, next: NextFunction) => {
  const tipo = await Tipo.findByPk(req.params.tipoId);
  if (!tipo) {
    return res.status(404).json({ error: 'Tipo não encontrado!' });
  }
  next();
}

router.get('/tipos', TiposController.index);

router.post('/tipos', TiposController.create);

router.put('/tipos/:tipoId', validateTipoId, TiposController.update);

router.delete('/tipos/:tipoId', validateTipoId, TiposController.delete);

export default router;
