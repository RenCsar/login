import "@lottiefiles/lottie-player";
import { Container } from "./Login.Styled";
import Button from "../../components/Button/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from "../../shared/schemas/schema";
import { TextField } from "@mui/material";
import { IUser } from "../../shared/types/types";
import { login } from "../../store/usuário/authSlice";
import { RootState, store } from "../../store/store";
import { useNavigate } from 'react-router-dom';
import CircularIndeterminate from "../../components/Loader";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Login = () => {

  const token = localStorage.getItem('token')
  const navigate = useNavigate();

  useEffect(() => {
    if (token) navigate('/home')
  }, [])

  const { register, handleSubmit, formState: { errors }, reset } = useForm<IUser>({
    resolver: yupResolver(schema)
  });

  const logar = (data: IUser) => {
    store.dispatch(login(data.email, data.password, redirectTo));
    reset();
  };

  const redirectTo = (path: string) => {
    navigate(path);
  };

  const { loading } = useSelector((state: RootState) => state.auth);

  return (
    <Container>
      {loading ?
        <CircularIndeterminate /> :
        <div className="login-card">
          <div className="lottie-container">
            <div className="img-container">
              <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_uxobbjkj.json" background="transparent" speed="1" styles="width: 300px; height: 300px;" loop autoplay></lottie-player>
              <div className="lottie-text-container">
                <p>Seja bem-vindo, acesse nosso portal e encontre o profissional ideal para o que você precisa.</p>
              </div>
            </div>
          </div>
          <div className="login-container">
            <div className="text-login">
              <h1>Log In</h1>
            </div>
            <form onSubmit={handleSubmit(logar)}>
              <TextField
                autoFocus
                size="small"
                {...register('email')}
                error={!!errors.email}
                label={errors?.email?.message ? errors.email?.message : "E-mail"}
              // helperText={errors.email?.message}
              />
              <TextField
                id="password"
                size="small"
                type="password"
                autoComplete="current-password"
                {...register("password")}
                error={!!errors.password}
                label={errors?.password?.message ? errors.password?.message : "Senha"}
              />
              <div className="btn-container">
                <Button value="Log In" padding="10px" color="#027da7" width="100px" height="40px" />
              </div>
            </form>
          </div>
        </div>
      }
    </Container>
  )
}

export default Login