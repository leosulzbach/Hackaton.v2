import { CardInfo } from "./CardInfo";
import { ContentButtons, ContentContainer, DivContainer } from "./Card.styles";
import { ButtonExit } from "../Button";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { useState } from "react";
import axios from "axios";
import { Gerenciador } from "../../pages/Confirm";
import { ModalGerenciador } from "../modal/ModalTipo";

interface CardProps {
  data: Gerenciador;
  setCloseModal: Function;
}

export function GerenciadorCard({setCloseModal, data }: CardProps) {
  const MySwal = withReactContent(Swal)

  const showSwalEdit = () => {
    setCloseModal(false);
    MySwal.fire({
      title: <strong>Editar Tarefa</strong>,
      html: <ModalGerenciador closeModal={MySwal.close} userData={data} setCloseModal={setCloseModal} />,
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
        axios.delete(`http://localhost:3002/tarefas/`+ data.id)
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

  return (
    <>
      <DivContainer>
        <ContentContainer>
          <strong>{data.id}</strong>

          <CardInfo title="Tarefa Descrição" data={data?.descricao} />
          <CardInfo title="Data Criação" data={data?.data_criacao} />
          <CardInfo title="Data Vencimento" data={data?.data_vencimento} />
          <CardInfo title="Prioridade" data={data?.prioridade} />
          <CardInfo title="Situação" data={data?.situacao} />
          <ContentButtons>
            <ButtonExit label="Edit" onClick={showSwalEdit}></ButtonExit>
            <ButtonExit label="Del" onClick={deleteData}></ButtonExit>
            <ButtonExit label="Send Mail" onClick={sendMail}></ButtonExit>

          </ContentButtons>
        </ContentContainer>
      </DivContainer>
    </>
  )
}

