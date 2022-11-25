import { useState, useEffect } from "react";
import { Header } from "../components/Header";
import axios from 'axios';
import { Button, ButtonTransacoes } from "../components/Button";
import { Link, useRouteLoaderData } from "react-router-dom";
import { DivButtons, DivContainer, DivContainerHeader, DivFooter, ItemsFormContainer } from "./System.styles";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { ModalTipo } from "../components/modal/ModalTipo";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { date } from "zod";
import { Database } from "phosphor-react";

const ENDPOINT = "http://localhost:3002";

export interface Register {
  id: number;
  tipo: string;
  data: Date;
  TipoId: number
  categoria: string;
  Categorium: Categorium;
  CategoriumId: number
  percentual_ingresso: Tipo;
  descricao: string;
  valor: number;
  preco: number;
  email: string;

}

export interface Categorium {
  descricao: string;
  preco: number;
}

export interface Tipo {
  descricao: string;
  percentual_ingresso: number;
}

export interface ModalGerenciador {
  closeModal?: Function;
  data?: Register
  setCloseModal?: Function;
}


export function Register({ data }: ModalGerenciador) {
  const [id, setId] = useState(data?.id || "")
  const [TipoId, setTipoId] = useState(data?.TipoId || "");
  const [valor, setValor] = useState(data?.valor || "");
  const [tipo, setTipo] = useState([]);
  const [categoria, setCategoria] = useState([]);
  const [CategoriumId, setCategoriumId] = useState(data?.CategoriumId || "");
  const [RegisterList, setRegisterList] = useState<Register[]>([]);
  const [filterList, setFilterList] = useState("");

  const ENDPOINT = "http://localhost:3002";
  // useEffect(() => {
  //   axios.get<Register[]>('http://177.44.248.55/').then((response) => {
  //     setRegisterList(response.data);
  //   });
  // }, [])

  const methods = useForm<Register>({
    defaultValues: {
      categoria: "",
      tipo: undefined,
      valor: undefined
    },
  });

  // const filter = RegisterList.filter((tarefa) => tarefa.descricao.toLocaleLowerCase().includes(filterList.toLocaleLowerCase()) || tarefa.data_criacao.toLocaleLowerCase().startsWith(filterList.toLocaleLowerCase()) || tarefa.data_vencimento.toLocaleLowerCase().includes(filterList.toLocaleLowerCase()) || tarefa.prioridade.toLocaleLowerCase().includes(filterList.toLocaleLowerCase()) || tarefa.toString().includes(filterList.toLocaleLowerCase()));


  // const showSwal = () => {
  //   setCloseModal(false);
  //   MySwal.fire({
  //     title: <strong>Criar Tarefa</strong>,
  //     html: <ModalGerenciador closeModal={MySwal.close} setCloseModal={setCloseModal} />,
  //     showConfirmButton: false,
  //   }).then(() => setCloseModal(true));
  // };



  const calcular = (setTipoId: any, setCategoriumId: any) => {
    let percentual: number = 0
    let preco: number = 0
   
    if (setTipoId === 1) {
      percentual = 1
    } else if (setTipoId === 2) {
      percentual = 0.5
    } else if (setTipoId === 3) {
      percentual = 0.25
    } else if (setTipoId === 4) {
      percentual = 0
    } 
  
    if (setCategoriumId === 1) {
      preco = 200
    } else if (setCategoriumId === 2) {
      preco = 100
    } else if (setCategoriumId === 3) {
      preco = 50
    } else if (setCategoriumId === 4) {
      preco = 30
    }
  
    let setValor = percentual * preco;
    return setValor;
  
  }

  const { handleSubmit, formState, setValue, getValues, watch } = methods;

  async function gerar() {
    if (data) {
      console.log("acessou");

    }
    else {
      await axios.post(`${ENDPOINT}/ingressos`, {
        CategoriumId,
        TipoId,
        valor,
        data: "2022-11-22T19:05:06.250Z"
      }
      ).then(
        (response) => {
          toast.success(`Ingresso gerado!`, {
            position: toast.POSITION.TOP_RIGHT,
          });
          axios.get(`${ENDPOINT}/email/luiskochenborger@gmail.com`)
        }, (error) => {
          toast.error(`Error to created ticket: ${error.response.data.error} `, {
            position: toast.POSITION.TOP_RIGHT,
          });
        });

      setCategoriumId("");
      setTipoId("");
      setValor("");
    }
  }

  useEffect(() => {
    async function getData() {
      await axios.get(`${ENDPOINT}/categorias`).then((response) => {
        setCategoria(response.data);
      });
    }

    getData();
  }, []);

  useEffect(() => {
    async function getData() {
      await axios.get(`${ENDPOINT}/tipos`).then((response) => {
        setTipo(response.data);
      });
    }

    getData();
  }, []);

  const generatePDF = () => {
    window.open(`${ENDPOINT}/Register/relatorio/pdf`)
  }

  return (
    <>
      <Header />
      <DivContainer>
        <h2>Compra de Ingressos</h2>
        <br />
        <br />
        <br />
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(gerar)}>
            <DivContainerHeader>
              <ItemsFormContainer>
                <label>Tipo</label>
                <select
                  id="TipoId"
                  value={TipoId}
                  onChange={(e) => setTipoId(e.target.value)}
                >
                  <option key="" value="">
                    Selecione o tipo
                  </option>
                  {tipo?.map((d: any) => (
                    <option key={d.id} value={d.id}>
                      {d.descricao}
                    </option>
                  ))}
                </select>
              </ItemsFormContainer>
              <ItemsFormContainer>
                <label>Categoria</label>
                <select
                  id="CategoriumId"
                  value={CategoriumId}
                  onChange={(e) => setCategoriumId(e.target.value)}
                >
                  <option key="" value="">
                    Selecione a categoria
                  </option>
                  {categoria?.map((d: any) => (
                    <option key={d.id} value={d.id}>
                      {d.descricao}
                    </option>
                  ))}
                </select>
              </ItemsFormContainer>
              <ItemsFormContainer>
                <label>valor</label>
                <input
                  type="text"
                  id="valor"
                  value={valor}
                  onChange={(e) => setValor(e.target.value)}></input>
              </ItemsFormContainer>
              <DivButtons>
                <Button label={"Confirmar"} type="submit"></Button>
                <Button label={"Cancelar"} type="reset"></Button>
              </DivButtons>
            </DivContainerHeader>
          </form>
        </FormProvider>
      </DivContainer>
      <DivFooter>
        <Link to={'/tickets'}><ButtonTransacoes label={"Últimos Ingressos"}></ButtonTransacoes></Link>
      </DivFooter>
    </>
  )
}