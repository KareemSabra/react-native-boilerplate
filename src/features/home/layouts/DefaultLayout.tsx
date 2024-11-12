import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type DefaultLayoutProps = {
  children: React.ReactNode;
  style?: ViewStyle;
  padding?: number;
  safeArea?: boolean;
};

export default function DefaultLayout({
  children,
  style,
  padding = 16,
  safeArea = true,
}: DefaultLayoutProps) {
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
  