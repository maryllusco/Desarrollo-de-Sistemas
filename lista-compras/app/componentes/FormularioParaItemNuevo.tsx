import { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
} from "react-native";

type Props = {
  placeholder: string;
  alAgregar: (texto: string) => void;
};

export default function FormularioParaItemNuevo({
  placeholder,
  alAgregar,
}: Props) {
  const [texto, setTexto] = useState("");

  function manejarAgregar() {
    const valor = texto.trim();

    if (!valor) return;

    alAgregar(valor);
    setTexto("");
    Keyboard.dismiss();
  }

  return (
    <View style={styles.contenedor}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={texto}
        onChangeText={setTexto}
        returnKeyType="done"
        onSubmitEditing={manejarAgregar}
        blurOnSubmit={false}
      />

      <TouchableOpacity
        style={styles.boton}
        onPress={manejarAgregar}
        activeOpacity={0.8}
      >
        <Text style={styles.textoBoton}>Agregar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#dddddd",
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 50,
    fontSize: 16,
    backgroundColor: "#ffffff",
  },
  boton: {
    backgroundColor: "#1e90ff",
    paddingHorizontal: 18,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    minWidth: 110,
  },
  textoBoton: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 16,
  },
});