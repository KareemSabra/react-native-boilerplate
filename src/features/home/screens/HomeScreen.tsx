import Text from "@/components/ui/Text";
import { appRoutes } from "@/constants/appRoutes";
import { useRouter } from "expo-router";
import DefaultLayout from "../layouts/DefaultLayout";
import { TouchableOpacity } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <DefaultLayout>
      <Text>Home</Text>
      <TouchableOpacity
        style={{
          backgroundColor: "#007AFF",
          padding: 16,
          borderRadius: 8,
          minWidth: 200,
          alignItems: "center",
        }}
        onPress={() => router.push(appRoutes.auth.register())}
      >
        <Text>Sign In</Text>
      </TouchableOpacity>
    </DefaultLayout>
  );
}
