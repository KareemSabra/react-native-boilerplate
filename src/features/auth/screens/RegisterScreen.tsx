import Text from "@/components/ui/Text";
import TextInput from "@/components/ui/TextInput";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import AuthLayout from "../layouts/AuthLayout";

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <AuthLayout>
      <Text>Welcome Back</Text>

      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "#007AFF",
          padding: 16,
          borderRadius: 8,
          minWidth: 200,
          alignItems: "center",
        }}
      >
        <Text>Sign In</Text>
      </TouchableOpacity>
    </AuthLayout>
  );
}
