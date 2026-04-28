import { Text, StyleSheet } from "react-native";

type Props = {
  texto?: string;
};

export default function TituloDeLaPagina({
  texto = "🛒 Lista de Compras",
}: Props) {
  return <Text style={styles.titulo}>{texto}</Text>;
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 16,
  },
});