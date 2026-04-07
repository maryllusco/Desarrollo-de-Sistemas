import { StyleSheet, TextInput, View } from 'react-native';
import { BotonAgregarAlCarrito } from './BotonAgregarAlCarrito';

export function CampoParaAgregarProducto({
  texto,
  setTexto,
  onAgregar,
}: {
  texto: string;
  setTexto: (t: string) => void;
  onAgregar: () => void;
}) {
  return (
    <View style={styles.fila}>
      <TextInput
        value={texto}
        onChangeText={setTexto}
        placeholder="Agregar producto"
        style={styles.input}
        onSubmitEditing={onAgregar}
      />
      <BotonAgregarAlCarrito texto="Agregar" onPress={onAgregar} />
    </View>
  );
}

const styles = StyleSheet.create({
  fila: { flexDirection: 'row', gap: 8 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 8,
  },
});