import * as Yup from "yup";

export const Schema = Yup.object().shape({
  name: Yup.string().required("Campo Nome é obrigatório"),
  cpfcnpj: Yup.string().required("Campo CPF/CNPJ é obrigatório"),
  blacklist: Yup.boolean()
  .default(false)
  .required("Campo Lista negra é obrigatório"),
});
