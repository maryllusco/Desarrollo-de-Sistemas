import {
  FlatList,
  Pressable,
  Text,
  View,
  StyleSheet,
} from "react-native";
import { Item } from "../(tabs)/tipos/item";

type Props = {
  items: Item[];
  alPresionarProducto: (id: string) => void;
  alMantenerProducto: (id: string) => void;
};

export default function ListaDeCompras({
  items,
  alPresionarProducto,
  alMantenerProducto,
}: Props) {
  function renderizarItem({ item }: { item: Item }) {
    return (
      <Pressable
        style={styles.item}
        onPress={() => alPresionarProducto(item.id)}
        onLongPress={() => alMantenerProducto(item.id)}
      >
        <Text
          style={[
            styles.nombre,
            item.comprado && styles.nombreComprado,
          ]}
        >
          {item.nombre}
        </Text>

        <Text
          style={[
            styles.estado,
            item.comprado
              ? styles.estadoComprado
              : styles.estadoPendiente,
          ]}
        >
          {item.comprado ? "✔" : "•"}
        </Text>
      </Pressable>
    );
  }

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={renderizarItem}
      keyboardShouldPersistTaps="handled"
      ItemSeparatorComponent={() => (
        <View style={styles.separador} />
      )}
      ListEmptyComponent={
        <Text style={styles.vacio}>
          Sin productos. ¡Agregá el primero! 😊
        </Text>
      }
      contentContainerStyle={styles.lista}
    />
  );
}

const styles = StyleSheet.create({
  lista: {
    paddingBottom: 30,
    flexGrow: 1,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 8,
  },
  nombre: {
    fontSize: 16,
  },
  nombreComprado: {
    textDecorationLine: "line-through",
    color: "#999999",
  },
  estado: {
    width: 28,
    height: 28,
    borderRadius: 14,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "700",
  },
  estadoPendiente: {
    backgroundColor: "#eeeeee",
    color: "#666666",
  },
  estadoComprado: {
    backgroundColor: "#2ecc71",
    color: "#ffffff",
  },
  separador: {
    height: 1,
    backgroundColor: "#eeeeee",
  },
  vacio: {
    textAlign: "center",
    marginTop: 30,
    color: "#777777",
  },
});