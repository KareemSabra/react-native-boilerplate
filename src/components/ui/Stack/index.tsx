import {
  TextStyle,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  View,
} from "react-native";
import Text from "../Text";
import { useThemeColor } from "@/hooks/useThemeColor";

type StackProps = {
  children: React.ReactNode;
  gap?: number;
  direction?: "row" | "column";
  style?: StyleProp<ViewStyle>;
};

export default function Stack({
  children,
  gap = 6,
  direction,
  style,
}: StackProps) {
  // ----------------------------------------------------------------------------------------------------
  // MARK: States & Constants
  // ----------------------------------------------------------------------------------------------------

  // ----------------------------------------------------------------------------------------------------
  // MARK: Styles
  // ----------------------------------------------------------------------------------------------------
  const styles = StyleSheet.create({
    container: {
      flexDirection: direction,
      gap: gap,
      width: "100%",
    },
  });

  // ----------------------------------------------------------------------------------------------------
  // MARK: Main Component UI
  // ----------------------------------------------------------------------------------------------------
  return <View style={[styles.container, style]}>{children}</View>;
}
