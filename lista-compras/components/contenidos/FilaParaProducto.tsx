import { Pressable, StyleSheet, Text } from 'react-native';
import { Producto } from '../../hooks/useListaDeCompras';

export function FilaParaProducto({
  producto,
  onToggle,
  onEliminar,
}: {
  producto: Producto;
  onToggle: (id: string) => void;
  onEliminar: (id: string) => void;
}) {
  return (
    <Pressable
      onPress={() => onToggle(producto.id)}
      onLongPress={() => onEliminar(producto.id)}
      style={styles.fila}
    >
      <Text style={[styles.texto, producto.comprado && styles.comprado]}>
        {producto.nombre}
      </Text>

      <Text>
        {producto.comprado ? '✔' : '•'}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  texto: { fontSize: 16 },
  comprado: { textDecorationLine: 'line-through', color: '#999' },
});