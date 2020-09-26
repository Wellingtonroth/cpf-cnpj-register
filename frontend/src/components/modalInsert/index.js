import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { Schema } from "../../schema";
import { areasList } from "../../../utils";
import Column from "../../../_form/Column";
import Input from "../../../_form/Input";
import Select from "../../../_form/Select";
import * as S from "./styled";

export function ModalInsert({ openModal, addProff, loading }) {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    areasList(setAreas);
  }, []);

  return (
    <S.Container className="modal is-active">
      <S.Modal className="modal-background" onClick={() => openModal(false)} />
      <S.Card className="modal-card">
        <S.Header className="modal-card-head">
          Cadastrar Professor
          <S.Links to="#" aria-label="close" onClick={() => openModal(false)}>
            <S.Icons icon="close" width={16} height={16} />
          </S.Links>
        </S.Header>
        <Formik
          initialValues={{ name: "", email: "", area: "", fone: "" }}
          onSubmit={(values, { setSubmitting }) => {
            addProff(values);
            setSubmitting(false);
          }}
          validationSchema={Schema}>
          {props => {
            const {
              values,
              touched,
              errors,
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
              setFieldTouched
            } = props;

            return (
              <>
                <S.Section className="modal-card-body">
                  <S.Form onSubmit={handleSubmit}>
                    <Column>
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
                        error={errors.name && touched.name}
                      />

                      <Select
                        label="Área"
                        id="area"
                        options={areas}
                        placeholder="Selecione a área"
                        onChange={option => {
                          setFieldValue("area", option.value);
                        }}
                        onBlur={() => setFieldTouched("area", true)}
                      />
                    </Column>

                    <Column>
                      <Input
                        spaceRight
                        label="Email"
                        id="email"
                        placeholder="Digite o email"
                        type="email"
                        value={values.email}
                        onChange={value => {
                          setFieldValue("email", value);
                        }}
                        onBlur={handleBlur}
                      />
                    </Column>

                    <Column>
                      <Input
                        spaceRight
                        label="Telefone"
                        id="fone"
                        placeholder="Digite o Telefone"
                        type="tel"
                        value={values.fone}
                        onChange={value => {
                          setFieldValue("fone", value);
                        }}
                        onBlur={handleBlur}
                      />
                    </Column>
                  </S.Form>
                  <S.Footer className="modal-card-footer">
                    <S.Buttons link onClick={() => openModal(false)}>
                      CANCELAR
                    </S.Buttons>
                    <S.Buttons link loading={loading} onClick={handleSubmit}>
                      SALVAR
                    </S.Buttons>
                  </S.Footer>
                </S.Section>
              </>
            );
          }}
        </Formik>
      </S.Card>
    </S.Container>
  );
}
