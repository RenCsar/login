import * as Lottieplayer from "@lottiefiles/lottie-player";
import "@lottiefiles/lottie-player";
import { Container } from "./Home.Styled";
import Header from "../../components/Header";

const Home = () => {
  return (
    <Container>
      <Header />
      <div className="welcome-container">
        <div className="lottie-container">
          <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_5s1rumi5.json"  background="transparent"  speed="1"  styles="width: 300px; height: 300px; color:#027da7"  loop  autoplay></lottie-player>
        </div>
      </div>
      <div className="text-container">
        <p>Aqui conectamos empresas aos melhores talentos em tecnologia para impulsionar seus negócios com sucesso.</p>
        <p> Seja bem-vindo e encontre os melhores profissionais para a sua equipe hoje!</p>
      </div>
      <div className="lottie-space">
        <div className="lottie-container">        
          <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_puciaact.json" background="transparent" speed="1" styles="width: 300px; height: 300px;" loop autoplay></lottie-player>
        </div>
      </div>
    </Container>
  )
}

export default Home
