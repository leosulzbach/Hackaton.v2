import { useState, useEffect, FormEvent } from "react";
import { Header } from "../components/Header";
import axios from 'axios';
import { Button, ButtonBack, ButtonPDF, ButtonSVG, ButtonTransacoes } from "../components/Button";
import { Link } from "react-router-dom";
import { DivButtons, DivContainer, DivContainerHeader, DivFooter, Input, ItemsFormContainer } from "./System.styles";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { ModalTipo } from "../components/modal/ModalTipo";
import { Select } from "../components/Select";
import { IngressosCard } from "../components/cards/IngressoCard";
import { Categorium, Register } from "./Register";
const ENDPOINT = "http://localhost:3002";

export interface LastSales {
  id: number;
  Tipo: Register;
  Categorium: Categorium;
  CategoriumId: number;
  TipoId: number;
  value: number;
  data: string;
}

export interface ModalGerenciador {
  closeModal?: Function;
  data?: LastSales
  setCloseModal?: Function;
}
export function LastSales({ data }: ModalGerenciador) {
  const [closeModal, setCloseModal] = useState(false);
  const [id, setId] = useState(data?.id || "")
  const [TipoId, setTipoId] = useState(data?.TipoId || "");
  const [valor, setValor] = useState(data?.value || "");
  const [tipo, setTipo] = useState([]);
  const [Categoria, setCategoria] = useState([]);
  const [CategoriaId, setCategoriaId] = useState(data?.CategoriumId || "");
  const [sales, setSales] = useState<LastSales[]>([]);
  const [filterList, setFilterList] = useState("");

  useEffect(() => {
    axios.get<LastSales[]>('http://localhost:3002/ingressos').then((response) => {
      setSales(response.data);
    });
  }, [])

  // const filter = Confirm.filter((tarefa) => tarefa.descricao.toLocaleLowerCase().includes(filterList.toLocaleLowerCase()) || tarefa.data_criacao.toLocaleLowerCase().startsWith(filterList.toLocaleLowerCase()) || tarefa.data_vencimento.toLocaleLowerCase().includes(filterList.toLocaleLowerCase()) || tarefa.prioridade.toLocaleLowerCase().includes(filterList.toLocaleLowerCase()) || tarefa.toString().includes(filterList.toLocaleLowerCase()));


  // const showSwal = () => {
  //   setCloseModal(false);
  //   MySwal.fire({
  //     title: <strong>Criar Tarefa</strong>,
  //     html: <ModalGerenciador closeModal={MySwal.close} setCloseModal={setCloseModal} />,
  //     showConfirmButton: false,
  //   }).then(() => setCloseModal(true));
  // };

  const generatePDF = () => {
    window.open(`${ENDPOINT}/Confirm/relatorio/pdf`)
  }

  return (
    <>
      <Header />
      <DivContainer>
        <h2>Últimos Ingressos</h2>
        <br />
        <br />
        <br />
        <DivContainerHeader>
        <DivContainer>
        {sales.map((ingressos) => {
          return (
            <IngressosCard data={ingressos} setCloseModal={setCloseModal} />
          )
        })
        }
        </DivContainer>
        </DivContainerHeader>
        </DivContainer>
        <DivButtons>
          <Link to={'/'}><ButtonTransacoes label={"Voltar"}></ButtonTransacoes></Link>
        </DivButtons>
    </>
  )
}