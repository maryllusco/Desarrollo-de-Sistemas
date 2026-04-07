import { useState } from 'react';

export type Producto = {
  id: string;
  nombre: string;
  comprado: boolean;
};

export function useListaDeCompras() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [texto, setTexto] = useState('');

  const agregarProducto = () => {
    const limpio = texto.trim();
    if (!limpio) return;

    setProductos((prev) => [
      ...prev,
      { id: String(Date.now()), nombre: limpio, comprado: false },
    ]);

    setTexto('');
  };

  const toggleProducto = (id: string) => {
    setProductos((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, comprado: !p.comprado } : p
      )
    );
  };

  const eliminarProducto = (id: string) => {
    setProductos((prev) => prev.filter((p) => p.id !== id));
  };

  return {
    productos,
    texto,
    setTexto,
    agregarProducto,
    toggleProducto,
    eliminarProducto,
  };
}