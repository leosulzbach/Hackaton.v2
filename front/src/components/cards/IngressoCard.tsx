import { CardInfo } from "./CardInfo";
import { ContentButtons, ContentContainer, DivContainer } from "./Card.styles";
import { ButtonBack, ButtonTransacoes } from "../Button";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { useState } from "react";
import axios from "axios";
import { LastSales} from "../../pages/LastSales";

interface CardProps {
  data: LastSales;
  setCloseModal: Function;
}

export function IngressosCard({setCloseModal, data }: CardProps) {
  const MySwal = withReactContent(Swal)

  const showSwalEdit = () => {
    setCloseModal(false);
    MySwal.fire({
      title: <strong>Editar Tarefa</strong>,
      html: <LastSales closeModal={MySwal.close} data={data} setCloseModal={setCloseModal} />,
      showConfirmButton: false,
    }).then(() => setCloseModal(true));
  };

  const sendMail = async () =>{
    const { value: email } = await Swal.fire({
      title: 'Input email address',
      input: 'email',
      inputLabel: 'Your email address',
      inputPlaceholder: 'Enter your email address'
    })
    
    if (email) {
      axios.get(`http://localhost:3002/email/${email}`)
      Swal.fire(`Entered email: ${email}`)
    }
}

  const deleteData = () =>{
    setCloseModal(false);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3002/ingressos/`+ data.id)
        .then(() => setCloseModal(true)
      );
        Swal.fire(
          'Deletada!',
          `Tarefa deletada`,
          'success'
        )
      }}, (error) => {
        MySwal.fire(`Error em deletar tarefa: ${error.response.data.error} `)
            .then(() => {
            })
    });
    }
    const datas = new Date(data?.data);
    const dataFormatada = datas.toLocaleDateString('pt-BR', {timeZone: 'UTC'}) + " " + datas.toLocaleTimeString('pt-BR', {timeZone: 'UTC'});

  return (
    <>
      <DivContainer>
        <ContentContainer>
          <CardInfo title="Nº Ingresso" data={data?.id} />
          <CardInfo title="Categoria" data={data?.Categorium.descricao} />
          <CardInfo title="Tipo" data={data?.Tipo.descricao} />
          <CardInfo title="Data" data={dataFormatada} />
          <ContentButtons>
            <ButtonBack label="Edit" onClick={showSwalEdit}></ButtonBack>
            <ButtonBack label="Del" onClick={deleteData}></ButtonBack>
          </ContentButtons>
        </ContentContainer>
      </DivContainer>
    </>
  )
}

