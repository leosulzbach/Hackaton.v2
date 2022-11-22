import axios, { AxiosRequestConfig } from "axios";
import { FormEvent, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Register } from "../../pages/Register";
import { Button } from "../Button";
import { ItemsFormContainer, DivContainerModal } from "./Modal.styles";

const ENDPOINT = "http://localhost:3002";

interface ModalTipoProps {
    closeModal: Function;
    userData?: Register;
    setCloseModal: Function;
}

export type Tipo = {
    id: number;
    descricao: string;
    percentual: number;
}

export function ModalTipo({ closeModal ,setCloseModal, userData }: ModalTipoProps) {
    const [id, setId] = useState(userData?.id || "")
    const [descricao, setDescricao] = useState(userData?.descricao || "");
    const [percentual, setPercentual] = useState(userData?.percentual || "");
    const [RegisterList, setRegisterList] = useState<Register[]>([]);


    const methods = useForm<Register>({
        defaultValues: {
            descricao: "",
            percentual: undefined
        },
    });

    const { handleSubmit, formState, setValue, getValues, watch } = methods;

    async function create() {
        if (userData) {
            console.log("acessou");
            await axios.put(`${ENDPOINT}/tarefas/${userData.id}`, {
                descricao,
                percentual
                
            }).then(
                (response) => {
                  toast.success(`Register ${response.data.descricao} updated!`, {
                    position: toast.POSITION.TOP_RIGHT,
                  });
                  setCloseModal(true);
                  closeModal();
                }, (error) => {
                toast.error(`Error to updated Tipo: ${error.response.data.error} `,{
                    position: toast.POSITION.TOP_RIGHT,
                  });
                  setCloseModal(true);
                  closeModal();
                });
        }
        else {
            await axios.post(`${ENDPOINT}/tarefas`, {
                descricao,
                percentual
            }
            ).then(
                (response) => {
                  toast.success(`Tipo ${response.data.descricao} criado!`, {
                    position: toast.POSITION.TOP_RIGHT,
                  });
                //   axios.get(`${ENDPOINT}/email/`+email)
                  setCloseModal(true);
                  closeModal();
                }, (error) => {
                toast.error(`Error to created tipo: ${error.response.data.error} `,{
                    position: toast.POSITION.TOP_RIGHT,
                  });
                  setCloseModal(true);
                  closeModal();
                });
            setDescricao("");
            setPercentual("");
        }
    }

    useEffect(() => {
        async function getData() {
            await axios.get(`${ENDPOINT}/tipos`).then((response) => {
                setDescricao(response.data);
            });
        }

        getData();
    }, []);
    
    const MySwal = withReactContent(Swal)
    
    return (
        <DivContainerModal>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(create)}>
                    <input className="swal2-input"
                        id="id"
                        type={"hidden"}
                    />
                    <ItemsFormContainer>
                    <label>Descrição</label>
                    <input className="swal2-input"
                        id="descricao"
                        type={"string"}
                        placeholder={"descricao"}
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)} />
                    </ItemsFormContainer>
                    <ItemsFormContainer>
                    <label>Percentual Ingresso</label>
                    <input className="swal2-input"
                        id="percentual"
                        type={"string"}
                        placeholder={"Percentual do ingresso"}
                        value={percentual}
                        onChange={(e) => setPercentual(e.target.value)} />
                    </ItemsFormContainer>
                    <br />
                    <Button variant="primary" type="submit" label="Salvar" />
                </form>
            </FormProvider>
        </DivContainerModal>
    )
}