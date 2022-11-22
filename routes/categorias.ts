import express, {Express, Request, Response, NextFunction} from 'express';
import Router from 'express'
const router = Router();
import Categoria from '../models/Categoria';
import CategoriasController from '../controllers/CategoriasController';

const validaCategoriaId = async (req: Request, res: Response, next: NextFunction) => {
  const categoria = await Categoria.findByPk(req.params.categoriaId);
  if (!categoria) {
    return res.status(404).json({ error: 'Categoria não encontrada!' });
  }
  next();
}

router.get('/categorias', CategoriasController.index);

router.post('/categorias', CategoriasController.create);

router.put('/categorias/:categoriaId', validaCategoriaId, CategoriasController.update);

router.delete('/categorias/:categoriaId', validaCategoriaId, CategoriasController.delete); 

// router.get('/email/:email', CategoriasController._sendMail);

export default router;