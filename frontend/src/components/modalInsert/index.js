import React, { useEffect } from "react";
import { Formik } from "formik";
import  Input  from "../../utils/Input";
import { Schema } from "../../schema";
import { Modal, Card, Title, Form, Button, Footer } from "../../styled";
import * as S from "./styled";

export function ModalInsert({ openModal, addUser }) {

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
        <Title>Adicionar um usuário</Title>
        <Formik
          initialValues={{ name: "", cpfcnpj: "", blacklist: false }}
          onSubmit={(values, { setSubmitting }) => {
            addUser(values);
            setSubmitting(false);
          }}
          validationSchema={Schema}>
          {props => {
            const {
              values,
              handleBlur,
              handleSubmit,
              setFieldValue,
            } = props;

            console.log(values);

            return (
              <>
                <S.Section>
                  <Form onSubmit={handleSubmit}>
                    <Input
                      spaceRight
                      label="Nome"
                      id="name"
                      placeholder="Digite o Nome"
                      type="text"
                      value={values.name}
                      onChange={value => {
                        setFieldValue("name", value);
                      }}
                      onBlur={handleBlur}
                    />

                    <Input
                      spaceRight
                      label="CPF/CNPJ"
                      id="cpfcnpj"
                      placeholder="Digite o cpf/cnpj"
                      type="text"
                      value={values.cpfcnpj}
                      onChange={value => {
                        setFieldValue("cpfcnpj", value);
                      }}
                      onBlur={handleBlur}
                    />
                  </Form>

                  <Footer>
                    <Button onClick={() => openModal(false)}>
                      CANCELAR
                    </Button>
                    <Button onClick={handleSubmit}>
                      SALVAR
                    </Button>
                  </Footer>
                </S.Section>
              </>
            );
          }}
        </Formik>
      </Card>
    </Modal>
  );
}
