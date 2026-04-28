import { ReactNode } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

type Props = {
  children: ReactNode;
};

export default function Contenedor({ children }: Props) {
  return <SafeAreaView style={styles.contenedor}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
});