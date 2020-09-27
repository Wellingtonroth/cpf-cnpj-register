import React, { useEffect } from "react";
import { Modal, Card, Title, Form } from "../../styled";
import * as S from "./styled";

export function ModalUpdate({ openModal, updateUser, loading, user }) {

  useEffect(() => {
    function closeModalDetails(event) {
      if (event.keyCode === 27) {
        openModal();
      }
    }
    document.addEventListener("keyup", closeModalDetails);
  });

  return (
    <Modal>
      <Card>
        <Title>Editar um usuário</Title>

        <Form>
          

        </Form>

      </Card>
    </Modal>
  );
}
