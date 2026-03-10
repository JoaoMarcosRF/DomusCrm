import FormLogin from "../components/FormLogin";
import { LoginContainer } from "../layouts/LoginContainer";
import { LoginLogo } from "../layouts/LoginLogo";

function Login() {
  return (
    <LoginContainer>
      <LoginLogo />
      <FormLogin />
    </LoginContainer>
  );
}
export default Login;
