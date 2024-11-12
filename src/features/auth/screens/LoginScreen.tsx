import LoginForm from "../components/LoginForm";
import AuthLayout from "../layouts/AuthLayout";

export default function LoginScreen() {
  return (
    <AuthLayout title="Login">
      <LoginForm />
    </AuthLayout>
  );
}
