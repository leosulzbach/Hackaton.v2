import express, {Express, Request, Response, NextFunction} from 'express';
import Tipo from '../models/Tipos';

export class TiposController  {

  index = async (req: Request, res: Response, next: NextFunction) => {
    const tipo = await Tipo.findAll();
    res.json(tipo);
  }

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this._validateData(req.body);
      const tipo = await Tipo.create(data);
      res.json(tipo);
    } catch (error) {
      res.status(400).json({error});
    }
  }

  show = async (req: Request, res: Response, next: NextFunction) => {
    const tipo = await Tipo.findByPk(req.params.tipoId);
    res.json(tipo);
  }

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id : any = req.params.tipoId;
      const data = await this._validateData(req.body, id);
      await Tipo.update(data, {
        where: {
          id: id
        }
      });

      res.json(await Tipo.findByPk(id));
    } catch (error) {
      res.status(400).json({error});
    }
  }

  delete = async (req: Request, res: Response, next: NextFunction) => {
    await Tipo.destroy({
      where: {
        id: req.params.tipoId
      }
    });
    res.json({});
  }

  _validateData = async (data: any, id?: any) => {
    const attributes = ['descricao', 'percentual_ingresso'];
    const tipos : any = {};
    for (const attribute of attributes) {
      if (! data[attribute]){
        throw (`The attribute "${attribute}" is required.`);
      }
      tipos[attribute] = data[attribute];
    }
    return tipos;
  }
}

export default new TiposController();
