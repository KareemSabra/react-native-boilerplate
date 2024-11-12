import { appRoutes } from "@/constants/appRoutes";
import { Link } from "expo-router";
import { Text } from "react-native";
import AuthLayout from "../layouts/AuthLayout";

export default function LoginScreen() {
  return (
    <AuthLayout>
      <Text>Login</Text>
      <Link href={  appRoutes.auth.register()}>Register</Link>
    </AuthLayout>
  );
}
