import Categoria from '../models/Categoria';
 
import express, { Express, NextFunction, Request, response, Response } from 'express';

export class CategoriasController {

  index = async (req: Request, res: Response) => {
    const params: any= req.query;
    const where: any = {};
  
    const categoria = await Categoria.findAll();
    res.json(categoria);
  }

  create = async (req: Request, res: Response) => {
    try {
      const data: any = await this._validateData(req.body, req.params.categoriaId );
      const categoria = await Categoria.create(data);
      res.json(categoria);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  show = async (req: Request, res: Response) => {
    const tarefa = await Categoria.findByPk(req.params.categoriaId);
    res.json(tarefa);
  }

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id : any = req.params.categoriaId;
      const data = await this._validateData(req.body, id);
      await Categoria.update(data, {
        where: {
          id: id
        }
      });

      res.json(await Categoria.findByPk(id));
    } catch (error) {
      res.status(400).json({error});
    }
  }

  delete = async (req: Request, res: Response, next: NextFunction) => {
    await Categoria.destroy({
      where: {
        id: req.params.categoriaId
      }
    });
    res.json({});
  }


  _validateData = async (data: any, id?: any) => {
    const attributes = ['preco', 'descricao'];
    const categoria : any = {};
    for (const attribute of attributes) {
      if (! data[attribute]){
        throw (`The attribute "${attribute}" is required.`);
      }
      categoria[attribute] = data[attribute];
    }
    return categoria;
  }

}

export default new CategoriasController();
