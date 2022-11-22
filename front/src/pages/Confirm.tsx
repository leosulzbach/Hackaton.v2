import { useState, useEffect, FormEvent } from "react";
import { Header } from "../components/Header";
import axios from 'axios';
import { Button, ButtonBack, ButtonPDF, ButtonSVG, ButtonTransacoes } from "../components/Button";
import { Link } from "react-router-dom";
import { DivButtons, DivContainer, DivContainerHeader, DivFooter, Input, ItemsFormContainer } from "./System.styles";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { ModalTipo } from "../components/modal/ModalTipo";
import { GerenciadorCard } from "../components/cards/GerenciadorCard";
import { Select } from "../components/Select";

const ENDPOINT = "http://localhost:3002";

export interface Confirm {
  id: number;
  tipo: string;
  categoria: string;
  CategoriaId: number;
  TipoId: number;
  value: number;

}

export interface ModalGerenciador {
  closeModal?: Function;
  data?: Confirm
  setCloseModal?: Function;
}
export function Confirm({ data }: ModalGerenciador) {
  const [closeModal, setCloseModal] = useState(false);
  const [id, setId] = useState(data?.id || "")
  const [TipoId, setTipoId] = useState(data?.TipoId || "");
  const [valor, setValor] = useState(data?.value || "");
  const [tipo, setTipo] = useState([]);
  const [Categoria, setCategoria] = useState([]);
  const [CategoriaId, setCategoriaId] = useState(data?.CategoriaId || "");
  const [Confirm, setConfirm] = useState<Confirm[]>([]);
  const [filterList, setFilterList] = useState("");

  useEffect(() => {
    axios.get<Confirm[]>('http://localhost:3002/tarefas').then((response) => {
      setConfirm(response.data);
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


  const MySwal = withReactContent(Swal)
  return (
    <>
      <Header />
      <DivContainer>
        <h2>Compra de Ingressos</h2>
        <br />
        <br />
        <br />
        <DivContainerHeader>
          <ItemsFormContainer>
          <label>Tipo</label>
          <input
            id="TipoId"
            value={TipoId}
            disabled={true}
            onChange={(e) => setTipoId(e.target.value)}></input>
          </ItemsFormContainer>
          <ItemsFormContainer>
          <label>Categoria</label>
          <input
            id="CategoriaId"
            value={CategoriaId}
            disabled={true}
            onChange={(e) => setTipoId(e.target.value)}></input>
          </ItemsFormContainer>
          <ItemsFormContainer>
          <label>Valor</label>
          <input
            type="text"
            id="valor"
            value={valor}
            disabled={true}
            onChange={(e) => setValor(e.target.value)}></input>
          </ItemsFormContainer>
        </DivContainerHeader>
        <DivButtons>
          <Button label={"Confirmar"}></Button>
          <Link to={'/'}><ButtonBack label={"Cancelar"}></ButtonBack></Link> 
          </DivButtons>
      </DivContainer>
      <DivFooter>
          <Link to={'/'}><ButtonTransacoes label={"Back"}></ButtonTransacoes></Link>
      </DivFooter>
    </>
  )
}