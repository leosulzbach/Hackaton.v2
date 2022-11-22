import Ingresso from '../models/Ingresso'
import Categoria from '../models/Categoria';
import Tipo from '../models/Tipos';
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
 
import express, { Express, NextFunction, Request, response, Response } from 'express';

export class IngressosController {

  index = async (req: Request, res: Response) => {
    const params: any= req.query;

    const ingresso = await Ingresso.findAll({
  
      include:[{
        model: Tipo,
        required: false,
        attributes: ['descricao', 'percentual_ingresso']
      },
      {
        model: Categoria,
        required: false,
        attributes: ['descricao', 'preco']
      }]
    });
    res.json(ingresso);
  }

  create = async (req: Request, res: Response) => {
    try {
      const data: any = await this._validateData(req.body);
      const ingresso = await Ingresso.create(data);
      res.json(ingresso);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  show = async (req: Request, res: Response) => {
    const ingresso = await Ingresso.findByPk(req.params.ingressoId);
    res.json(ingresso);
  }

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id : any = req.params.ingressoId;
      const data = await this._validateData(req.body, id);
      await Ingresso.update(data, {
        where: {
          id: id
        }
      });

      res.json(await Ingresso.findByPk(id));
    } catch (error) {
      res.status(400).json({error});
    }
  }

  delete = async (req: Request, res: Response, next: NextFunction) => {
    await Ingresso.destroy({
      where: {
        id: req.params.ingressoId
      }
    });
    res.json({});
  }


  _validateData = async (data: any, id?: any) => {
    const attributes = ['data', 'valor', 'CategoriaId', 'TipoId'];
    const ingresso : any = {};
    for (const attribute of attributes) {
      if (! data[attribute]){
        throw (`The attribute "${attribute}" is required.`);
      }
      ingresso[attribute] = data[attribute];
    }
    return ingresso;
  }

  _sendMail = async (req: Request, res: Response, next: NextFunction,) => {

    const data : any = await Ingresso.findByPk(req.params.ingressoId);
   
    let email_user = 'luis.kochenborger@universo.univates.br';
    let email_password = 'Xjk011-2';
    let email_to = req.params.email;
    let email_subject = 'Compra confirmada!';
    let email_content = `Um novo ingresso foi comprado`;

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: email_user,
        pass: email_password
      }
    });

    var mailOptions = {
      from: email_user,
      to: email_to,
      subject: email_subject,
      text: email_content
    }

    transporter.sendMail(mailOptions, (error: Error | null, info: SMTPTransport.SentMessageInfo) => {
      if (error) {
        console.log('Erro on sendMail:' + error);
      } else {
        console.log('Mail sent!');
      }
    });
  }


}

export default new IngressosController();
