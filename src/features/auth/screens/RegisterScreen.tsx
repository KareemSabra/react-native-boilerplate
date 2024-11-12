import Text from "@/components/ui/Text";
import TextInput from "@/components/ui/TextInput";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import AuthLayout from "../layouts/AuthLayout";
import Stack from "@/components/ui/Stack";
import Button from "@/components/ui/Button";
import RegisterForm from "../components/RegisterForm";

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <AuthLayout title="Register">
      <RegisterForm />
    </AuthLayout>
  );
}
