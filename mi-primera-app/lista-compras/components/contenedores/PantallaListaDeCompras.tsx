import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Producto } from '../../hooks/useListaDeCompras';
import { CampoParaAgregarProducto } from '../contenidos/CampoParaAgregarProducto';
import { FilaParaProducto } from '../contenidos/FilaParaProducto';

export function PantallaListaDeCompras({
  productos,
  texto,
  setTexto,
  onAgregar,
  onToggle,
  onEliminar,
}: {
  productos: Producto[];
  texto: string;
  setTexto: (t: string) => void;
  onAgregar: () => void;
  onToggle: (id: string) => void;
  onEliminar: (id: string) => void;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🛒 Lista de Compras</Text>

      <CampoParaAgregarProducto
        texto={texto}
        setTexto={setTexto}
        onAgregar={onAgregar}
      />

      <FlatList
        data={productos}
        keyExtractor={(p) => p.id}
        renderItem={({ item }) => (
          <FilaParaProducto
            producto={item}
            onToggle={onToggle}
            onEliminar={onEliminar}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.vacio}>
            Sin productos. ¡Agregá el primero!
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  vacio: { textAlign: 'center', marginTop: 20, color: '#777' },
});