import { useState } from "react";
import { Item } from "../(tabs)/tipos/item";

export default function usarItemsDeCompra() {
  const [items, setItems] = useState<Item[]>([]);

  function agregarProducto(nombre: string) {
    if (!nombre.trim()) return;

    const nuevoProducto: Item = {
      id: Date.now().toString(),
      nombre: nombre.trim(),
      comprado: false,
    };

    setItems((prevItems) => [...prevItems, nuevoProducto]);
  }

  function cambiarEstadoProducto(id: string) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, comprado: !item.comprado }
          : item
      )
    );
  }

  function eliminarProducto(id: string) {
    setItems((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );
  }

  return {
    items,
    agregarProducto,
    cambiarEstadoProducto,
    eliminarProducto,
  };
}