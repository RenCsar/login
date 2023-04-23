import * as Lottieplayer from "@lottiefiles/lottie-player";
import "@lottiefiles/lottie-player";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <div style={{
        width: '300px',
      }}>
        <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_uxobbjkj.json"  background="transparent"  speed="1"  styles="width: 300px; height: 300px;"  loop autoplay></lottie-player>
        {/* <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_puciaact.json"  background="transparent"  speed="1"  styles="width: 300px; height: 300px;"  loop autoplay></lottie-player> */}
      </div>
    </div>
  )
}

export default Login