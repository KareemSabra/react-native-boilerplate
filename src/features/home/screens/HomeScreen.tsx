import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";
import { appRoutes } from "@/constants/appRoutes";
import { useRouter } from "expo-router";
import DefaultLayout from "../layouts/DefaultLayout";
import Stack from "@/components/ui/Stack";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <DefaultLayout>
      <Stack gap={16} style={{ alignItems: "center" }}>
        <Text>Home</Text>
        <Button
          buttonText="Start"
          onPress={() => router.push(appRoutes.auth.register())}
          buttonStyle={{ minWidth: 200 }}
        />
      </Stack>
    </DefaultLayout>
  );
}
