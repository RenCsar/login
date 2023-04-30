import * as yup from 'yup';

export const schema = yup.object({
    email: yup.string().email("Formato de e-mail inválido").required("O e-mail é obrigatório"),
    senha: yup
    .string()
    .min(6, 'A senha deve ter pelo menos 6 caracteres')
    .required('A senha é obrigatória')
})