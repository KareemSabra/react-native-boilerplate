import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type AuthLayoutProps = {
  children: React.ReactNode;
  style?: ViewStyle;
  padding?: number;
  safeArea?: boolean;
};

export default function AuthLayout({
  children,
  style,
  padding = 16,
  safeArea = true,
}: AuthLayoutProps) {
  const Container = safeArea ? SafeAreaView : View;

  return (
    <SafeAreaView style={[styles.container, { padding }]}>
      <View style={[styles.content, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
